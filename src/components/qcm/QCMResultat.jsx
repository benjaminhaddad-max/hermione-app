export default function QCMResultat({ cours, answers, score, onBack }) {
  const total = answers.length;
  const pct = Math.round(score / total * 100);
  const color = pct >= 80 ? "var(--green)" : pct >= 60 ? "var(--gold)" : "var(--red)";
  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "💪";

  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">Résultats · {cours.titre}</span>
        <div style={{ width: 32 }} />
      </div>

      {/* Score */}
      <div className="resultat-score-card">
        <span style={{ fontSize: 48 }}>{emoji}</span>
        <div className="resultat-score-val" style={{ color }}>{score}/{total}</div>
        <div className="resultat-score-pct" style={{ color }}>{pct}%</div>
        <p className="resultat-score-msg">
          {pct >= 80 ? "Excellent ! Chapitre maîtrisé." : pct >= 60 ? "Bien ! Quelques points à revoir." : "À retravailler — consulte la fiche."}
        </p>
      </div>

      {/* Corrigé détaillé */}
      <p className="fiche-section-label" style={{ marginTop: 20 }}>Corrigé détaillé</p>
      {answers.map((a, i) => (
        <div key={i} className={`correction-card ${a.correct ? "correct" : "wrong"}`}>
          <div className="correction-header">
            <span className="correction-icon">{a.correct ? "✅" : "❌"}</span>
            <span className="correction-q">{i + 1}. {a.question.question}</span>
          </div>
          {!a.correct && (
            <div className="correction-wrong-ans">
              Ta réponse : <b>{a.selected}</b> · Bonne réponse : <b>{a.question.reponse_correcte}</b>
            </div>
          )}
          <div className="qcm-explication">
            <div className="qcm-explication-titre">💡 Explication</div>
            <div className="qcm-explication-texte">{a.question.explication}</div>
          </div>
        </div>
      ))}

      <button className="btn-gold" style={{ marginTop: 16, marginBottom: 32 }} onClick={onBack}>
        ← Retour au chapitre
      </button>
    </div>
  );
}
