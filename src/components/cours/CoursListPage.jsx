import { useState } from "react";
import { MATIERES } from "../../data/content";

export default function CoursListPage({ onSelectMatiere, onGoFlashcards }) {
  const [mode, setMode] = useState("fiches");
  const anticipation = MATIERES.filter(m => m.categorie === "anticipation");
  const terminale = MATIERES.filter(m => m.categorie === "terminale");

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Réviser</h1>
          <p className="page-sub">Fiches, QCM & Flashcards</p>
        </div>
      </div>

      {/* Sous-navigation */}
      <div className="sub-tabs">
        <button className={`sub-tab ${mode === "fiches" ? "active" : ""}`} onClick={() => setMode("fiches")}>📖 Fiches & QCM</button>
        <button className={`sub-tab ${mode === "flashcards" ? "active" : ""}`} onClick={() => { setMode("flashcards"); onGoFlashcards?.(); }}>🃏 Flashcards</button>
      </div>

      <p className="section-title" style={{ marginTop: 16 }}>Anticipation Programme PASS/LAS</p>
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
