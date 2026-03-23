export default function LevelDetailModal({ level, onClose, onFiche, onQcm, onFlashcards }) {
  if (!level) return null;

  return (
    <div className="level-modal-backdrop" onClick={onClose}>
      <div className="level-modal" onClick={e => e.stopPropagation()}>
        {/* Drag handle */}
        <div className="level-modal-handle" />

        {/* Header */}
        <div className="level-modal-header">
          <span className="level-modal-emoji">{level.emoji}</span>
          <h3 className="level-modal-titre">{level.titre}</h3>
        </div>

        {/* Etoiles */}
        <div className="level-modal-stars">
          <div className={`level-star-row ${level.stars[0] ? "earned" : ""}`}>
            <span>{level.stars[0] ? "⭐" : "☆"}</span>
            <span>Lire la fiche de cours</span>
          </div>
          <div className={`level-star-row ${level.stars[1] ? "earned" : ""}`}>
            <span>{level.stars[1] ? "⭐" : "☆"}</span>
            <span>QCM reussi (&ge; 70%)</span>
            {level.bestQcmPct > 0 && (
              <span className="level-star-score">{level.bestQcmPct}%</span>
            )}
          </div>
          <div className={`level-star-row ${level.stars[2] ? "earned" : ""}`}>
            <span>{level.stars[2] ? "⭐" : "☆"}</span>
            <span>Flashcards maitrisees (&ge; 80%)</span>
          </div>
        </div>

        {/* Stats */}
        {level.attempts > 0 && (
          <p className="level-modal-stats">
            {level.attempts} tentative{level.attempts > 1 ? "s" : ""} &middot; Meilleur score : {level.bestQcmPct}%
          </p>
        )}

        {/* Actions */}
        <div className="level-modal-actions">
          <button className="level-action-btn fiche" onClick={onFiche}>
            <span>📖</span> Lire la fiche
          </button>
          <button
            className={`level-action-btn qcm ${!level.stars[1] ? "primary" : ""}`}
            onClick={onQcm}
            disabled={!level.hasQcm}
          >
            <span>✅</span> QCM Challenge
            {!level.hasQcm && <small>(indisponible)</small>}
          </button>
          <button
            className="level-action-btn fc"
            onClick={onFlashcards}
            disabled={!level.hasFlashcards}
          >
            <span>🃏</span> Flashcards
            {!level.hasFlashcards && <small>(indisponible)</small>}
          </button>
        </div>

        <button className="level-modal-close" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}
