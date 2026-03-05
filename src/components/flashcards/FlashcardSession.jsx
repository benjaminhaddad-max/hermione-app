import { useState } from "react";

export default function FlashcardSession({ cours, onBack, onSaveProgress }) {
  const cards = cours.flashcardsData || [];
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mastered, setMastered] = useState(0);

  function rate(score) {
    if (score === "easy" || score === "ok") setMastered(m => m + 1);
    setFlipped(false);
    if (idx + 1 < cards.length) {
      setIdx(idx + 1);
    } else {
      const finalMastered = mastered + (score === "easy" || score === "ok" ? 1 : 0);
      onSaveProgress && onSaveProgress(cours.id, finalMastered, cards.length);
      onBack();
    }
  }

  if (cards.length === 0) return (
    <div className="page">
      <div className="back-header"><button className="back-btn" onClick={onBack}>←</button><span className="back-title">Flashcards</span><div style={{ width: 32 }} /></div>
      <div className="empty-state"><span style={{ fontSize: 48 }}>🃏</span><p>Pas de flashcards pour ce chapitre.</p></div>
    </div>
  );

  const card = cards[idx];
  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">🃏 {cours.titre}</span>
        <span className="qcm-counter">{idx + 1}/{cards.length}</span>
      </div>
      <div className="prog-track" style={{ marginBottom: 20 }}>
        <div className="prog-fill" style={{ width: (idx / cards.length * 100) + "%" }} />
      </div>
      <div className={`fc-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <div className="fc-front">
          <div className="fc-hint">Question — appuie pour retourner</div>
          <div className="fc-question">{card.q}</div>
        </div>
        <div className="fc-back">
          <div className="fc-hint">Réponse</div>
          <div className="fc-answer">{card.r}</div>
        </div>
      </div>
      {flipped && (
        <div className="fc-rating">
          <button className="fc-rate fail" onClick={() => rate("fail")}>😔 Raté</button>
          <button className="fc-rate hard" onClick={() => rate("hard")}>😐 Difficile</button>
          <button className="fc-rate ok" onClick={() => rate("ok")}>🙂 Bon</button>
          <button className="fc-rate easy" onClick={() => rate("easy")}>😄 Facile</button>
        </div>
      )}
    </div>
  );
}
