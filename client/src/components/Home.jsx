import { useState } from "react";

export function Home({ onCreateRoom, onJoinRoom, error, themes, initialRoomCode = "" }) {
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState(initialRoomCode);
  const [timerDuration, setTimerDuration] = useState(10);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [mode, setMode] = useState(initialRoomCode ? "join" : null); // null | "create" | "join"

  const canSubmit = name.trim().length > 0;

  return (
    <div className="page home">
      <h1>Jeu de l'Énumération</h1>
      <p className="subtitle">Affrontez un ami en répondant tour à tour !</p>

      <div className="name-input">
        <label htmlFor="name">Votre pseudo</label>
        <input
          id="name"
          type="text"
          placeholder="Pseudo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
        />
      </div>

      {!mode && (
        <div className="actions">
          <button
            disabled={!canSubmit}
            onClick={() => setMode("create")}
          >
            Créer une partie
          </button>
          <button
            disabled={!canSubmit}
            onClick={() => setMode("join")}
          >
            Rejoindre une partie
          </button>
        </div>
      )}

      {mode === "create" && (
        <div className="actions">
          <label>Thème</label>
          <div className="theme-picker">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`theme-option ${t.id === selectedTheme ? "active" : "secondary"}`}
                onClick={() => setSelectedTheme(t.id)}
              >
                {t.name}
              </button>
            ))}
          </div>
          <label htmlFor="timer">Temps par tour (secondes)</label>
          <div className="timer-picker">
            {[5, 10, 15, 20, 30].map((t) => (
              <button
                key={t}
                className={`timer-option ${t === timerDuration ? "active" : "secondary"}`}
                onClick={() => setTimerDuration(t)}
              >
                {t}s
              </button>
            ))}
          </div>
          <button
            disabled={!canSubmit || !selectedTheme}
            onClick={() => onCreateRoom(name.trim(), timerDuration, selectedTheme)}
          >
            Confirmer la création
          </button>
          <button className="secondary" onClick={() => setMode(null)}>
            Retour
          </button>
        </div>
      )}

      {mode === "join" && (
        <div className="actions">
          <label htmlFor="code">Code de la partie</label>
          <input
            id="code"
            type="text"
            placeholder="Ex: XK7F"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
            maxLength={4}
          />
          <button
            disabled={!canSubmit || joinCode.length !== 4}
            onClick={() => onJoinRoom(joinCode, name.trim())}
          >
            Rejoindre
          </button>
          <button className="secondary" onClick={() => setMode(null)}>
            Retour
          </button>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
