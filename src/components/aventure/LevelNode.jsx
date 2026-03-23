export default function LevelNode({ level, index, isCurrent, onClick }) {
  const cls = level.locked
    ? "map-node locked"
    : level.passed
    ? "map-node completed"
    : isCurrent
    ? "map-node current"
    : "map-node unlocked";

  return (
    <div className={cls} onClick={() => !level.locked && onClick(level)}>
      <div className="map-node-circle">
        {level.locked ? (
          <span className="map-node-icon">🔒</span>
        ) : level.passed ? (
          <span className="map-node-icon">✅</span>
        ) : (
          <span className="map-node-icon">{level.emoji}</span>
        )}
        <span className="map-node-num">{index + 1}</span>
      </div>

      {/* 3 etoiles */}
      <div className="map-stars">
        {[0, 1, 2].map(i => (
          <span key={i} className={`map-star ${level.stars[i] ? "earned" : ""}`}>
            {level.stars[i] ? "⭐" : "☆"}
          </span>
        ))}
      </div>

      {/* Titre du chapitre (visible si pas verrouille) */}
      {!level.locked && (
        <span className="map-node-title">{level.titre.length > 18 ? level.titre.slice(0, 18) + "..." : level.titre}</span>
      )}
    </div>
  );
}
