import { useState } from "react";
import FichePage1Intro from "./FichePage1Intro";
import FichePage2Concepts from "./FichePage2Concepts";
import FichePage3Schemas from "./FichePage3Schemas";
import FichePage4Formules from "./FichePage4Formules";
import FichePage5Resume from "./FichePage5Resume";

const PAGE_LABELS = ["Fiche de cours", "Notions", "Schémas", "Chiffres", "Résumé"];

export default function FicheCoursViewer({ cours, onBack, onSaveProgress }) {
  const [page, setPage] = useState(0);
  const f = cours.fiche;

  const pages = [
    <FichePage1Intro fiche={f} courseTitle={cours.titre} />,
    <FichePage2Concepts data={f.page2_concepts} />,
    <FichePage3Schemas
      data={f.page3_schemas}
      concepts={f.page2_concepts?.concepts || []}
      chapterTitle={cours.titre}
      introText={f.page1_intro?.texte || ""}
    />,
    <FichePage4Formules data={f.page4_formules} />,
    <FichePage5Resume data={f.page5_resume} />,
  ];

  function goNext() {
    if (page < 4) {
      setPage(page + 1);
    } else {
      onSaveProgress && onSaveProgress();
      onBack();
    }
  }

  return (
    <div className="fiche-viewer">
      {/* Header */}
      <div className="fiche-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="fiche-header-info">
          <span className="fiche-header-titre">{cours.emoji} {cours.titre}</span>
          <span className="fiche-header-sub">Fiche de cours · 5 pages · Page {page + 1}/5</span>
        </div>
      </div>

      {/* Pagination tabs */}
      <div className="fiche-tabs">
        {PAGE_LABELS.map((lbl, i) => (
          <button
            key={i}
            type="button"
            className={`fiche-tab ${page === i ? "active" : ""} ${i === 0 ? "fiche-tab-long" : ""}`}
            onClick={() => setPage(i)}
          >
            {lbl}
          </button>
        ))}
      </div>

      {/* Content - paper background */}
      <div className="fiche-content scroll-area fiche-paper">
        {pages[page]}
      </div>

      {/* Navigation */}
      <div className="fiche-nav">
        <button
          className="fiche-nav-btn secondary"
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          ← Préc.
        </button>
        <div className="fiche-dots">
          {[0, 1, 2, 3, 4].map(i => (
            <span key={i} className={`fiche-dot ${page === i ? "active" : ""}`} onClick={() => setPage(i)} />
          ))}
        </div>
        <button className="fiche-nav-btn primary" onClick={goNext}>
          {page < 4 ? "Suiv. →" : "✓ Terminé"}
        </button>
      </div>
    </div>
  );
}
