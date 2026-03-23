import { useState } from "react";
import QCMQuestion from "./QCMQuestion";
import QCMResultat from "./QCMResultat";

export default function QCMChapitreSession({ cours, onBack, onSaveScore }) {
  const questions = cours.qcm || [];
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [preSelected, setPreSelected] = useState(null);
  const [selected, setSelected] = useState(null);
  const [validated, setValidated] = useState(false);
  const [showExplication, setShowExplication] = useState(false);
  const [done, setDone] = useState(false);
  const [startTime] = useState(Date.now());

  function handleSelect(optIdx) {
    if (validated) return;
    setPreSelected(optIdx);
  }

  function handleConfirm() {
    if (preSelected === null || validated) return;
    setSelected(preSelected);
    setValidated(true);
    setShowExplication(true);
  }

  function handleNext() {
    const q = questions[idx];
    const isCorrect = selected === q.correct;
    const newAnswers = [...answers, { question: q, selected, correct: isCorrect }];
    setAnswers(newAnswers);
    setPreSelected(null);
    setSelected(null);
    setValidated(false);
    setShowExplication(false);
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
    } else {
      const score = newAnswers.filter(a => a.correct).length;
      const duree = Math.round((Date.now() - startTime) / 1000);
      onSaveScore && onSaveScore(cours.id, score, questions.length, duree);
      setDone(true);
    }
  }

  if (questions.length === 0) {
    return (
      <div className="page">
        <div className="back-header">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="back-title">QCM</span>
          <div style={{ width: 32 }} />
        </div>
        <div className="empty-state">
          <span style={{ fontSize: 48 }}>📝</span>
          <p>QCM bientôt disponible pour ce chapitre.</p>
        </div>
      </div>
    );
  }

  if (done) {
    const score = answers.filter(a => a.correct).length;
    return <QCMResultat cours={cours} answers={answers} score={score} onBack={onBack} />;
  }

  const q = questions[idx];
  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">QCM · {cours.emoji} {cours.titre}</span>
        <span className="qcm-counter">{idx + 1}/{questions.length}</span>
      </div>

      <div className="prog-track" style={{ marginBottom: 20 }}>
        <div className="prog-fill" style={{ width: (idx / questions.length * 100) + "%" }} />
      </div>

      <QCMQuestion
        question={q}
        selected={selected}
        validated={validated}
        preSelected={preSelected}
        showExplication={showExplication}
        onSelect={handleSelect}
        onConfirm={handleConfirm}
      />

      {validated && (
        <button className="btn-gold" style={{ marginTop: 16 }} onClick={handleNext}>
          {idx + 1 < questions.length ? "Question suivante →" : "Voir les résultats →"}
        </button>
      )}
    </div>
  );
}
