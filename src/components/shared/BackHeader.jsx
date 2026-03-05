export default function BackHeader({ titre, onBack, rightElement }) {
  return (
    <div className="back-header">
      <button className="back-btn" onClick={onBack}>←</button>
      <span className="back-title">{titre}</span>
      {rightElement || <div style={{ width: 32 }} />}
    </div>
  );
}
