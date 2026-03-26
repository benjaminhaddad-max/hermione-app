import { useState, useMemo } from "react";

const SCORE_MAP = { fail: 0, ok: 2 };
const INTERVAL_HOURS = { 0: 0, 2: 24 };

function getCardProgress(storage, coursId) {
  return storage?.flashcards_progress?.[coursId]?.cards || {};
}

function sortCards(cards, cardProgress) {
  const now = Date.now();
  return [...cards].sort((a, b) => {
    const pa = cardProgress[a.q] || { score: 0, nextReview: 0 };
    const pb = cardProgress[b.q] || { score: 0, nextReview: 0 };
    const dueA = pa.nextReview <= now ? 0 : 1;
    const dueB = pb.nextReview <= now ? 0 : 1;
    if (dueA !== dueB) return dueA - dueB;
    return (pa.score || 0) - (pb.score || 0);
  });
}

export default function FlashcardSession({ cours, onBack, onSaveProgress, storage, embedded }) {
  const allCards = cours.flashcardsData || [];
  const cardProgress = getCardProgress(storage, cours.id);

  const sortedCards = useMemo(
    () => sortCards(allCards, cardProgress),
    [allCards, cardProgress, cours.id]
  );

  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mastered, setMastered] = useState(0);
  const [sessionRatings, setSessionRatings] = useState({});

  function rate(score) {
    const card = sortedCards[idx];
    const numScore = SCORE_MAP[score] ?? 0;
    const isMastered = score === "ok";

    setSessionRatings(prev => ({ ...prev, [card.q]: { score: numScore, time: Date.now() } }));

    if (isMastered) setMastered(m => m + 1);
    setFlipped(false);

    if (idx + 1 < sortedCards.length) {
      setIdx(idx + 1);
    } else {
      const finalMastered = mastered + (isMastered ? 1 : 0);

      const updatedCards = {};
      for (const [q, rating] of Object.entries({ ...sessionRatings, [card.q]: { score: numScore, time: Date.now() } })) {
        const prev = cardProgress[q] || { score: 0, reviews: 0 };
        const newScore = Math.max(0, Math.min(3, rating.score));
        const intervalMs = (INTERVAL_HOURS[newScore] || 0) * 3600000;
        updatedCards[q] = {
          score: newScore,
          reviews: (prev.reviews || 0) + 1,
          lastReview: Date.now(),
          nextReview: Date.now() + intervalMs,
        };
      }

      onSaveProgress && onSaveProgress(cours.id, finalMastered, sortedCards.length, updatedCards);
      onBack();
    }
  }

  if (sortedCards.length === 0) return (
    <div className={embedded ? "cu-fc-inner" : "page"}>
      {!embedded && <div className="back-header"><button className="back-btn" onClick={onBack}>←</button><span className="back-title">Flashcards</span><div style={{ width: 32 }} /></div>}
      <div className="empty-state"><span style={{ fontSize: 48 }}>🃏</span><p>Pas de flashcards pour ce chapitre.</p></div>
    </div>
  );

  const card = sortedCards[idx];
  const prevRating = cardProgress[card.q];
  const dueNow = !prevRating || prevRating.nextReview <= Date.now();

  return (
    <div className={embedded ? "cu-fc-inner" : "page"}>
      {!embedded && (
        <div className="back-header">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="back-title">🃏 {cours.titre}</span>
          <span className="qcm-counter">{idx + 1}/{sortedCards.length}</span>
        </div>
      )}
      {embedded && (
        <div className="cu-fc-header">
          <span className="cu-fc-label">Carte {idx + 1}/{sortedCards.length}</span>
        </div>
      )}
      <div className="prog-track" style={{ marginBottom: 20 }}>
        <div className="prog-fill" style={{ width: (idx / sortedCards.length * 100) + "%" }} />
      </div>

      {prevRating && (
        <div className="fc-card-status">
          {dueNow
            ? <span className="fc-due">🔄 À revoir</span>
            : <span className="fc-mastered-tag">✅ Maîtrisée (revue {prevRating.reviews}x)</span>
          }
        </div>
      )}

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
        <div className="fc-rating fc-rating-2">
          <button className="fc-rate fail" onClick={() => rate("fail")}>❌ Raté</button>
          <button className="fc-rate ok" onClick={() => rate("ok")}>✅ Bon</button>
        </div>
      )}
    </div>
  );
}
