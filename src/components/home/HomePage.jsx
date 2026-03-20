import { MATIERES } from "../../data/content";

export default function HomePage({ user, storage, onGoTo }) {
  // Calcul rapide des stats
  const allScores = Object.values(storage.qcm_scores || {}).flat();
  const fichesLues = Object.values(storage.fiches_lues || {}).filter(f => f.lue).length;
  const totalCours = MATIERES.flatMap(m => m.cours).length;

  return (
    <div className="page">
      <div className="home-header">
        <div>
          <h1 className="page-title">Salut {user.prenom} 👋</h1>
          <p className="page-sub">Prêt(e) à réviser ?</p>
        </div>
        <img src="/logo-hermione.webp" alt="Hermione" style={{ height: 32, opacity: 0.9 }} />
      </div>

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
          📖<br />Fiches de cours
        </button>
        <button className="content-tile tile-gold" onClick={() => onGoTo("flashcards")}>
          🃏<br />Flashcards
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

      {/* Matières disponibles */}
      <p className="section-title" style={{ marginTop: 24 }}>Matières disponibles</p>
      <div className="home-matieres">
        {MATIERES.map(m => {
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
