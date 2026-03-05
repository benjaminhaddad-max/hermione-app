import { useState } from "react";
import { MATIERES } from "../../data/content";

const JOURS = ["L", "M", "M", "J", "V", "S", "D"];
const MOIS_NOMS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const TYPE_ICONS = { flashcards: "🃏", qcm: "✅", fiche: "📖", revision_libre: "📝" };

function getJoursCalendrier(annee, mois) {
  const premier = new Date(annee, mois, 1);
  const lundi = (premier.getDay() + 6) % 7; // 0=lundi
  const total = new Date(annee, mois + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < lundi; i++) cells.push(null);
  for (let d = 1; d <= total; d++) cells.push(d);
  return cells;
}

export default function AgendaPage({ storage, updateStorage }) {
  const today = new Date();
  const [annee, setAnnee] = useState(today.getFullYear());
  const [mois, setMois] = useState(today.getMonth());
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ date: "", heure: "09:00", duree_min: 45, type: "fiche", matiere_id: MATIERES[0]?.id || "", label: "" });

  const sessions = storage.agenda?.sessions || [];
  const cells = getJoursCalendrier(annee, mois);

  function moisStr(d) {
    return `${annee}-${String(mois + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }

  function sessionsOfDay(d) {
    return sessions.filter(s => s.date === moisStr(d));
  }

  function sessionsDuMois() {
    const prefix = `${annee}-${String(mois + 1).padStart(2, "0")}`;
    return sessions.filter(s => s.date.startsWith(prefix)).sort((a, b) => a.date.localeCompare(b.date));
  }

  function addSession() {
    if (!form.label || !form.date) return;
    const newSession = { id: "sess_" + Date.now(), ...form, faite: false };
    updateStorage(prev => ({ ...prev, agenda: { sessions: [...(prev.agenda?.sessions || []), newSession] } }));
    setModal(false);
    setForm({ date: "", heure: "09:00", duree_min: 45, type: "fiche", matiere_id: MATIERES[0]?.id || "", label: "" });
  }

  function toggleFaite(id) {
    updateStorage(prev => ({
      ...prev,
      agenda: { sessions: prev.agenda.sessions.map(s => s.id === id ? { ...s, faite: !s.faite } : s) }
    }));
  }

  function deleteSession(id) {
    updateStorage(prev => ({ ...prev, agenda: { sessions: prev.agenda.sessions.filter(s => s.id !== id) } }));
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Agenda</h1>
          <p className="page-sub">Planifie tes révisions</p>
        </div>
        <button className="add-session-btn" onClick={() => setModal(true)}>+ Session</button>
      </div>

      {/* Calendrier */}
      <div className="calendar-header">
        <button className="cal-nav-btn" onClick={() => { if (mois === 0) { setMois(11); setAnnee(a => a - 1); } else setMois(m => m - 1); }}>‹</button>
        <span className="cal-month-label">{MOIS_NOMS[mois]} {annee}</span>
        <button className="cal-nav-btn" onClick={() => { if (mois === 11) { setMois(0); setAnnee(a => a + 1); } else setMois(m => m + 1); }}>›</button>
      </div>
      <div className="calendar-grid">
        {JOURS.map((j, i) => <div key={i} className="calendar-day-header">{j}</div>)}
        {cells.map((d, i) => {
          if (!d) return <div key={i} className="calendar-day empty" />;
          const isToday = d === today.getDate() && mois === today.getMonth() && annee === today.getFullYear();
          const hasSess = sessionsOfDay(d).length > 0;
          return (
            <div key={i} className={`calendar-day ${isToday ? "today" : ""} ${hasSess ? "has-session" : ""}`}
              onClick={() => { setForm(f => ({ ...f, date: moisStr(d) })); setModal(true); }}>
              <span>{d}</span>
            </div>
          );
        })}
      </div>

      {/* Sessions du mois */}
      {sessionsDuMois().length > 0 && (
        <>
          <p className="section-title" style={{ marginTop: 20 }}>Sessions planifiées</p>
          {sessionsDuMois().map(s => (
            <div key={s.id} className={`session-card ${s.faite ? "faite" : ""}`}>
              <span className="session-type-icon">{TYPE_ICONS[s.type] || "📝"}</span>
              <div className="session-info">
                <div className="session-label">{s.label}</div>
                <div className="session-meta">{s.date} · {s.heure} · {s.duree_min} min</div>
              </div>
              <button className={`session-done-btn ${s.faite ? "done" : ""}`} onClick={() => toggleFaite(s.id)}>
                {s.faite ? "✓" : "○"}
              </button>
              <button className="session-delete-btn" onClick={() => deleteSession(s.id)}>✕</button>
            </div>
          ))}
        </>
      )}

      {sessionsDuMois().length === 0 && (
        <div className="empty-state" style={{ marginTop: 24 }}>
          <span style={{ fontSize: 40 }}>📅</span>
          <p>Aucune session ce mois-ci.<br />Appuie sur "+ Session" pour planifier.</p>
        </div>
      )}

      {/* Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <h3 className="modal-titre">Nouvelle session</h3>
            <label className="modal-label">Titre</label>
            <input className="ob-input" placeholder="Ex: Révision biochimie" value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))} />
            <label className="modal-label">Date</label>
            <input className="ob-input" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            <div className="modal-row">
              <div style={{ flex: 1 }}>
                <label className="modal-label">Heure</label>
                <input className="ob-input" type="time" value={form.heure} onChange={e => setForm(f => ({ ...f, heure: e.target.value }))} />
              </div>
              <div style={{ flex: 1 }}>
                <label className="modal-label">Durée (min)</label>
                <input className="ob-input" type="number" value={form.duree_min} onChange={e => setForm(f => ({ ...f, duree_min: +e.target.value }))} />
              </div>
            </div>
            <label className="modal-label">Type</label>
            <select className="ob-input" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
              <option value="fiche">📖 Fiche de cours</option>
              <option value="flashcards">🃏 Flashcards</option>
              <option value="qcm">✅ QCM</option>
              <option value="revision_libre">📝 Révision libre</option>
            </select>
            <div className="modal-actions">
              <button className="modal-cancel" onClick={() => setModal(false)}>Annuler</button>
              <button className="btn-gold" onClick={addSession} style={{ flex: 1 }}>Ajouter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
