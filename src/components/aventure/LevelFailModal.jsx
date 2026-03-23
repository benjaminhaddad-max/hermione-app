export default function LevelFailModal({ score, total, onReread, onRetry, onClose }) {
  const pct = Math.round((score / total) * 100);

  return (
    <div className="level-modal-backdrop" onClick={onClose}>
      <div className="fail-modal" onClick={e => e.stopPropagation()}>
        <div className="fail-modal-icon">🧹</div>
        <h3 className="fail-modal-titre">Le sortilège a échoué...</h3>
        <p className="fail-modal-score">
          Tu as obtenu <strong>{score}/{total}</strong> ({pct}%)
          <br />Il faut au moins <strong>70%</strong> pour maîtriser ce sortilège.
        </p>
        <p className="fail-modal-msg">
          Même Hermione a dû s'y reprendre ! Relis le grimoire pour consolider tes connaissances, puis retente l'épreuve.
        </p>
        <div className="fail-modal-actions">
          <button className="fail-btn relire" onClick={onReread}>
            📜 Relire le grimoire
          </button>
          <button className="fail-btn retry" onClick={onRetry}>
            🔄 Retenter l'épreuve
          </button>
        </div>
      </div>
    </div>
  );
}
