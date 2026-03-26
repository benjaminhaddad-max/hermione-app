import { useState } from "react";
import { MATIERES } from "../../data/content";
import { getLevel, getRank } from "../../data/leaderboard";

const TUTORIAL_STEPS = [
  { target: "reviser", emoji: "📖", title: "Réviser", desc: "Accède à toutes tes fiches de cours, QCM et flashcards classés par matière. C'est ici que tu apprends !" },
  { target: "classement", emoji: "🏆", title: "Classement", desc: "Chaque action te rapporte des XP. Monte dans le classement et débloque de nouveaux niveaux !" },
  { target: "aventure", emoji: "🗺️", title: "Aventure", desc: "Un mode guidé matière par matière. Termine les mondes pour débloquer un coach en médecine !" },
  { target: "done", emoji: "🚀", title: "C'est parti !", desc: "Tu es prêt(e) ! Commence par réviser une matière et gagne tes premiers XP." },
];

export default function HomePage({ user, storage, onGoTo, onSignOut, onDismissTutorial }) {
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

  const showTutorial = storage.show_tutorial;
  const [tutStep, setTutStep] = useState(0);

  function closeTutorial() {
    onDismissTutorial && onDismissTutorial();
  }

  function nextTut() {
    if (tutStep + 1 >= TUTORIAL_STEPS.length) {
      closeTutorial();
    } else {
      setTutStep(tutStep + 1);
    }
  }

  return (
    <div className="page hp">
      {showTutorial && (
        <div className="tuto-overlay">
          <div className="tuto-card">
            <div className="tuto-emoji">{TUTORIAL_STEPS[tutStep].emoji}</div>
            <h3 className="tuto-title">{TUTORIAL_STEPS[tutStep].title}</h3>
            <p className="tuto-desc">{TUTORIAL_STEPS[tutStep].desc}</p>
            <div className="tuto-dots">
              {TUTORIAL_STEPS.map((_, i) => <span key={i} className={`tuto-dot ${i === tutStep ? "active" : ""}`} />)}
            </div>
            <div className="tuto-actions">
              <button className="tuto-skip" onClick={closeTutorial}>Passer</button>
              <button className="tuto-next" onClick={nextTut}>
                {tutStep + 1 >= TUTORIAL_STEPS.length ? "C'est parti !" : "Suivant →"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <div className="hp-header">
        <div>
          <h1 className="hp-hello">Salut {user.prenom} 👋</h1>
          <p className="hp-sub">Prêt(e) à réussir PASS/LAS ?</p>
        </div>
        <button className="hp-profil-btn" onClick={() => onGoTo("profil")}>
          <div className="hp-profil-avatar">
            <span className="hp-avatar-initials">{(user.prenom?.[0] || "").toUpperCase()}{(user.nom?.[0] || "").toUpperCase()}</span>
          </div>
          <span className="hp-profil-label">Mon profil</span>
        </button>
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
          <span className="hp-aventure-badge">🗺️ MODE AVENTURE</span>
        </div>
        <h3 className="hp-aventure-title">Révise tout le programme PASS/LAS comme un jeu</h3>
        <p className="hp-aventure-pitch">
          Chaque matière est un <strong>monde</strong> à conquérir. Chaque chapitre est un <strong>niveau</strong>. 
          Lis la fiche, réussis le QCM, valide les flashcards — et passe au suivant. 
          Chaque étape te rapporte des <strong>XP</strong> pour grimper au classement parmi 32 000 étudiants.
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
              <span>Chatte avec des étudiants en médecine qui ont réussi</span>
            </div>
          </div>
        </div>

        <div className="hp-aventure-bottom">
          <span>🗺️ {totalMatieres} matières</span>
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

      {/* ── Shorts YouTube récents ── */}
      <div className="hp-shorts-section">
        <div className="hp-shorts-header">
          <div>
            <h2 className="hp-shorts-title">Dernières vidéos</h2>
            <p className="hp-shorts-sub">Nos shorts les plus récents</p>
          </div>
          <span className="hp-shorts-new">NEW</span>
        </div>
        <div className="hp-shorts-scroll">
          {[
            { id:"4KAVUThCoZs", views:"3.1K",  title:"Team prépa ou team tutorat ?" },
            { id:"_yxqj4YFA3Q", views:"1.5K",  title:"Les clichés en dentisterie qui agacent..." },
            { id:"vFSYnOQ2JxE", views:"14K",   title:"Étudiant en P1 : quels métiers visent-ils ?" },
            { id:"i3xW--FdB2I", views:"3.1K",  title:"Avoir 145 de QI pour faire médecine ?" },
            { id:"bM7hT9oqpms", views:"1.9K",  title:"Kiné vs ostéopathe : quelle est LA différence ?" },
            { id:"sLegEju4Kc8", views:"2.3K",  title:"Consulter ChatGPT plutôt que son médecin ?!" },
            { id:"4CTC3AK4Zjc", views:"1K",    title:"Le manque de confiance des femmes en médecine" },
            { id:"3UOKIpnq_j0", views:"3.5K",  title:"Les anecdotes croustillantes en hôpital" },
          ].map(s => (
            <div key={s.id} className="hp-short-card">
              <div className="hp-short-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${s.id}?rel=0&modestbranding=1`}
                  title={s.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="hp-short-info">
                <span className="hp-short-views">👁 {s.views} vues</span>
                <span className="hp-short-name">{s.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Shorts YouTube populaires ── */}
      <div className="hp-shorts-section">
        <h2 className="hp-shorts-title">Nos vidéos les plus vues</h2>
        <p className="hp-shorts-sub">+5 millions de vues sur nos shorts</p>
        <div className="hp-shorts-scroll">
          {[
            { id:"FQcNPaGHw80", views:"3M",   title:"Pourquoi elle ne se DOUCHE PAS pendant un mois..." },
            { id:"IIaCclCOBQA", views:"1.9M",  title:"JETTE tes fiches de révisions !" },
            { id:"1uGy436yH30", views:"1.4M",  title:"Cette CHIMÈRE a FUSIONNÉ avec son jumeau" },
            { id:"cAeLlGcU1BA", views:"1.3M",  title:"Pourquoi il ne peut PLUS BOUGER ses YEUX" },
            { id:"mgLTvjhi6WA", views:"1.1M",  title:"Le SYNDROME de Tiktok (Barber Say)" },
            { id:"Umbqf9VRb4w", views:"1M",    title:"Pourquoi tu ne retiens rien au long terme" },
          ].map(s => (
            <div key={s.id} className="hp-short-card">
              <div className="hp-short-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${s.id}?rel=0&modestbranding=1`}
                  title={s.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="hp-short-info">
                <span className="hp-short-views">👁 {s.views} vues</span>
                <span className="hp-short-name">{s.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {onSignOut && (
        <button className="hp-signout" onClick={onSignOut}>
          Se déconnecter
        </button>
      )}

      <div style={{ height: 24 }} />
    </div>
  );
}
