import { MATIERES } from "../../data/content";

export default function CoursListPage({ onSelectMatiere }) {
  const anticipation = MATIERES.filter(m => m.categorie === "anticipation");
  const terminale = MATIERES.filter(m => m.categorie === "terminale");

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Fiches de cours</h1>
          <p className="page-sub">Fiches manuscrites + QCM</p>
        </div>
      </div>

      <p className="section-title">Anticipation Programme PASS/LAS</p>
      <div className="matiere-grid">
        {anticipation.map(m => (
          <button key={m.id} className="matiere-tile" style={{ background: m.color }} onClick={() => onSelectMatiere(m)}>
            <span className="matiere-emoji">{m.emoji}</span>
            <span className="matiere-nom">{m.nom}</span>
            <span className="matiere-nb">{m.cours.length} chapitres</span>
          </button>
        ))}
      </div>

      <p className="section-title" style={{ marginTop: 24 }}>Notions de Terminale utiles pour PASS/LAS</p>
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
