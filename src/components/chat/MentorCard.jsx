export default function MentorCard({ mentor, lastMessage, onClick }) {
  return (
    <div className="mentor-card" onClick={onClick}>
      <div className="mentor-card-avatar">{mentor.emoji}</div>
      <div className="mentor-card-info">
        <div className="mentor-card-top">
          <strong className="mentor-card-name">{mentor.name}</strong>
          <span className="mentor-card-rank">{mentor.rank}</span>
        </div>
        <p className="mentor-card-specialty">{mentor.specialty}</p>
        {lastMessage ? (
          <p className="mentor-card-last">
            {lastMessage.length > 40 ? lastMessage.slice(0, 40) + "..." : lastMessage}
          </p>
        ) : (
          <p className="mentor-card-last mentor-card-new">
            Nouveau ! Commence la conversation...
          </p>
        )}
      </div>
      <span className="mentor-card-arrow">›</span>
    </div>
  );
}
