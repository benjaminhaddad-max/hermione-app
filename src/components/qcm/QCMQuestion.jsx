const DIFF_COLORS = { facile: { bg: "rgba(46,204,113,0.12)", color: "#2ecc71" }, moyen: { bg: "rgba(255,180,0,0.12)", color: "#ffb400" }, difficile: { bg: "rgba(224,90,43,0.12)", color: "#e05a2b" } };
const LABELS = ["A", "B", "C", "D", "E"];

export default function QCMQuestion({ question, selected, showExplication, onSelect }) {
  const diff = DIFF_COLORS[question.difficulte] || DIFF_COLORS.moyen;
  const correctIdx = question.correct;

  return (
    <div className="qcm-question-block">
      <div className="qcm-q-header">
        <span className="diff-badge" style={{ background: diff.bg, color: diff.color }}>
          {question.difficulte}
        </span>
      </div>
      <p className="qcm-question-text">{question.question}</p>
      <div className="qcm-options">
        {question.options.map((opt, i) => {
          const label = LABELS[i];
          let cls = "qcm-opt";
          if (selected !== null) {
            if (i === correctIdx) cls += " correct";
            else if (i === selected) cls += " wrong";
          } else {
            cls += " interactive";
          }
          return (
            <button key={i} className={cls} onClick={() => onSelect(i)} disabled={selected !== null}>
              <span className="qcm-opt-label">{label}</span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
      {showExplication && (
        <div className="qcm-explication">
          <div className="qcm-explication-titre">Explication</div>
          <div className="qcm-explication-texte">{question.explication}</div>
        </div>
      )}
    </div>
  );
}
