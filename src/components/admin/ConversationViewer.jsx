import { useState, useEffect, useRef } from "react";
import { supabase, SUPABASE_READY } from "../../lib/supabaseClient";

export default function ConversationViewer() {
  const [conversations, setConversations] = useState([]);
  const [activeConv, setActiveConv] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [filter, setFilter] = useState("all");
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!SUPABASE_READY) return;
    loadConversations();
  }, []);

  async function loadConversations() {
    const { data } = await supabase
      .from("conversations")
      .select("*, mentors(name, avatar_emoji, rank)")
      .order("updated_at", { ascending: false });
    setConversations(data || []);
  }

  async function openConversation(conv) {
    setActiveConv(conv);
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conv.id)
      .order("created_at", { ascending: true });
    setMessages(data || []);
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  async function sendReply(e) {
    e.preventDefault();
    if (!reply.trim() || !activeConv) return;

    await supabase.from("messages").insert({
      conversation_id: activeConv.id,
      sender_type: "mentor",
      sender_name: activeConv.mentors?.name || "Mentor",
      content: reply.trim(),
    });

    await supabase.from("conversations").update({
      updated_at: new Date().toISOString()
    }).eq("id", activeConv.id);

    setReply("");
    openConversation(activeConv);
  }

  if (!SUPABASE_READY) {
    return <p style={{ color: "var(--gray)" }}>Supabase non configure.</p>;
  }

  if (activeConv) {
    return (
      <div>
        <button className="bo-sync-btn" onClick={() => { setActiveConv(null); loadConversations(); }} style={{ marginBottom: 12 }}>
          ← Retour aux conversations
        </button>

        <div style={{ marginBottom: 8 }}>
          <strong>{activeConv.student_pseudo}</strong> → {activeConv.mentors?.avatar_emoji} {activeConv.mentors?.name}
          <span style={{ color: "var(--gray)", fontSize: 12, marginLeft: 8 }}>
            ({activeConv.status})
          </span>
        </div>

        <div style={{ maxHeight: 400, overflowY: "auto", background: "rgba(0,0,0,0.2)", borderRadius: 12, padding: 12, marginBottom: 12 }}>
          {messages.map(msg => (
            <div key={msg.id} style={{
              display: "flex",
              justifyContent: msg.sender_type === "student" ? "flex-start" : "flex-end",
              marginBottom: 8,
            }}>
              <div style={{
                maxWidth: "70%",
                padding: "8px 12px",
                borderRadius: 12,
                background: msg.sender_type === "student" ? "rgba(255,255,255,0.06)" : "rgba(201,168,76,0.15)",
                border: `1px solid ${msg.sender_type === "student" ? "rgba(255,255,255,0.1)" : "rgba(201,168,76,0.3)"}`,
                fontSize: 13,
              }}>
                <div style={{ fontSize: 10, color: "var(--gray)", marginBottom: 4 }}>
                  {msg.sender_name} · {new Date(msg.created_at).toLocaleString("fr-FR")}
                </div>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={sendReply} style={{ display: "flex", gap: 8 }}>
          <input
            value={reply}
            onChange={e => setReply(e.target.value)}
            placeholder="Repondre en tant que mentor..."
            style={{
              flex: 1, padding: "10px 14px", borderRadius: 12,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--white)", fontSize: 14, outline: "none",
            }}
          />
          <button className="bo-sync-btn" type="submit" disabled={!reply.trim()}>Envoyer</button>
        </form>
      </div>
    );
  }

  const filtered = filter === "all" ? conversations : conversations.filter(c => c.mentor_id === filter);
  const mentorIds = [...new Set(conversations.map(c => c.mentor_id))];

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Conversations ({conversations.length})</h3>

      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        <button className={`aventure-world-chip ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>Toutes</button>
        {mentorIds.map(id => (
          <button key={id} className={`aventure-world-chip ${filter === id ? "active" : ""}`} onClick={() => setFilter(id)}>
            {conversations.find(c => c.mentor_id === id)?.mentors?.name || id}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "var(--gray)", fontSize: 14 }}>Aucune conversation pour le moment.</p>
      )}

      {filtered.map(conv => (
        <div
          key={conv.id}
          className="bo-schema-card"
          style={{ cursor: "pointer", marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}
          onClick={() => openConversation(conv)}
        >
          <span style={{ fontSize: 24 }}>{conv.mentors?.avatar_emoji || "💬"}</span>
          <div style={{ flex: 1 }}>
            <strong>{conv.student_pseudo}</strong>
            <span style={{ color: "var(--gold)", fontSize: 12, marginLeft: 8 }}>→ {conv.mentors?.name}</span>
            <br />
            <small style={{ color: "var(--gray)" }}>
              {new Date(conv.updated_at).toLocaleDateString("fr-FR")} · {conv.status}
            </small>
          </div>
          <span style={{ color: "var(--gray)" }}>›</span>
        </div>
      ))}
    </div>
  );
}
