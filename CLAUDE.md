# Enumeration Game

Real-time multiplayer game for 2 players. A question is displayed whose correct answers are a subset of a predefined "answer set" (e.g. countries of the world). Players take turns answering within a time limit. The first to give a wrong answer or run out of time loses.

## Stack

- **Client**: React + Vite
- **Server**: Node.js + Express + Socket.io
- **Data**: static JSON files (no database)
- **Target hosting**: Vercel (client) + Render (server)

## Structure

```
client/             # React frontend (Vite)
server/             # Node.js backend
  src/
    index.js        # Entry point: Express + Socket.io
    game/
      RoomManager.js  # Room lifecycle (create, join, destroy)
      GameState.js    # Game state machine for a single match
      Timer.js        # Server-side timer (source of truth)
    data/
      themes/         # One file per theme (countries.js, …)
        index.js      # Barrel re-exporting every theme
      themeLoader.js  # Loads + validates themes at startup
    utils/
      normalize.js    # String normalization (accents, case)
```

## Key Concepts

- **Theme**: a self-contained bundle of `{ id, name, answerSet, questions }`. One file per theme under `data/themes/`. Adding a theme = creating one file and adding one line to `data/themes/index.js`.
- **Answer Set**: full set of possible answers for a theme (e.g. all countries). Sent to client for autocomplete.
- **Question**: text + list of correct answers (validated at startup to be a subset of the theme's answer set — server crashes with a clear error otherwise).
- **Room**: identified by a short code (4 chars). Holds 2 players, a chosen theme, a turn duration, and a GameState.
- **Timer**: managed server-side to prevent cheating. Client receives ticks for display.

## REST Endpoints

- `GET /health` -> `{ status: "ok" }`
- `GET /themes` -> `[{ id, name }, …]` for the client's theme picker

## Socket.io Events

- `create_room({ playerName, timerDuration, themeId })` -> server creates room, callback returns `{ roomId }` or `{ error }`
- `join_room({ roomId, playerName })` -> server adds player 2, emits `game_start` to both
- `submit_answer({ answer })` -> server validates, emits `answer_result` then `turn_change` or `game_over`
- `timer_tick` -> server emits every second
- `game_over` -> emitted when a player loses (wrong answer, timeout, disconnect) or all answers are found

## Environment variables

| Service | Variable | Purpose |
|---|---|---|
| Server | `CLIENT_ORIGIN` | Allowed CORS origin (set to Vercel URL in prod, defaults to `http://localhost:5173`) |
| Server | `PORT` | Port to listen on (set automatically by Render, defaults to 3001) |
| Client | `VITE_SERVER_URL` | Server base URL (set to Render URL in prod, defaults to `http://localhost:3001`) |

## Commands

```bash
# Server (port 3001)
cd server && npm install && npm run dev

# Client (port 5173)
cd client && npm install && npm run dev
```

## Lobby shareable link

When a room is created, the Lobby shows the full join URL as `window.location.origin + "?room=" + roomId`. When that URL is opened, `App.jsx` reads the `?room=` query param and passes it to `Home` as `initialRoomCode`, which pre-fills the join code and switches directly to join mode.

The `/themes` fetch in `useSocket.js` is fired both on initial load and on socket `connect`, so the theme list is always populated even if the server was cold (sleeping on Render free tier) when the page first loaded.

## Adding questions to a theme

Use the `add-theme-question` skill (`.claude/skills/add-theme-question/SKILL.md`). Per-question research notes and cached source datasets live under `research/` — versioned for traceability, not shipped to the server.
