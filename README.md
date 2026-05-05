# Jeu de l'Énumération

A real-time multiplayer game where two players face off by taking turns answering enumeration questions.

https://enumeration-game.vercel.app/

## How it works

The host picks a **theme** (e.g. countries) and a turn duration. A question is then displayed to both players (e.g. "Which countries are more populated than France?"). Players take turns giving an answer within the chosen time limit. The game ends when a player:

- Gives a wrong answer
- Doesn't answer in time
- Disconnects

An autocomplete over the full set of possible answers (e.g. all countries) helps players type faster and avoid typos.

If both players manage to find every correct answer, a new question is displayed until a winner is determined.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Install dependencies

```bash
# From the project root
cd server && npm install
cd ../client && npm install
```

### Run

Start both the server and the client in two separate terminals:

```bash
# Terminal 1 — game server (port 3001)
cd server
npm run dev

# Terminal 2 — frontend (port 5173)
cd client
npm run dev
```

Then open http://localhost:5173 in your browser.

### Play

1. Open **two browser tabs** on http://localhost:5173
2. In the first tab, enter a username, click **Créer une partie**, pick a theme and turn duration, then confirm — the lobby shows a 4-character room code and a shareable link
3. In the second tab, enter a username, click **Rejoindre une partie**, and type in the room code (or open the shareable link directly — the code is pre-filled)
4. The game starts automatically — answer by typing in the input field, pick a suggestion with the arrow keys and press Enter
5. The game ends when someone runs out of time or gives a wrong answer

## Production deployment

The game is designed to be deployed for free on **Vercel** (client) + **Render** (server).

### Environment variables

| Service | Variable | Value |
|---|---|---|
| Render (server) | `CLIENT_ORIGIN` | Your Vercel app URL, e.g. `https://my-game.vercel.app` |
| Vercel (client) | `VITE_SERVER_URL` | Your Render service URL, e.g. `https://my-game-server.onrender.com` |

`PORT` is set automatically by Render and read by the server via `process.env.PORT`.

### Cold starts

Render's free tier shuts down the server after 15 minutes of inactivity, causing a ~50-second cold start on the next visit. To avoid this, set up a free [UptimeRobot](https://uptimerobot.com) monitor pinging `GET /health` every 5 minutes.

## Project structure

```
server/                 Node.js + Express + Socket.io
  src/
    index.js            Entry point, socket event handlers
    game/
      RoomManager.js    Room creation, joining, cleanup
      GameState.js      Turn logic, answer validation, win conditions
      Timer.js          Server-side countdown (source of truth)
    data/
      themes/           One file per theme (answer set + questions)
        index.js        Barrel re-exporting every theme
      themeLoader.js    Loads themes and validates them at startup
    utils/
      normalize.js      Accent/case-insensitive string matching

client/                 React + Vite
  src/
    App.jsx             Page routing based on game state
    hooks/
      useSocket.js      Socket.io connection and reactive game state
    components/
      Home.jsx          Create or join a room
      Lobby.jsx         Waiting screen with room code
      Game.jsx          Main game view (question, autocomplete, timer)
      GameOver.jsx      Results screen
```
