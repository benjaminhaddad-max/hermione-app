export default function ChapitreDetailPage({ cours, storage, onFiche, onQCM, onFlashcards, onBack }) {
  const qcmScores = storage?.qcm_scores?.[cours.id] || [];
  const fcProgress = storage?.flashcards_progress?.[cours.id];
  const ficheLue = !!storage?.fiches_lues?.[cours.id]?.lue;

  const lastScore = qcmScores.length > 0 ? qcmScores[qcmScores.length - 1] : null;
  const bestScore = qcmScores.length > 0 ? Math.max(...qcmScores.map(s => Math.round(s.score / s.total * 100))) : null;

  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">{cours.emoji} {cours.titre}</span>
        <div style={{ width: 32 }} />
      </div>

      {/* Actions hub */}
      <div className="hub-grid">
        <button className="hub-card hub-fiche" onClick={onFiche}>
          <span className="hub-icon">📖</span>
          <span className="hub-label">Fiche de cours</span>
          <span className="hub-sub">5 pages</span>
          {ficheLue && <span className="hub-badge-done">✓ Lue</span>}
        </button>

        <button className="hub-card hub-qcm" onClick={onQCM}>
          <span className="hub-icon">✅</span>
          <span className="hub-label">QCM</span>
          <span className="hub-sub">{cours.qcm?.length || 0} questions</span>
          {bestScore !== null && <span className="hub-badge-score">{bestScore}%</span>}
        </button>

        <button className="hub-card hub-fc" onClick={onFlashcards}>
          <span className="hub-icon">🃏</span>
          <span className="hub-label">Flashcards</span>
          <span className="hub-sub">{cours.flashcardsData?.length || 0} cartes</span>
          {fcProgress && <span className="hub-badge-score">{fcProgress.mastered_count} maîtrisées</span>}
        </button>
      </div>

      {/* Derniers résultats */}
      {qcmScores.length > 0 && (
        <div className="chapitre-stats">
          <p className="fiche-section-label">Derniers résultats QCM</p>
          {qcmScores.slice(-3).reverse().map((s, i) => (
            <div key={i} className="chapitre-stat-row">
              <span className="chapitre-stat-date">{s.date}</span>
              <span className="chapitre-stat-score" style={{ color: s.score / s.total >= 0.6 ? "var(--green)" : "var(--red)" }}>
                {s.score}/{s.total} ({Math.round(s.score / s.total * 100)}%)
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
