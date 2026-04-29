import { useSocket } from "./hooks/useSocket";
import { Home } from "./components/Home";
import { Lobby } from "./components/Lobby";
import { Game } from "./components/Game";
import { GameOver } from "./components/GameOver";

export default function App() {
  const state = useSocket();
  const initialRoomCode = new URLSearchParams(window.location.search).get("room")?.toUpperCase() || "";

  return (
    <div className="app">
      {state.page === "home" && (
        <Home
          onCreateRoom={state.createRoom}
          onJoinRoom={state.joinRoom}
          error={state.error}
          themes={state.themes}
          initialRoomCode={initialRoomCode}
        />
      )}

      {state.page === "lobby" && (
        <Lobby roomId={state.roomId} />
      )}

      {state.page === "game" && state.gameData && (
        <Game
          gameData={state.gameData}
          currentPlayerId={state.currentPlayerId}
          socketId={state.socketId}
          timerRemaining={state.timerRemaining}
          givenAnswers={state.givenAnswers}
          lastResult={state.lastResult}
          onSubmitAnswer={state.submitAnswer}
        />
      )}

      {state.page === "gameover" && state.gameOverData && (
        <GameOver
          data={state.gameOverData}
          players={state.gameData?.players}
          socketId={state.socketId}
          onPlayAgain={state.resetToHome}
        />
      )}

      {!state.connected && (
        <div className="connection-status">Connexion au serveur...</div>
      )}
    </div>
  );
}
