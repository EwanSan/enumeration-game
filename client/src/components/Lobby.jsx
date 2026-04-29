import { useState } from "react";

export function Lobby({ roomId }) {
  const joinUrl = `${window.location.origin}?room=${roomId}`;
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(joinUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="page lobby">
      <h2>Salle d'attente</h2>
      <p>Partagez ce lien avec votre adversaire :</p>
      <div className="room-code">{roomId}</div>
      <div className="share-row">
        <input className="share-url" readOnly value={joinUrl} onClick={(e) => e.target.select()} />
        <button onClick={copyLink}>{copied ? "Copié !" : "Copier le lien"}</button>
      </div>
      <p className="hint">En attente du deuxième joueur...</p>
    </div>
  );
}
