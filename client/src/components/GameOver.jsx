export function GameOver({ data, players, socketId, onPlayAgain }) {
  const winner = players?.find((p) => p.id === data.winnerId);
  const isWinner = data.winnerId === socketId;
  const isDraw = !data.winnerId;

  const reasonLabels = {
    timeout: "Temps écoulé !",
    wrong_answer: "Mauvaise réponse !",
    disconnect: "Adversaire déconnecté",
    all_found: "Toutes les réponses trouvées !",
  };

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

      <button onClick={onPlayAgain}>Nouvelle partie</button>
    </div>
  );
}
