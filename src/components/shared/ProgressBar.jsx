export default function ProgressBar({ value, max, color }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="prog-track">
      <div
        className="prog-fill"
        style={{ width: pct + "%", background: color || "var(--gold)" }}
      />
    </div>
  );
}
