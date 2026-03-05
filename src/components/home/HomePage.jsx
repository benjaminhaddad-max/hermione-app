import { MATIERES } from "../../data/content";

export default function HomePage({ user, storage, onGoTo }) {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const sessionsAujourd = (storage.agenda?.sessions || []).filter(s => s.date === todayStr);
  const allScores = Object.values(storage.qcm_scores || {}).flat();
  const scoreMoyen = allScores.length > 0
    ? Math.round(allScores.reduce((a, s) => a + s.score / s.total * 100, 0) / allScores.length)
    : null;
  const totalFC = MATIERES.flatMap(m => m.cours).reduce((a, c) => a + (c.flashcardsData?.length || 0), 0);
  const masteredFC = Object.values(storage.flashcards_progress || {}).reduce((a, p) => a + (p.mastered_count || 0), 0);

  return (
    <div className="page">
      <div className="home-header">
        <div>
          <h1 className="page-title">Bonjour {user.prenom} 👋</h1>
          <p className="page-sub">{user.classe} · {user.fac}</p>
        </div>
        <img src="/logo-hermione.webp" alt="Hermione" style={{ height: 32, opacity: 0.9 }} />
      </div>

      {/* KPIs rapides */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-val">{scoreMoyen !== null ? scoreMoyen + "%" : "—"}</div>
          <div className="stat-lbl">moy. QCM</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🃏</div>
          <div className="stat-val">{masteredFC}</div>
          <div className="stat-lbl">maîtrisées</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-val">{sessionsAujourd.length}</div>
          <div className="stat-lbl">sessions auj.</div>
        </div>
      </div>

      {/* Accès rapide */}
      <p className="section-title">Accès rapide</p>
      <div className="content-grid">
        <button className="content-tile tile-blue" onClick={() => onGoTo("cours")}>
          📖<br />Fiches de cours
        </button>
        <button className="content-tile tile-gold" onClick={() => onGoTo("flashcards")}>
          🃏<br />Flashcards
        </button>
        <button className="content-tile tile-blue" onClick={() => onGoTo("agenda")}>
          📅<br />Mon agenda
        </button>
        <button className="content-tile tile-blue" onClick={() => onGoTo("stats")}>
          📊<br />Mes stats
        </button>
      </div>

      {/* Sessions du jour */}
      {sessionsAujourd.length > 0 && (
        <>
          <p className="section-title">Aujourd'hui</p>
          {sessionsAujourd.map(s => (
            <div key={s.id} className={`session-card ${s.faite ? "faite" : ""}`}>
              <span className="session-type-icon">{s.type === "flashcards" ? "🃏" : s.type === "qcm" ? "✅" : "📖"}</span>
              <div className="session-info">
                <div className="session-label">{s.label}</div>
                <div className="session-meta">{s.heure} · {s.duree_min} min</div>
              </div>
              {s.faite && <span style={{ color: "var(--green)", fontSize: 18 }}>✓</span>}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
