import { MATIERES } from "../../data/content";

export default function StatsPage({ storage }) {
  const today = new Date();
  const moisStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;

  // Calculs
  const allScores = Object.entries(storage.qcm_scores || {}).flatMap(([id, arr]) => arr.map(s => ({ ...s, id })));
  const scoreMoyen = allScores.length > 0
    ? Math.round(allScores.reduce((a, s) => a + (s.score / s.total * 100), 0) / allScores.length)
    : null;

  const allFC = Object.values(storage.flashcards_progress || {});
  const totalMastered = allFC.reduce((a, p) => a + (p.mastered_count || 0), 0);
  const totalFC = MATIERES.flatMap(m => m.cours).reduce((a, c) => a + (c.flashcardsData?.length || 0), 0);

  const sessions = storage.agenda?.sessions || [];
  const sessionsFaites = sessions.filter(s => s.faite).length;
  const sessionsTotal = sessions.length;

  const fichesLues = Object.keys(storage.fiches_lues || {}).length;

  // QCM par matière pour chart
  const qcmParMatiere = MATIERES.map(m => {
    const scores = m.cours.flatMap(c => (storage.qcm_scores?.[c.id] || []));
    const moy = scores.length > 0 ? Math.round(scores.reduce((a, s) => a + s.score / s.total * 100, 0) / scores.length) : 0;
    return { nom: m.nom.split(" ")[0], emoji: m.emoji, moy, sessions: scores.length };
  }).filter(m => m.sessions > 0);

  const maxMoy = qcmParMatiere.length > 0 ? Math.max(...qcmParMatiere.map(m => m.moy)) : 100;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Stats</h1>
          <p className="page-sub">Ton activité et tes performances</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="stats-kpi-grid">
        <div className="kpi-card">
          <div className="kpi-val">{scoreMoyen !== null ? scoreMoyen + "%" : "—"}</div>
          <div className="kpi-label">Score moyen QCM</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-val">{totalMastered}<span style={{ fontSize: 14, color: "var(--gray)" }}>/{totalFC}</span></div>
          <div className="kpi-label">Flashcards maîtrisées</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-val">{sessionsFaites}<span style={{ fontSize: 14, color: "var(--gray)" }}>/{sessionsTotal}</span></div>
          <div className="kpi-label">Sessions réalisées</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-val">{fichesLues}</div>
          <div className="kpi-label">Fiches lues</div>
        </div>
      </div>

      {/* Chart QCM */}
      {qcmParMatiere.length > 0 ? (
        <div className="chart-container">
          <p className="fiche-section-label">Score moyen par matière</p>
          <div className="chart-bars">
            {qcmParMatiere.map((m, i) => (
              <div key={i} className="chart-bar-wrap">
                <span className="chart-bar-val">{m.moy}%</span>
                <div className="chart-bar" style={{ height: Math.max(8, m.moy / maxMoy * 80) + "px" }} />
                <span className="chart-bar-label">{m.emoji}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-state" style={{ marginTop: 24 }}>
          <span style={{ fontSize: 40 }}>📊</span>
          <p>Fais tes premiers QCM pour voir<br />tes statistiques ici !</p>
        </div>
      )}

      {/* Progression FC par matière */}
      {allFC.length > 0 && (
        <>
          <p className="fiche-section-label" style={{ marginTop: 16 }}>Progression flashcards</p>
          {MATIERES.map(m => {
            const totalM = m.cours.reduce((a, c) => a + (c.flashcardsData?.length || 0), 0);
            const masteredM = m.cours.reduce((a, c) => a + (storage.flashcards_progress?.[c.id]?.mastered_count || 0), 0);
            if (totalM === 0) return null;
            const pct = Math.round(masteredM / totalM * 100);
            return (
              <div key={m.id} className="fc-prog-row">
                <span className="fc-prog-emoji">{m.emoji}</span>
                <div className="fc-prog-info">
                  <span className="fc-prog-nom">{m.nom}</span>
                  <div className="prog-track">
                    <div className="prog-fill" style={{ width: pct + "%", background: pct >= 80 ? "var(--green)" : "var(--gold)" }} />
                  </div>
                </div>
                <span className="fc-prog-pct">{pct}%</span>
              </div>
            );
          })}
        </>
      )}

      {/* Historique QCM récents */}
      {allScores.length > 0 && (
        <>
          <p className="fiche-section-label" style={{ marginTop: 16 }}>Dernières sessions QCM</p>
          {allScores.slice(-5).reverse().map((s, i) => (
            <div key={i} className="hist-row">
              <span className="hist-date">{s.date}</span>
              <span className="hist-score" style={{ color: s.score / s.total >= 0.6 ? "var(--green)" : "var(--red)" }}>
                {s.score}/{s.total} ({Math.round(s.score / s.total * 100)}%)
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
