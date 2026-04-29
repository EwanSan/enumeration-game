import { useState, useRef, useEffect, useMemo } from "react";

/**
 * Normalize a string for filtering: lowercase, strip accents, collapse whitespace.
 */
function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

export function Game({
  gameData,
  currentPlayerId,
  socketId,
  timerRemaining,
  givenAnswers,
  lastResult,
  onSubmitAnswer,
}) {
  const [input, setInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const isMyTurn = currentPlayerId === socketId;
  const myPlayer = gameData.players.find((p) => p.id === socketId);
  const opponent = gameData.players.find((p) => p.id !== socketId);

  // Filter answer set for autocomplete: exclude already given answers
  const availableAnswers = useMemo(() => {
    const givenNorm = new Set(givenAnswers.map(normalize));
    return gameData.answerSet.filter((a) => !givenNorm.has(normalize(a)));
  }, [gameData.answerSet, givenAnswers]);

  // Filtered suggestions based on input
  const suggestions = useMemo(() => {
    if (!input.trim()) return [];
    const norm = normalize(input);
    return availableAnswers
      .filter((a) => normalize(a).includes(norm))
      .slice(0, 8);
  }, [input, availableAnswers]);

  // Reset selected index when suggestions change
  useEffect(() => {
    setSelectedIndex(0);
  }, [suggestions.length, input]);

  // Focus input on turn change
  useEffect(() => {
    if (isMyTurn) {
      inputRef.current?.focus();
    }
  }, [isMyTurn]);

  function submit(answer) {
    if (!answer.trim() || !isMyTurn) return;
    onSubmitAnswer(answer);
    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions.length > 0) {
        submit(suggestions[selectedIndex]);
      } else if (input.trim()) {
        submit(input.trim());
      }
    }
  }

  return (
    <div className="page game">
      <div className="game-header">
        <div className="players">
          <span className={currentPlayerId === myPlayer.id ? "active" : ""}>
            {myPlayer.name} (vous)
          </span>
          <span className="vs">vs</span>
          <span className={currentPlayerId === opponent.id ? "active" : ""}>
            {opponent.name}
          </span>
        </div>
        <div className={`timer ${timerRemaining <= 3 ? "urgent" : ""}`}>
          {timerRemaining}s
        </div>
      </div>

      <div className="question">
        <h2>{gameData.question.text}</h2>
        <p className="progress">
          {givenAnswers.length} / {gameData.totalAnswers} trouvées
        </p>
      </div>

      <div className="input-area">
        <div className="autocomplete-wrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder={isMyTurn ? "Tapez votre réponse..." : "Tour de l'adversaire..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={!isMyTurn}
          />
          {suggestions.length > 0 && isMyTurn && (
            <ul className="suggestions">
              {suggestions.map((s, i) => (
                <li
                  key={s}
                  className={i === selectedIndex ? "selected" : ""}
                  onMouseEnter={() => setSelectedIndex(i)}
                  onClick={() => submit(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {lastResult && (
        <div className={`last-result ${lastResult.correct ? "correct" : "wrong"}`}>
          {lastResult.correct
            ? `✓ ${lastResult.answer}`
            : lastResult.alreadyGiven
              ? `Déjà donné : ${lastResult.answer}`
              : `✗ ${lastResult.answer}`}
        </div>
      )}

      <div className="given-answers">
        <h3>Réponses données</h3>
        <div className="tags">
          {givenAnswers.map((a) => (
            <span key={a} className="tag">{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
