import { useState } from "react";
import { getLevel } from "../../data/leaderboard";

const CLASSES = ["Terminale","Bac+1 (PASS)","Bac+1 (LAS)","Bac+2","Autre"];
const FILIERES = ["Scientifique","Littéraire","Économique","Technologique","Autre"];

export default function ProfilPage({ storage, onBack, onUpdate, onSignOut }) {
  const user = storage.user || {};
  const [form, setForm] = useState({
    prenom: user.prenom || "",
    nom: user.nom || "",
    email: user.email || "",
    tel: user.tel || "",
    classe: user.classe || "",
    filiere: user.filiere || "",
    departement: user.departement || "",
    fac: user.fac || "",
    pseudo: storage.pseudo || "",
  });
  const [saved, setSaved] = useState(false);

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setSaved(false); };

  function handleSave() {
    onUpdate({
      user: { ...user, prenom: form.prenom, nom: form.nom, email: form.email, tel: form.tel, classe: form.classe, filiere: form.filiere, departement: form.departement, fac: form.fac },
      pseudo: form.pseudo,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const xp = storage.xp || 0;
  const { current } = getLevel(xp);
  const initials = (form.prenom?.[0] || "") + (form.nom?.[0] || "");

  return (
    <div className="page profil-page">
      <div className="profil-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="profil-header-title">Mon profil</span>
        <div style={{ width: 32 }} />
      </div>

      <div className="profil-avatar-section">
        <div className="profil-avatar">
          <span className="profil-avatar-text">{initials.toUpperCase() || "?"}</span>
        </div>
        <div className="profil-avatar-info">
          <span className="profil-display-name">{form.pseudo || `${form.prenom} ${form.nom}`}</span>
          <span className="profil-level">{current.emoji} {current.name} · {xp.toLocaleString()} XP</span>
        </div>
      </div>

      <div className="profil-section">
        <h3 className="profil-section-title">Identité</h3>
        <div className="profil-field">
          <label className="profil-label">Prénom</label>
          <input className="profil-input" value={form.prenom} onChange={e => set("prenom", e.target.value)} />
        </div>
        <div className="profil-field">
          <label className="profil-label">Nom</label>
          <input className="profil-input" value={form.nom} onChange={e => set("nom", e.target.value)} />
        </div>
        <div className="profil-field">
          <label className="profil-label">Pseudo</label>
          <input className="profil-input" value={form.pseudo} onChange={e => set("pseudo", e.target.value)} placeholder="Visible dans le classement" />
        </div>
      </div>

      <div className="profil-section">
        <h3 className="profil-section-title">Coordonnées</h3>
        <div className="profil-field">
          <label className="profil-label">Email</label>
          <input className="profil-input" type="email" value={form.email} onChange={e => set("email", e.target.value)} />
        </div>
        <div className="profil-field">
          <label className="profil-label">Téléphone</label>
          <input className="profil-input" type="tel" value={form.tel} onChange={e => set("tel", e.target.value)} />
        </div>
      </div>

      <div className="profil-section">
        <h3 className="profil-section-title">Situation</h3>
        <div className="profil-field">
          <label className="profil-label">Classe</label>
          <div className="profil-chips">
            {CLASSES.map(c => (
              <button key={c} className={`profil-chip ${form.classe === c ? "active" : ""}`} onClick={() => set("classe", c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className="profil-field">
          <label className="profil-label">Filière</label>
          <div className="profil-chips">
            {FILIERES.map(f => (
              <button key={f} className={`profil-chip ${form.filiere === f ? "active" : ""}`} onClick={() => set("filiere", f)}>{f}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="profil-section">
        <h3 className="profil-section-title">Fac visée</h3>
        <div className="profil-field">
          <label className="profil-label">Département</label>
          <input className="profil-input" value={form.departement} onChange={e => set("departement", e.target.value)} placeholder="Ex: 75, 69, 13..." />
        </div>
        <div className="profil-field">
          <label className="profil-label">Fac</label>
          <input className="profil-input" value={form.fac} onChange={e => set("fac", e.target.value)} placeholder="Ex: Paris Descartes" />
        </div>
      </div>

      <button className="profil-save-btn" onClick={handleSave}>
        {saved ? "✓ Enregistré" : "ENREGISTRER LES MODIFICATIONS"}
      </button>

      {onSignOut && (
        <button className="profil-signout" onClick={onSignOut}>
          Se déconnecter
        </button>
      )}

      <div style={{ height: 32 }} />
    </div>
  );
}
