import { useState } from "react";
import FichePage1Intro from "./FichePage1Intro";
import FichePage2Concepts from "./FichePage2Concepts";
import FichePage3Schemas from "./FichePage3Schemas";
import FichePage4Formules from "./FichePage4Formules";
import FichePage5Resume from "./FichePage5Resume";
import QCMChapitreSession from "../qcm/QCMChapitreSession";
import FlashcardSession from "../flashcards/FlashcardSession";

const FICHE_LABELS_FULL = ["Cours", "Notions", "Schémas", "Chiffres", "Résumé"];
const FICHE_LABELS_TERM = ["Cours", "Notions"];

export default function ChapitreDetailPage({
  cours, storage, onBack, onSaveProgress, onSaveQCMScore, onSaveFCProgress
}) {
  const [section, setSection] = useState("fiche");
  const [fichePage, setFichePage] = useState(0);

  const f = cours.fiche;
  const isTerminale = cours.id.startsWith("term-");
  const qcmScores = storage?.qcm_scores?.[cours.id] || [];
  const fcProgress = storage?.flashcards_progress?.[cours.id];
  const ficheLue = !!storage?.fiches_lues?.[cours.id]?.lue;
  const bestScore = qcmScores.length > 0
    ? Math.max(...qcmScores.map(s => Math.round(s.score / s.total * 100)))
    : null;

  const fichePagesFull = [
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

  const fichePagesTerm = [
    <FichePage1Intro fiche={f} courseTitle={cours.titre} />,
    <FichePage2Concepts data={f.page2_concepts} />,
  ];

  const fichePages = isTerminale ? fichePagesTerm : fichePagesFull;
  const ficheLabels = isTerminale ? FICHE_LABELS_TERM : FICHE_LABELS_FULL;
  const maxPage = fichePages.length - 1;

  function goNextFiche() {
    if (fichePage < maxPage) {
      setFichePage(fichePage + 1);
    } else {
      onSaveProgress && onSaveProgress();
      setFichePage(0);
    }
  }

  return (
    <div className="cours-unified">
      <div className="cu-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="cu-header-info">
          <span className="cu-header-titre">{cours.emoji} {cours.titre}</span>
        </div>
      </div>

      <div className="cu-section-tabs">
        <button
          className={`cu-sec-tab ${section === "fiche" ? "active" : ""}`}
          onClick={() => setSection("fiche")}
        >
          <span className="cu-sec-icon">📖</span>
          <span>Fiche</span>
          {ficheLue && <span className="cu-sec-badge done">✓</span>}
        </button>
        <button
          className={`cu-sec-tab ${section === "qcm" ? "active" : ""}`}
          onClick={() => setSection("qcm")}
        >
          <span className="cu-sec-icon">✅</span>
          <span>QCM</span>
          {bestScore !== null && <span className="cu-sec-badge score">{bestScore}%</span>}
        </button>
        <button
          className={`cu-sec-tab ${section === "flashcards" ? "active" : ""}`}
          onClick={() => setSection("flashcards")}
        >
          <span className="cu-sec-icon">🃏</span>
          <span>Flashcards</span>
          {fcProgress && <span className="cu-sec-badge score">{fcProgress.mastered_count}</span>}
        </button>
      </div>

      {section === "fiche" && (
        <div className="cu-fiche-wrapper">
          <div className="cu-fiche-tabs">
            {ficheLabels.map((lbl, i) => (
              <button
                key={i}
                className={`cu-ftab ${fichePage === i ? "active" : ""}`}
                onClick={() => setFichePage(i)}
              >
                {lbl}
              </button>
            ))}
          </div>

          <div className="cu-fiche-content fiche-paper">
            {fichePages[fichePage]}
          </div>

          <div className="cu-fiche-nav">
            <button
              className="cu-fnav-btn secondary"
              onClick={() => setFichePage(p => Math.max(0, p - 1))}
              disabled={fichePage === 0}
            >
              ← Préc.
            </button>
            <span className="cu-fiche-counter">{fichePage + 1} / {fichePages.length}</span>
            <button className="cu-fnav-btn primary" onClick={goNextFiche}>
              {fichePage < maxPage ? "Suiv. →" : "✓ Terminé"}
            </button>
          </div>
        </div>
      )}

      {section === "qcm" && (
        <div className="cu-qcm-wrapper">
          {cours.qcm?.length > 0 ? (
            <QCMChapitreSession
              cours={cours}
              onBack={() => setSection("fiche")}
              onSaveScore={onSaveQCMScore}
              embedded
            />
          ) : (
            <div className="cu-empty">
              <span className="cu-empty-icon">📝</span>
              <p>Pas encore de QCM pour ce chapitre.</p>
            </div>
          )}
        </div>
      )}

      {section === "flashcards" && (
        <div className="cu-fc-wrapper">
          {cours.flashcardsData?.length > 0 ? (
            <FlashcardSession
              cours={cours}
              storage={storage}
              onBack={() => setSection("fiche")}
              onSaveProgress={onSaveFCProgress}
              embedded
            />
          ) : (
            <div className="cu-empty">
              <span className="cu-empty-icon">🃏</span>
              <p>Pas encore de flashcards pour ce chapitre.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
