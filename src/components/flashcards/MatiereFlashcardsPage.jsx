export default function MatiereFlashcardsPage({ matiere, storage, onSelectCours, onBack }) {
  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">{matiere.emoji} {matiere.nom}</span>
        <div style={{ width: 32 }} />
      </div>
      <div className="list-items">
        {matiere.cours.map(c => {
          const total = c.flashcardsData?.length || 0;
          const prog = storage?.flashcards_progress?.[c.id];
          const mastered = prog?.mastered_count || 0;
          const pct = total > 0 ? Math.round(mastered / total * 100) : 0;
          return (
            <button key={c.id} className="list-item" onClick={() => onSelectCours(c)}>
              <div className="list-item-left">
                <span className="list-item-emoji">{c.emoji}</span>
                <div>
                  <div className="list-item-titre">{c.titre}</div>
                  <div className="list-item-meta">{total} cartes · {mastered} maîtrisées</div>
                </div>
              </div>
              <div className="list-item-right">
                {pct > 0 && <span className="badge-score">{pct}%</span>}
                <span className="list-chevron">›</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
