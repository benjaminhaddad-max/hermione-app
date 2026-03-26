import { useState } from "react";
import { supabase, SUPABASE_READY } from "../../lib/supabaseClient";

export default function ChatListPage({ mentors, storage, onBack }) {
  const [requestedIds, setRequestedIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem("rappel_requests") || "[]"); } catch { return []; }
  });
  const [sending, setSending] = useState(null);

  const user = storage?.user || {};
  const pseudo = storage?.pseudo || "Étudiant";

  async function handleRequest(mentor) {
    setSending(mentor.id);
    if (SUPABASE_READY) {
      await supabase.from("callback_requests").insert({
        student_pseudo: pseudo,
        student_name: `${user.prenom || ""} ${user.nom || ""}`.trim() || pseudo,
        student_email: user.email || "",
        student_tel: user.tel || "",
        student_device_id: storage?.device_id || "unknown",
        mentor_rank: mentor.rank,
        mentor_name: mentor.name,
        mentor_id: mentor.id,
        status: "pending",
      }).then(() => {});
    }
    const updated = [...requestedIds, mentor.id];
    setRequestedIds(updated);
    localStorage.setItem("rappel_requests", JSON.stringify(updated));
    setSending(null);
  }

  return (
    <div className="page">
      <div className="back-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="back-title">📞 Tes Appels</span>
        <div style={{ width: 32 }} />
      </div>

      {mentors.length === 0 ? (
        <div className="empty-state">
          <span style={{ fontSize: 48 }}>🔒</span>
          <p>Complète des matières dans l'Aventure pour débloquer des appels !</p>
          <p style={{ fontSize: 13, color: "var(--gray)", marginTop: 8 }}>
            2 matières = Top 100 &middot; 4 = Top 50 &middot; 6 = Top 10 &middot; 8 = Major
          </p>
        </div>
      ) : (
        <>
          <div className="rappel-intro">
            <p className="rappel-intro-text">
              Tu as débloqué des appels avec des étudiants qui ont réussi PASS/LAS. Demande un rappel et ils te recontacteront dans les <strong>48h</strong> pour répondre à toutes tes questions.
            </p>
          </div>
          <div className="mentor-list">
            {mentors.map(m => {
              const alreadyRequested = requestedIds.includes(m.id);
              return (
                <div key={m.id} className="rappel-card">
                  <div className="rappel-card-top">
                    <div className="rappel-card-avatar">{m.emoji}</div>
                    <div className="rappel-card-info">
                      <strong className="rappel-card-name">{m.name}</strong>
                      <span className="rappel-card-rank">{m.rank}</span>
                      <span className="rappel-card-specialty">{m.specialty}</span>
                    </div>
                  </div>
                  <p className="rappel-card-bio">{m.bio}</p>
                  {alreadyRequested ? (
                    <div className="rappel-card-done">
                      <span>✅</span>
                      <span>Demande envoyée — rappel sous 48h</span>
                    </div>
                  ) : (
                    <button
                      className="rappel-card-btn"
                      onClick={() => handleRequest(m)}
                      disabled={sending === m.id}
                    >
                      {sending === m.id ? "Envoi en cours…" : `📞 Demander un rappel de ${m.name}`}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
