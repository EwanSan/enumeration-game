import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

/**
 * Single shared socket connection + reactive game state.
 */
export function useSocket() {
  const socketRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [socketId, setSocketId] = useState(null);
  const [page, setPage] = useState("home"); // home | lobby | game | gameover
  const [roomId, setRoomId] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState(null);

  // Game state
  const [gameData, setGameData] = useState(null); // from game_start
  const [currentPlayerId, setCurrentPlayerId] = useState(null);
  const [timerRemaining, setTimerRemaining] = useState(0);
  const [givenAnswers, setGivenAnswers] = useState([]);
  const [lastResult, setLastResult] = useState(null);
  const [gameOverData, setGameOverData] = useState(null);
  const [playAgainRequests, setPlayAgainRequests] = useState([]);
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const socket = io(SERVER_URL, { autoConnect: true });
    socketRef.current = socket;

    socket.on("connect", () => {
      setConnected(true);
      setSocketId(socket.id);
    });

    socket.on("themes", setThemes);
    socket.on("disconnect", () => { setConnected(false); setSocketId(null); });

    socket.on("game_start", (data) => {
      setGameData(data);
      setCurrentPlayerId(data.currentPlayerId);
      setGivenAnswers([]);
      setLastResult(null);
      setGameOverData(null);
      setPlayAgainRequests([]);
      setPage("game");
    });

    socket.on("turn_change", ({ currentPlayerId }) => {
      setCurrentPlayerId(currentPlayerId);
    });

    socket.on("timer_tick", ({ remaining }) => {
      setTimerRemaining(remaining);
    });

    socket.on("answer_result", (result) => {
      setLastResult(result);
      if (result.correct) {
        setGivenAnswers((prev) => [...prev, result.answer]);
      }
    });

    socket.on("game_over", (data) => {
      setGameOverData(data);
      setPlayAgainRequests([]);
      setPage("gameover");
    });

    socket.on("play_again_update", ({ requestingIds }) => {
      setPlayAgainRequests(requestingIds);
    });

    return () => socket.disconnect();
  }, []);

  function createRoom(name, timerDuration = 10, themeId) {
    setError(null);
    setPlayerName(name);
    socketRef.current.emit("create_room", { playerName: name, timerDuration, themeId }, (res) => {
      if (res.error) {
        setError(res.error);
      } else {
        setRoomId(res.roomId);
        setPage("lobby");
      }
    });
  }

  function joinRoom(id, name) {
    setError(null);
    setPlayerName(name);
    socketRef.current.emit(
      "join_room",
      { roomId: id.toUpperCase(), playerName: name },
      (res) => {
        if (res.error) {
          setError(res.error);
        } else {
          setRoomId(id.toUpperCase());
          // Don't set page here — game_start event will transition to "game"
        }
      }
    );
  }

  function submitAnswer(answer) {
    socketRef.current.emit("submit_answer", { answer });
  }

  function requestPlayAgain() {
    socketRef.current.emit("play_again");
    setPlayAgainRequests((prev) =>
      prev.includes(socketRef.current.id) ? prev : [...prev, socketRef.current.id]
    );
  }

  function resetToHome() {
    setPage("home");
    setRoomId(null);
    setGameData(null);
    setGameOverData(null);
    setGivenAnswers([]);
    setLastResult(null);
    setPlayAgainRequests([]);
    setError(null);
  }

  return {
    socketId,
    connected,
    page,
    roomId,
    playerName,
    error,
    gameData,
    currentPlayerId,
    timerRemaining,
    givenAnswers,
    lastResult,
    gameOverData,
    playAgainRequests,
    themes,
    createRoom,
    joinRoom,
    submitAnswer,
    requestPlayAgain,
    resetToHome,
  };
}
