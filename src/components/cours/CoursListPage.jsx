import { MATIERES } from "../../data/content";

export default function CoursListPage({ onSelectMatiere }) {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Fiches de cours</h1>
          <p className="page-sub">Fiches manuscrites + QCM</p>
        </div>
      </div>

      <p className="section-title">PASS / LAS</p>
      <div className="matiere-grid">
        {MATIERES.map(m => (
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
