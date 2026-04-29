import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { RoomManager } from "./game/RoomManager.js";
import { themeList } from "./data/themeLoader.js";

const PORT = process.env.PORT || 3001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

const app = express();
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", CLIENT_ORIGIN);
  next();
});
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: CLIENT_ORIGIN,
    methods: ["GET", "POST"],
  },
});

const roomManager = new RoomManager();

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.get("/themes", (_req, res) => res.json(themeList));

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);

  // --- Create a room ---
  socket.on("create_room", ({ playerName, timerDuration, themeId }, callback) => {
    const result = roomManager.createRoom(io, timerDuration, themeId);
    if (result.error) {
      callback({ error: result.error });
      return;
    }
    const room = result.room;
    const player = { id: socket.id, name: playerName };
    roomManager.addPlayer(room.id, player);
    socket.join(room.id);
    callback({ roomId: room.id });
    console.log(`Room ${room.id} created by ${playerName} (theme: ${themeId})`);
  });

  // --- Join a room ---
  socket.on("join_room", ({ roomId, playerName }, callback) => {
    const room = roomManager.getRoom(roomId);
    if (!room) {
      callback({ error: "room_not_found" });
      return;
    }

    // Join the Socket.io room BEFORE adding the player,
    // because addPlayer may trigger startGame which emits to the room.
    socket.join(room.id);

    const result = roomManager.addPlayer(room.id, {
      id: socket.id,
      name: playerName,
    });

    if (result.error) {
      callback({ error: result.error });
      return;
    }

    callback({ ok: true });
    console.log(`${playerName} joined room ${roomId}`);
  });

  // --- Submit an answer ---
  socket.on("submit_answer", ({ answer }) => {
    const room = roomManager.findRoomByPlayerId(socket.id);
    if (!room?.game) return;

    const result = room.game.submitAnswer(socket.id, answer);
    if (!result) return;

    io.to(room.id).emit("answer_result", {
      playerId: socket.id,
      answer,
      correct: result.correct,
      alreadyGiven: result.alreadyGiven,
      allFound: result.allFound || false,
    });
  });

  // --- Disconnect ---
  socket.on("disconnect", () => {
    const room = roomManager.findRoomByPlayerId(socket.id);
    if (room) {
      if (room.game && room.game.status === "playing") {
        const winner = room.game.players.find((p) => p.id !== socket.id);
        room.game.endGame(winner, "disconnect");
      } else {
        roomManager.deleteRoom(room.id);
      }
    }
    console.log(`Player disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
