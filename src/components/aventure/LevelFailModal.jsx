export default function LevelFailModal({ score, total, onReread, onRetry, onClose }) {
  const pct = Math.round((score / total) * 100);

  return (
    <div className="level-modal-backdrop" onClick={onClose}>
      <div className="fail-modal" onClick={e => e.stopPropagation()}>
        <div className="fail-modal-icon">😤</div>
        <h3 className="fail-modal-titre">Pas encore...</h3>
        <p className="fail-modal-score">
          Tu as obtenu <strong>{score}/{total}</strong> ({pct}%)
          <br />Il faut au moins <strong>70%</strong> pour passer ce niveau.
        </p>
        <p className="fail-modal-msg">
          Pas de panique ! Relis la fiche pour consolider tes connaissances, puis retente le QCM.
        </p>
        <div className="fail-modal-actions">
          <button className="fail-btn relire" onClick={onReread}>
            📖 Relire la fiche
          </button>
          <button className="fail-btn retry" onClick={onRetry}>
            🔄 Retenter le QCM
          </button>
        </div>
      </div>
    </div>
  );
}
