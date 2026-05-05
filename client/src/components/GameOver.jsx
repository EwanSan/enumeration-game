export function GameOver({
  data,
  players,
  socketId,
  playAgainRequests = [],
  onRequestPlayAgain,
  onBackHome,
}) {
  const winner = players?.find((p) => p.id === data.winnerId);
  const isWinner = data.winnerId === socketId;
  const isDraw = !data.winnerId;

  const reasonLabels = {
    timeout: "Temps écoulé !",
    wrong_answer: "Mauvaise réponse !",
    disconnect: "Adversaire déconnecté",
    all_found: "Toutes les réponses trouvées !",
  };

  const opponent = players?.find((p) => p.id !== socketId);
  const hasRequested = playAgainRequests.includes(socketId);
  const opponentRequested = opponent && playAgainRequests.includes(opponent.id);
  const canPlayAgain = data.reason !== "disconnect" && !!opponent;

  return (
    <div className="page gameover">
      <h2>
        {isDraw
          ? "Égalité !"
          : isWinner
            ? "Victoire !"
            : "Défaite..."}
      </h2>

      <p className="reason">{reasonLabels[data.reason] || data.reason}</p>

      {winner && <p>Gagnant : <strong>{winner.name}</strong></p>}

      <p>
        {data.givenAnswers.length} / {data.totalAnswers} réponses trouvées
      </p>

      <details>
        <summary>Voir toutes les réponses</summary>
        <ul className="answers-list">
          {data.correctAnswers.map((a) => (
            <li key={a} className={data.givenAnswers.some(
              (g) => g.toLowerCase() === a.toLowerCase()
            ) ? "found" : "missed"}>
              {a}
            </li>
          ))}
        </ul>
      </details>

      <div className="gameover-actions">
        {canPlayAgain && (
          <button onClick={onRequestPlayAgain} disabled={hasRequested}>
            {hasRequested ? "En attente de l'adversaire…" : "Rejouer"}
          </button>
        )}
        <button onClick={onBackHome}>Retour à l'accueil</button>
      </div>

      {canPlayAgain && opponentRequested && !hasRequested && (
        <p className="play-again-hint">
          {opponent.name} veut rejouer !
        </p>
      )}
    </div>
  );
}
