import { useState } from "react";
import QCMQuestion from "./QCMQuestion";
import QCMResultat from "./QCMResultat";

export default function QCMChapitreSession({ cours, onBack, onSaveScore }) {
  const questions = cours.qcm || [];
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]); // { label, correct, explication }
  const [selected, setSelected] = useState(null);
  const [showExplication, setShowExplication] = useState(false);
  const [done, setDone] = useState(false);
  const [startTime] = useState(Date.now());

  function handleSelect(label) {
    if (selected !== null) return;
    const q = questions[idx];
    const correct = label === q.reponse_correcte;
    setSelected(label);
    setShowExplication(true);
  }

  function handleNext() {
    const q = questions[idx];
    setAnswers(prev => [...prev, {
      question: q,
      selected,
      correct: selected === q.reponse_correcte,
    }]);
    setSelected(null);
    setShowExplication(false);
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
    } else {
      const score = answers.filter(a => a.correct).length + (selected === q.reponse_correcte ? 1 : 0);
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
          <span className="back-title">QCM · {cours.titre}</span>
          <div style={{ width: 32 }} />
        </div>
        <div className="empty-state">
          <span style={{ fontSize: 48 }}>📝</span>
          <p>QCM à venir pour ce chapitre.</p>
        </div>
      </div>
    );
  }

  if (done) {
    const finalAnswers = answers;
    const score = finalAnswers.filter(a => a.correct).length;
    return <QCMResultat cours={cours} answers={finalAnswers} score={score} onBack={onBack} />;
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
        showExplication={showExplication}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <button className="btn-gold" style={{ marginTop: 16 }} onClick={handleNext}>
          {idx + 1 < questions.length ? "Question suivante →" : "Voir les résultats →"}
        </button>
      )}
    </div>
  );
}
