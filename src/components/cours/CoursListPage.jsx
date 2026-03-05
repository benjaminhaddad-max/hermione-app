import { MATIERES } from "../../data/content";

export default function CoursListPage({ onSelectMatiere }) {
  const passlas = MATIERES.filter(m => m.niveau === "PASS/LAS");
  const lycee = MATIERES.filter(m => m.niveau === "Lycée → PASS");

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Cours</h1>
          <p className="page-sub">Fiches · QCM · Flashcards</p>
        </div>
      </div>

      <p className="section-title">PASS / LAS</p>
      <div className="matiere-grid">
        {passlas.map(m => (
          <button key={m.id} className="matiere-tile" style={{ background: m.color }} onClick={() => onSelectMatiere(m)}>
            <span className="matiere-emoji">{m.emoji}</span>
            <span className="matiere-nom">{m.nom}</span>
            <span className="matiere-nb">{m.cours.length} chapitres</span>
          </button>
        ))}
      </div>

      <p className="section-title" style={{ marginTop: 24 }}>Lycée → PASS</p>
      <div className="matiere-grid">
        {lycee.map(m => (
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
