export default function ChatBubble({ message }) {
  const isStudent = message.sender_type === "student";
  const time = new Date(message.created_at).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`chat-bubble ${isStudent ? "student" : "mentor"}`}>
      <div className="chat-bubble-content">
        <p className="chat-bubble-text">{message.content}</p>
      </div>
      <span className="chat-bubble-time">{time}</span>
    </div>
  );
}
