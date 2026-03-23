import { useState, useEffect, useRef } from "react";
import { supabase, SUPABASE_READY } from "../../lib/supabaseClient";
import ChatBubble from "./ChatBubble";

export default function ChatConversation({ mentor, storage, onBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [conversationId, setConversationId] = useState(null);
  const bottomRef = useRef(null);
  const pseudo = storage?.pseudo || "Etudiant";
  const deviceId = storage?.device_id || "unknown";

  // Charger ou creer la conversation
  useEffect(() => {
    if (!SUPABASE_READY) { setLoading(false); return; }

    async function init() {
      // Chercher une conversation existante
      const { data: existing } = await supabase
        .from("conversations")
        .select("id")
        .eq("student_device_id", deviceId)
        .eq("mentor_id", mentor.id)
        .eq("status", "active")
        .limit(1);

      let convId;
      if (existing && existing.length > 0) {
        convId = existing[0].id;
      } else {
        // Creer une nouvelle conversation
        const { data: created } = await supabase
          .from("conversations")
          .insert({
            student_pseudo: pseudo,
            student_device_id: deviceId,
            mentor_id: mentor.id,
          })
          .select("id")
          .single();
        convId = created?.id;
      }

      if (convId) {
        setConversationId(convId);
        // Charger les messages
        const { data: msgs } = await supabase
          .from("messages")
          .select("*")
          .eq("conversation_id", convId)
          .order("created_at", { ascending: true });
        setMessages(msgs || []);
      }
      setLoading(false);
    }

    init();
  }, [mentor.id, deviceId, pseudo]);

  // Realtime subscription
  useEffect(() => {
    if (!conversationId || !SUPABASE_READY) return;

    const channel = supabase
      .channel(`messages-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages(prev => {
            // Eviter les doublons
            if (prev.some(m => m.id === payload.new.id)) return prev;
            return [...prev, payload.new];
          });
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [conversationId]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim() || !conversationId) return;

    const content = input.trim();
    setInput("");

    // Optimistic update
    const optimistic = {
      id: `temp-${Date.now()}`,
      conversation_id: conversationId,
      sender_type: "student",
      sender_name: pseudo,
      content,
      created_at: new Date().toISOString(),
    };
    setMessages(prev => [...prev, optimistic]);

    // Insert dans Supabase
    await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender_type: "student",
      sender_name: pseudo,
      content,
    });
  }

  if (!SUPABASE_READY) {
    return (
      <div className="page">
        <div className="back-header">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="back-title">Chat</span>
        </div>
        <div className="empty-state">
          <span style={{ fontSize: 48 }}>⚙️</span>
          <p>Chat indisponible (Supabase non configure).</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-page">
      {/* Header */}
      <div className="chat-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="chat-header-emoji">{mentor.emoji}</span>
        <div className="chat-header-info">
          <strong>{mentor.name}</strong>
          <span className="chat-header-rank">{mentor.rank}</span>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {loading && <div className="chat-loading">Chargement...</div>}

        {!loading && messages.length === 0 && (
          <div className="chat-welcome">
            <span className="chat-welcome-emoji">{mentor.emoji}</span>
            <p className="chat-welcome-text">
              Salut ! Je suis <strong>{mentor.name}</strong>, {mentor.rank}.
              <br />{mentor.bio}
              <br /><br />N'hesite pas a me poser tes questions !
            </p>
          </div>
        )}

        {messages.map(msg => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form className="chat-input-bar" onSubmit={sendMessage}>
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ecris ton message..."
          maxLength={500}
        />
        <button className="chat-send-btn" type="submit" disabled={!input.trim()}>
          ➤
        </button>
      </form>
    </div>
  );
}
