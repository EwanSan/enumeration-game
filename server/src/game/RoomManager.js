import { GameState } from "./GameState.js";
import { themes } from "../data/themeLoader.js";

/**
 * Manages rooms: creation, joining, cleanup.
 * Each room holds one game between two players.
 */
export class RoomManager {
  constructor() {
    /** @type {Map<string, Room>} */
    this.rooms = new Map();
  }

  generateRoomId() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars (0/O, 1/I)
    let id;
    do {
      id = Array.from({ length: 4 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      ).join("");
    } while (this.rooms.has(id));
    return id;
  }

  createRoom(io, timerDuration = 10, themeId) {
    const theme = themes.get(themeId);
    if (!theme) return { error: "invalid_theme" };
    const roomId = this.generateRoomId();
    const room = {
      id: roomId,
      players: [],
      game: null,
      io,
      timerDuration,
      theme,
      playAgainRequests: new Set(),
      deleteTimeout: null,
    };
    this.rooms.set(roomId, room);
    return { room };
  }

  getRoom(roomId) {
    return this.rooms.get(roomId.toUpperCase()) || null;
  }

  deleteRoom(roomId) {
    const room = this.rooms.get(roomId);
    if (room?.game) {
      room.game.timer.stop();
    }
    if (room?.deleteTimeout) {
      clearTimeout(room.deleteTimeout);
    }
    this.rooms.delete(roomId);
  }

  addPlayer(roomId, player) {
    const room = this.getRoom(roomId);
    if (!room) return { error: "room_not_found" };
    if (room.players.length >= 2) return { error: "room_full" };

    room.players.push(player);

    if (room.players.length === 2) {
      this.startGame(room);
    }

    return { ok: true, room };
  }

  startGame(room) {
    const { theme } = room;
    // Avoid repeating the previous question when possible (play-again scenario).
    const previousQuestionId = room.game?.question?.id;
    const candidates =
      previousQuestionId && theme.questions.length > 1
        ? theme.questions.filter((q) => q.id !== previousQuestionId)
        : theme.questions;
    const question = candidates[Math.floor(Math.random() * candidates.length)];
    const answerSet = theme.answerSet;

    const game = new GameState(question, answerSet, room.timerDuration, {
      onTick: (remaining) => {
        room.io.to(room.id).emit("timer_tick", { remaining });
      },
      onTurnChange: (currentPlayer) => {
        room.io.to(room.id).emit("turn_change", {
          currentPlayerId: currentPlayer.id,
        });
      },
      onGameOver: ({ winner, reason, givenAnswers }) => {
        room.io.to(room.id).emit("game_over", {
          winnerId: winner?.id || null,
          reason,
          givenAnswers,
          totalAnswers: question.correctAnswers.length,
          correctAnswers: question.correctAnswers,
        });
        // Reset play-again requests for the next round.
        room.playAgainRequests = new Set();
        // Clean up room after game ends if no one wants to play again.
        room.deleteTimeout = setTimeout(() => this.deleteRoom(room.id), 60_000);
      },
    });

    game.players = room.players;
    game.start();
    room.game = game;

    room.io.to(room.id).emit("game_start", {
      question: { id: question.id, text: question.text },
      answerSet,
      players: room.players,
      currentPlayerId: game.currentPlayer.id,
      totalAnswers: question.correctAnswers.length,
    });
  }

  /**
   * Player requests to play again after a game ended.
   * When both players in the room have requested, a new game starts.
   */
  requestPlayAgain(roomId, playerId) {
    const room = this.getRoom(roomId);
    if (!room) return { error: "room_not_found" };
    if (!room.game || room.game.status !== "finished") {
      return { error: "game_not_finished" };
    }
    if (!room.players.some((p) => p.id === playerId)) {
      return { error: "not_in_room" };
    }

    room.playAgainRequests.add(playerId);

    if (room.playAgainRequests.size === room.players.length) {
      if (room.deleteTimeout) {
        clearTimeout(room.deleteTimeout);
        room.deleteTimeout = null;
      }
      room.playAgainRequests = new Set();
      this.startGame(room);
      return { ok: true, started: true };
    }

    room.io.to(room.id).emit("play_again_update", {
      requestingIds: Array.from(room.playAgainRequests),
    });
    return { ok: true, started: false };
  }

  /**
   * Find which room a player (by socket id) is in.
   */
  findRoomByPlayerId(playerId) {
    for (const room of this.rooms.values()) {
      if (room.players.some((p) => p.id === playerId)) {
        return room;
      }
    }
    return null;
  }
}
