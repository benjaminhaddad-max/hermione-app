import { useState } from "react";
import { getLevel } from "../../data/leaderboard";

const CLASSES = ["Seconde","Première","Terminale","PASS/LAS","Autre"];
const FILIERES = ["Scientifique","Littéraire","Économique","Technologique","Autre"];
const FACS = [
  "Paris Cité (Paris)","Sorbonne Université (Paris)","Paris-Saclay",
  "Sorbonne Paris-Nord (Bobigny)","Paris-Est Créteil (UPEC)","Versailles Saint-Quentin (UVSQ)",
  "Lyon Est","Lyon Sud","Bordeaux","Aix-Marseille","Montpellier","Toulouse",
  "Lille","Strasbourg","Nantes","Rennes","Grenoble Alpes","Amiens","Angers",
  "Besançon","Caen","Clermont-Ferrand","Dijon","Nancy","Nice","Poitiers",
  "Reims","Rouen","Tours","Antilles","Autre",
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function formatPhone(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}
function isPhoneValid(v) {
  const d = v.replace(/\D/g, "");
  return d.length === 0 || (d.length === 10 && /^0[1-9]/.test(d));
}

export default function ProfilPage({ storage, onBack, onUpdate, onSignOut }) {
  const user = storage.user || {};
  const [form, setForm] = useState({
    prenom: user.prenom || "",
    nom: user.nom || "",
    email: user.email || "",
    tel: user.tel ? formatPhone(user.tel) : "",
    classe: user.classe || "",
    filiere: user.filiere || "",
    departement: user.departement || "",
    fac: user.fac || "",
    pseudo: storage.pseudo || "",
  });
  const [saved, setSaved] = useState(false);
  const [touched, setTouched] = useState({});

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setSaved(false); };
  const touch = (k) => setTouched(t => ({...t,[k]:true}));

  const emailOk = EMAIL_RE.test(form.email);
  const phoneOk = isPhoneValid(form.tel);
  const pseudoOk = form.pseudo.trim().length >= 5 && /[\d_\-.]/.test(form.pseudo);
  const canSave = emailOk && phoneOk && pseudoOk;

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
          <input
            className={`profil-input ${touched.pseudo && !(form.pseudo.trim().length >= 5 && /[\d_\-.]/.test(form.pseudo)) ? "profil-input-error" : ""}`}
            value={form.pseudo}
            onChange={e => set("pseudo", e.target.value.replace(/\s/g,""))}
            onBlur={() => touch("pseudo")}
            placeholder="Ex: emma_med26"
            maxLength={20}
          />
          {touched.pseudo && form.pseudo.trim().length < 5 && <p className="profil-field-error">5 caractères min.</p>}
          {touched.pseudo && form.pseudo.trim().length >= 5 && !/[\d_\-.]/.test(form.pseudo) && <p className="profil-field-error">Ajoute un chiffre ou caractère spécial (_, -, .)</p>}
          <p style={{fontSize:11,color:"var(--gray)",marginTop:-2}}>5 car. min. avec un chiffre ou _, -, .</p>
        </div>
      </div>

      <div className="profil-section">
        <h3 className="profil-section-title">Coordonnées</h3>
        <div className="profil-field">
          <label className="profil-label">Email</label>
          <input
            className={`profil-input ${touched.email && !emailOk ? "profil-input-error" : ""}`}
            type="email"
            inputMode="email"
            value={form.email}
            onChange={e => set("email", e.target.value)}
            onBlur={() => touch("email")}
          />
          {touched.email && !emailOk && <p className="profil-field-error">Format email invalide (ex: nom@mail.com)</p>}
        </div>
        <div className="profil-field">
          <label className="profil-label">Téléphone</label>
          <input
            className={`profil-input ${touched.tel && !phoneOk ? "profil-input-error" : ""}`}
            type="tel"
            inputMode="tel"
            value={form.tel}
            onChange={e => set("tel", formatPhone(e.target.value))}
            onBlur={() => touch("tel")}
            placeholder="06 12 34 56 78"
          />
          {touched.tel && !phoneOk && <p className="profil-field-error">10 chiffres commençant par 0 (ex: 06 12 34 56 78)</p>}
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
          <input className="profil-input" inputMode="numeric" pattern="[0-9]*" value={form.departement} onChange={e => set("departement", e.target.value.replace(/\D/g,"").slice(0,3))} placeholder="Ex: 75, 69, 13..." />
        </div>
        <div className="profil-field">
          <label className="profil-label">Fac</label>
          <select className="profil-input" value={form.fac} onChange={e => set("fac", e.target.value)}>
            <option value="">Choisis ta fac…</option>
            {FACS.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      <button className="profil-save-btn" onClick={handleSave} disabled={!canSave}>
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
