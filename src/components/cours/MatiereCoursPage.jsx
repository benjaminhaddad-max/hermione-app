export default function MatiereCoursPage({ matiere, storage, onSelectCours, onBack }) {
  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">{matiere.emoji} {matiere.nom}</span>
        <div style={{ width: 32 }} />
      </div>
      <div className="list-items">
        {matiere.cours.map(c => {
          const ficheLue = !!storage?.fiches_lues?.[c.id]?.lue;
          const scores = storage?.qcm_scores?.[c.id] || [];
          const bestScore = scores.length > 0 ? Math.max(...scores.map(s => Math.round(s.score / s.total * 100))) : null;
          return (
            <button key={c.id} className="list-item" onClick={() => onSelectCours(c)}>
              <div className="list-item-left">
                <span className="list-item-emoji">{c.emoji}</span>
                <div>
                  <div className="list-item-titre">{c.titre}</div>
                  <div className="list-item-meta">
                    {c.flashcardsData?.length || 0} flashcards · {c.qcm?.length || 0} QCM
                  </div>
                </div>
              </div>
              <div className="list-item-right">
                {ficheLue && <span className="badge-lue">✓</span>}
                {bestScore !== null && <span className="badge-score">{bestScore}%</span>}
                <span className="list-chevron">›</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
