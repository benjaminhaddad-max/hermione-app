import { useState } from "react";
import MentorCard from "./MentorCard";
import ChatConversation from "./ChatConversation";

export default function ChatListPage({ mentors, storage, onBack }) {
  const [activeMentor, setActiveMentor] = useState(null);

  if (activeMentor) {
    return (
      <ChatConversation
        mentor={activeMentor}
        storage={storage}
        onBack={() => setActiveMentor(null)}
      />
    );
  }

  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">💬 Tes Mentors</span>
        <div style={{ width: 32 }} />
      </div>

      {mentors.length === 0 ? (
        <div className="empty-state">
          <span style={{ fontSize: 48 }}>🔒</span>
          <p>Complete des mondes dans l'Aventure pour debloquer des mentors !</p>
          <p style={{ fontSize: 13, color: "var(--gray)", marginTop: 8 }}>
            2 mondes = Top 100 &middot; 4 = Top 50 &middot; 6 = Top 10 &middot; 8 = Major
          </p>
        </div>
      ) : (
        <div className="mentor-list">
          {mentors.map(m => (
            <MentorCard
              key={m.id}
              mentor={m}
              lastMessage={null}
              onClick={() => setActiveMentor(m)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
