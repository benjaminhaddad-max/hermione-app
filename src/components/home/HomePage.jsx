import { MATIERES } from "../../data/content";
import { getLevel, getRank } from "../../data/leaderboard";

export default function HomePage({ user, storage, onGoTo }) {
  const fichesLues = Object.values(storage.fiches_lues || {}).filter(f => f.lue).length;
  const totalCours = MATIERES.flatMap(m => m.cours).length;
  const userXP = storage.xp || 0;
  const { current } = getLevel(userXP);
  const rank = getRank(userXP);

  return (
    <div className="page">
      <div className="home-header">
        <div>
          <h1 className="page-title">Salut {user.prenom} 👋</h1>
          <p className="page-sub">Prêt(e) à réviser ?</p>
        </div>
        <img src="/logo-hermione.webp" alt="Hermione" style={{ height: 32, opacity: 0.9 }} />
      </div>

      {/* XP & Rank teaser */}
      <button className="home-xp-card" onClick={() => onGoTo("classement")}>
        <div className="home-xp-left">
          <span style={{ fontSize: 28 }}>{current.emoji}</span>
          <div>
            <div className="home-xp-level">{current.name}</div>
            <div className="home-xp-val">{userXP.toLocaleString()} XP</div>
          </div>
        </div>
        <div className="home-xp-right">
          <span className="home-xp-rank">#{rank.toLocaleString()}</span>
          <span className="home-xp-rank-label">Classement</span>
        </div>
      </button>

      {/* Message d'accueil */}
      <div className="home-welcome-card">
        <span style={{ fontSize: 32 }}>📚</span>
        <div>
          <div className="home-welcome-title">Ton coach digital Hermione</div>
          <div className="home-welcome-sub">
            {fichesLues === 0
              ? "Commence par consulter une fiche de cours !"
              : `${fichesLues}/${totalCours} fiches consultées · Continue comme ça !`
            }
          </div>
        </div>
      </div>

      {/* Accès rapide */}
      <p className="section-title">Accès rapide</p>
      <div className="content-grid">
        <button className="content-tile tile-blue" onClick={() => onGoTo("cours")}>
          📖<br />Réviser
        </button>
        <button className="content-tile tile-gold" onClick={() => onGoTo("classement")}>
          🏆<br />Classement
        </button>
        <button
          className="content-tile tile-blue"
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            minHeight: 60,
            fontSize: 14,
            letterSpacing: 0.5,
          }}
          onClick={() => onGoTo("coaching")}
        >
          🎓 Prendre RDV avec un coach · Gratuit
        </button>
      </div>

      {/* Anticipation PASS/LAS */}
      <p className="section-title" style={{ marginTop: 24 }}>🎯 Anticipation Programme PASS/LAS</p>
      <div className="home-matieres">
        {MATIERES.filter(m => m.categorie === "anticipation").map(m => {
          const nbCours = m.cours.length;
          const nbLues = m.cours.filter(c => storage.fiches_lues?.[c.id]?.lue).length;
          return (
            <button key={m.id} className="home-matiere-row" onClick={() => onGoTo("cours")}>
              <span className="home-matiere-emoji">{m.emoji}</span>
              <div className="home-matiere-info">
                <span className="home-matiere-nom">{m.nom}</span>
                <span className="home-matiere-meta">{nbCours} chapitres · {nbLues} lus</span>
              </div>
              <span className="list-chevron">›</span>
            </button>
          );
        })}
      </div>

      {/* Notions de Terminale */}
      <p className="section-title" style={{ marginTop: 24 }}>📘 Notions de Terminale utiles pour PASS/LAS</p>
      <div className="home-matieres">
        {MATIERES.filter(m => m.categorie === "terminale").map(m => {
          const nbCours = m.cours.length;
          const nbLues = m.cours.filter(c => storage.fiches_lues?.[c.id]?.lue).length;
          return (
            <button key={m.id} className="home-matiere-row" onClick={() => onGoTo("cours")}>
              <span className="home-matiere-emoji">{m.emoji}</span>
              <div className="home-matiere-info">
                <span className="home-matiere-nom">{m.nom}</span>
                <span className="home-matiere-meta">{nbCours} chapitres · {nbLues} lus</span>
              </div>
              <span className="list-chevron">›</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
