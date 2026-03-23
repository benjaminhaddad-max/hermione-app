import { MATIERES } from "../../data/content";
import { getLevel, getRank } from "../../data/leaderboard";

export default function HomePage({ user, storage, onGoTo }) {
  const fichesLues = Object.values(storage.fiches_lues || {}).filter(f => f.lue).length;
  const totalCours = MATIERES.flatMap(m => m.cours).length;
  const userXP = storage.xp || 0;
  const streak = storage.streak || 0;
  const totalMatieres = MATIERES.length;
  const { current, nextLevel } = getLevel(userXP);
  const rank = getRank(userXP);

  const progressPct = nextLevel
    ? Math.min(100, Math.round((userXP - current.minXP) / (nextLevel.minXP - current.minXP) * 100))
    : 100;

  return (
    <div className="page hp">
      {/* ── Header ── */}
      <div className="hp-header">
        <div>
          <h1 className="hp-hello">Salut {user.prenom} 👋</h1>
          <p className="hp-sub">Prêt(e) à réussir PASS/LAS ?</p>
        </div>
        <img src="/logo-hermione.webp" alt="Hermione" className="hp-logo" />
      </div>

      {/* ── XP Card ── */}
      <button className="hp-xp-card" onClick={() => onGoTo("classement")}>
        <div className="hp-xp-top">
          <div className="hp-xp-left">
            <span className="hp-xp-emoji">{current.emoji}</span>
            <div>
              <div className="hp-xp-level">{current.name}</div>
              <div className="hp-xp-val">{userXP.toLocaleString()} XP</div>
            </div>
          </div>
          <div className="hp-xp-right">
            <span className="hp-xp-rank">#{rank.toLocaleString()}</span>
            <span className="hp-xp-rank-sub">sur 32 494</span>
          </div>
        </div>
        {nextLevel && (
          <div className="hp-xp-bar-wrap">
            <div className="hp-xp-bar">
              <div className="hp-xp-bar-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="hp-xp-bar-label">{nextLevel.emoji} {nextLevel.name} dans {(nextLevel.minXP - userXP).toLocaleString()} XP</span>
          </div>
        )}
        {streak > 0 && <div className="hp-streak">🔥 {streak} jour{streak > 1 ? "s" : ""} de suite</div>}
      </button>

      {/* ── Stats rapides ── */}
      <div className="hp-stats-row">
        <div className="hp-stat">
          <span className="hp-stat-num">{fichesLues}</span>
          <span className="hp-stat-label">Fiches lues</span>
        </div>
        <div className="hp-stat-sep" />
        <div className="hp-stat">
          <span className="hp-stat-num">{totalCours}</span>
          <span className="hp-stat-label">Chapitres dispo</span>
        </div>
        <div className="hp-stat-sep" />
        <div className="hp-stat">
          <span className="hp-stat-num">{Object.values(storage.qcm_scores || {}).flat().length}</span>
          <span className="hp-stat-label">QCM faits</span>
        </div>
      </div>

      {/* ── Mode Aventure CTA ── */}
      <div className="hp-aventure-card">
        <div className="hp-aventure-glow" />
        <div className="hp-aventure-top">
          <span className="hp-aventure-badge">🏰 MODE AVENTURE</span>
        </div>
        <h3 className="hp-aventure-title">Révise tout le programme PASS/LAS comme un jeu</h3>
        <p className="hp-aventure-pitch">
          Chaque matière est un <strong>monde</strong> à conquérir. Chaque chapitre est un <strong>niveau</strong>. 
          Lis la fiche, réussis le QCM, valide les flashcards — et passe au suivant. 
          Chaque étape te rapporte des <strong>XP</strong> et te rapproche de mentors comme <strong>Hermione</strong> ou <strong>Dumbledore</strong>.
        </p>

        <div className="hp-aventure-steps">
          <div className="hp-aventure-step">
            <div className="hp-aventure-step-num">1</div>
            <div>
              <strong>📖 Lis la fiche de cours</strong>
              <span>Comprends les notions du chapitre</span>
            </div>
          </div>
          <div className="hp-aventure-step-arrow">↓</div>
          <div className="hp-aventure-step">
            <div className="hp-aventure-step-num">2</div>
            <div>
              <strong>✅ Réussis le QCM (≥ 70%)</strong>
              <span>Prouve que tu maîtrises pour débloquer la suite</span>
            </div>
          </div>
          <div className="hp-aventure-step-arrow">↓</div>
          <div className="hp-aventure-step">
            <div className="hp-aventure-step-num">3</div>
            <div>
              <strong>🃏 Valide les flashcards</strong>
              <span>Mémorise durablement pour les 3 étoiles</span>
            </div>
          </div>
          <div className="hp-aventure-step-arrow">↓</div>
          <div className="hp-aventure-step hp-aventure-step-reward">
            <div className="hp-aventure-step-num">💬</div>
            <div>
              <strong>Débloque un mentor</strong>
              <span>Neville, Ginny, Hermione, Dumbledore... à toi de jouer</span>
            </div>
          </div>
        </div>

        <div className="hp-aventure-bottom">
          <span>🏰 {totalMatieres} matières</span>
          <span className="hp-aventure-dot">·</span>
          <span>📚 {totalCours} chapitres</span>
          <span className="hp-aventure-dot">·</span>
          <span>💬 4 mentors à débloquer</span>
        </div>

        <button className="hp-aventure-btn" onClick={() => onGoTo("aventure")}>
          C'EST PARTI →
        </button>
      </div>

      {/* ── Réviser CTA ── */}
      <button className="hp-reviser-card" onClick={() => onGoTo("cours")}>
        <div className="hp-reviser-left">
          <span className="hp-reviser-icon">📖</span>
          <div>
            <div className="hp-reviser-title">Réviser librement</div>
            <div className="hp-reviser-sub">Fiches, QCM et flashcards par matière</div>
          </div>
        </div>
        <span className="hp-reviser-arrow">›</span>
      </button>

      {/* ── CTA Coaching ── */}
      <div className="hp-coaching-card">
        <div className="hp-coaching-header">
          <span style={{ fontSize: 28 }}>🎓</span>
          <div>
            <div className="hp-coaching-title">Un coach en 2e année de médecine te rappelle</div>
            <div className="hp-coaching-sub">Gratuit · Pose toutes tes questions sur PASS/LAS</div>
          </div>
        </div>
        <p className="hp-coaching-msg">
          Un étudiant en médecine va te recontacter dans les <strong>48h</strong> pour répondre à toutes tes questions et t'aider à préparer ta rentrée.
        </p>
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
