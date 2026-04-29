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
    const room = { id: roomId, players: [], game: null, io, timerDuration, theme };
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
    const question = theme.questions[Math.floor(Math.random() * theme.questions.length)];
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
        // Clean up room after game ends
        setTimeout(() => this.deleteRoom(room.id), 60_000);
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
