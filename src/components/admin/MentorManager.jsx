import { useState, useEffect } from "react";
import { supabase, SUPABASE_READY } from "../../lib/supabaseClient";
import { MENTORS } from "../../data/mentors";

const CREATE_MENTORS_SQL = `
create table if not exists public.mentors (
  id text primary key,
  name text not null,
  rank text not null,
  avatar_emoji text default '🧑‍⚕️',
  bio text,
  specialty text,
  is_active boolean default true,
  created_at timestamptz default now()
);
alter table public.mentors enable row level security;
create policy "mentors_select" on public.mentors for select using (true);
create policy "mentors_insert" on public.mentors for insert with check (true);
create policy "mentors_update" on public.mentors for update using (true);
create policy "mentors_delete" on public.mentors for delete using (true);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  student_pseudo text not null,
  student_device_id text not null,
  mentor_id text references mentors(id),
  status text default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.conversations enable row level security;
create policy "conv_select" on public.conversations for select using (true);
create policy "conv_insert" on public.conversations for insert with check (true);
create policy "conv_update" on public.conversations for update using (true);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references conversations(id) on delete cascade,
  sender_type text not null,
  sender_name text not null,
  content text not null,
  created_at timestamptz default now()
);
alter table public.messages enable row level security;
create policy "msg_select" on public.messages for select using (true);
create policy "msg_insert" on public.messages for insert with check (true);

alter publication supabase_realtime add table messages;
`;

export default function MentorManager() {
  const [mentors, setMentors] = useState([]);
  const [syncMsg, setSyncMsg] = useState("");
  const [showSQL, setShowSQL] = useState(false);

  useEffect(() => {
    if (!SUPABASE_READY) return;
    loadMentors();
  }, []);

  async function loadMentors() {
    const { data, error } = await supabase.from("mentors").select("*").order("created_at");
    if (error) {
      setSyncMsg("Table mentors inexistante — cree-la avec le SQL ci-dessous.");
      setShowSQL(true);
      return;
    }
    setMentors(data || []);
  }

  async function syncDefaultMentors() {
    setSyncMsg("Sync en cours...");
    for (const m of MENTORS) {
      await supabase.from("mentors").upsert({
        id: m.id,
        name: m.name,
        rank: m.rank,
        avatar_emoji: m.emoji,
        bio: m.bio,
        specialty: m.specialty,
        is_active: true,
      }, { onConflict: "id" });
    }
    await loadMentors();
    setSyncMsg(`Sync OK — ${MENTORS.length} mentors.`);
  }

  async function toggleActive(mentor) {
    await supabase.from("mentors").update({ is_active: !mentor.is_active }).eq("id", mentor.id);
    await loadMentors();
  }

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Gestion des Mentors</h3>

      <button className="bo-sync-btn" onClick={syncDefaultMentors}>
        Sync mentors par defaut → Supabase
      </button>
      {syncMsg && <p className="bo-sync-msg">{syncMsg}</p>}

      {showSQL && (
        <div style={{ marginTop: 12 }}>
          <p style={{ fontSize: 13, color: "var(--gray)", marginBottom: 8 }}>
            Execute ce SQL dans Supabase SQL Editor :
          </p>
          <button
            className="bo-sync-btn"
            onClick={() => { navigator.clipboard.writeText(CREATE_MENTORS_SQL); setSyncMsg("SQL copie !"); }}
          >
            Copier le SQL
          </button>
          <pre className="bo-sql-block">{CREATE_MENTORS_SQL}</pre>
        </div>
      )}

      <div style={{ marginTop: 16 }}>
        {mentors.map(m => (
          <div key={m.id} className="bo-schema-card" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 28 }}>{m.avatar_emoji}</span>
            <div style={{ flex: 1 }}>
              <strong>{m.name}</strong> — <span style={{ color: "var(--gold)" }}>{m.rank}</span>
              <br />
              <small style={{ color: "var(--gray)" }}>{m.specialty}</small>
            </div>
            <button
              className="bo-sync-btn"
              style={{ background: m.is_active ? "rgba(46,204,113,0.15)" : "rgba(224,90,43,0.15)", fontSize: 12, padding: "6px 12px" }}
              onClick={() => toggleActive(m)}
            >
              {m.is_active ? "Actif ✅" : "Inactif ❌"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
