export default function LevelDetailModal({ level, onClose, onFiche, onQcm, onFlashcards }) {
  if (!level) return null;

  return (
    <div className="level-modal-backdrop" onClick={onClose}>
      <div className="level-modal" onClick={e => e.stopPropagation()}>
        <div className="level-modal-handle" />

        <div className="level-modal-header">
          <span className="level-modal-emoji">{level.emoji}</span>
          <h3 className="level-modal-titre">{level.titre}</h3>
        </div>

        <div className="level-modal-stars">
          <div className={`level-star-row ${level.stars[0] ? "earned" : ""}`}>
            <span>{level.stars[0] ? "⭐" : "☆"}</span>
            <span>Étudier le grimoire</span>
          </div>
          <div className={`level-star-row ${level.stars[1] ? "earned" : ""}`}>
            <span>{level.stars[1] ? "⭐" : "☆"}</span>
            <span>Réussir l'épreuve (≥ 70%)</span>
            {level.bestQcmPct > 0 && (
              <span className="level-star-score">{level.bestQcmPct}%</span>
            )}
          </div>
          <div className={`level-star-row ${level.stars[2] ? "earned" : ""}`}>
            <span>{level.stars[2] ? "⭐" : "☆"}</span>
            <span>Maîtriser les cartes magiques (≥ 80%)</span>
          </div>
        </div>

        {level.attempts > 0 && (
          <p className="level-modal-stats">
            {level.attempts} tentative{level.attempts > 1 ? "s" : ""} &middot; Meilleur score : {level.bestQcmPct}%
          </p>
        )}

        <div className="level-modal-actions">
          <button className="level-action-btn fiche" onClick={onFiche}>
            <span>📜</span> Lire le grimoire
          </button>
          <button
            className={`level-action-btn qcm ${!level.stars[1] ? "primary" : ""}`}
            onClick={onQcm}
            disabled={!level.hasQcm}
          >
            <span>⚗️</span> Épreuve QCM
            {!level.hasQcm && <small>(indisponible)</small>}
          </button>
          <button
            className="level-action-btn fc"
            onClick={onFlashcards}
            disabled={!level.hasFlashcards}
          >
            <span>🃏</span> Cartes magiques
            {!level.hasFlashcards && <small>(indisponible)</small>}
          </button>
        </div>

        <button className="level-modal-close" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}
