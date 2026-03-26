import { MATIERES } from "../../data/content";

export default function CoursListPage({ onSelectMatiere }) {
  const anticipation = MATIERES.filter(m => m.categorie === "anticipation");
  const terminale = MATIERES.filter(m => m.categorie === "terminale");

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Réviser</h1>
        </div>
      </div>

      <div className="reviser-intro">
        <p className="reviser-intro-text">
          Chaque chapitre contient une <strong>fiche de cours</strong>, des <strong>QCM</strong> et des <strong>flashcards</strong> pour t'entraîner efficacement.
        </p>
      </div>

      <p className="section-title" style={{ marginTop: 16 }}>🎯 Anticiper le programme PASS/LAS</p>
      <p className="section-desc">Prends de l'avance sur les matières que tu verras en PASS ou en LAS.</p>
      <div className="matiere-grid">
        {anticipation.map(m => (
          <button key={m.id} className="matiere-tile" style={{ background: m.color }} onClick={() => onSelectMatiere(m)}>
            <span className="matiere-emoji">{m.emoji}</span>
            <span className="matiere-nom">{m.nom}</span>
            <span className="matiere-nb">{m.cours.length} chapitres</span>
          </button>
        ))}
      </div>

      <p className="section-title" style={{ marginTop: 24 }}>💪 Consolider ton niveau Terminale</p>
      <p className="section-desc">Arrive en PASS/LAS avec un niveau scientifique solide grâce aux fondamentaux de Terminale.</p>
      <div className="matiere-grid">
        {terminale.map(m => (
          <button key={m.id} className="matiere-tile" style={{ background: m.color }} onClick={() => onSelectMatiere(m)}>
            <span className="matiere-emoji">{m.emoji}</span>
            <span className="matiere-nom">{m.nom}</span>
            <span className="matiere-nb">{m.cours.length} chapitres</span>
          </button>
        ))}
      </div>
    </div>
  );
}
