import { useState } from "react";
import { MATIERES } from "../../data/content";
import { getLevel, getRank, LEVELS } from "../../data/leaderboard";

const DEPARTEMENTS = [
  "01 - Ain","02 - Aisne","03 - Allier","04 - Alpes-de-Haute-Provence","05 - Hautes-Alpes",
  "06 - Alpes-Maritimes","07 - Ardèche","08 - Ardennes","09 - Ariège","10 - Aube",
  "11 - Aude","12 - Aveyron","13 - Bouches-du-Rhône","14 - Calvados","15 - Cantal",
  "16 - Charente","17 - Charente-Maritime","18 - Cher","19 - Corrèze","21 - Côte-d'Or",
  "22 - Côtes-d'Armor","23 - Creuse","24 - Dordogne","25 - Doubs","26 - Drôme",
  "27 - Eure","28 - Eure-et-Loir","29 - Finistère","2A - Corse-du-Sud","2B - Haute-Corse",
  "30 - Gard","31 - Haute-Garonne","32 - Gers","33 - Gironde","34 - Hérault",
  "35 - Ille-et-Vilaine","36 - Indre","37 - Indre-et-Loire","38 - Isère","39 - Jura",
  "40 - Landes","41 - Loir-et-Cher","42 - Loire","43 - Haute-Loire","44 - Loire-Atlantique",
  "45 - Loiret","46 - Lot","47 - Lot-et-Garonne","48 - Lozère","49 - Maine-et-Loire",
  "50 - Manche","51 - Marne","52 - Haute-Marne","53 - Mayenne","54 - Meurthe-et-Moselle",
  "55 - Meuse","56 - Morbihan","57 - Moselle","58 - Nièvre","59 - Nord",
  "60 - Oise","61 - Orne","62 - Pas-de-Calais","63 - Puy-de-Dôme","64 - Pyrénées-Atlantiques",
  "65 - Hautes-Pyrénées","66 - Pyrénées-Orientales","67 - Bas-Rhin","68 - Haut-Rhin","69 - Rhône",
  "70 - Haute-Saône","71 - Saône-et-Loire","72 - Sarthe","73 - Savoie","74 - Haute-Savoie",
  "75 - Paris","76 - Seine-Maritime","77 - Seine-et-Marne","78 - Yvelines","79 - Deux-Sèvres",
  "80 - Somme","81 - Tarn","82 - Tarn-et-Garonne","83 - Var","84 - Vaucluse",
  "85 - Vendée","86 - Vienne","87 - Haute-Vienne","88 - Vosges","89 - Yonne",
  "90 - Territoire de Belfort","91 - Essonne","92 - Hauts-de-Seine","93 - Seine-Saint-Denis",
  "94 - Val-de-Marne","95 - Val-d'Oise","971 - Guadeloupe","972 - Martinique",
  "973 - Guyane","974 - La Réunion","976 - Mayotte",
];

export default function HomePage({ user, storage, onGoTo }) {
  const fichesLues = Object.values(storage.fiches_lues || {}).filter(f => f.lue).length;
  const totalCours = MATIERES.flatMap(m => m.cours).length;
  const userXP = storage.xp || 0;
  const streak = storage.streak || 0;
  const totalMatieres = MATIERES.length;
  const { current, nextLevel } = getLevel(userXP);
  const rank = getRank(userXP);

  const progressPct = nextLevel
    ? Math.min(100, Math.round((userXP - current.minXP) / (nextLevel.minXP - current.minXP) * 100))
    : 100;

  const [showForm, setShowForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ nom: "", prenom: "", tel: "", email: "", departement: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setShowForm(false), 2500);
  }

  return (
    <div className="page hp">
      {/* ── Header ── */}
      <div className="hp-header">
        <div>
          <h1 className="hp-hello">Salut {user.prenom} 👋</h1>
          <p className="hp-sub">Prêt(e) à réussir PASS/LAS ?</p>
        </div>
        <img src="/logo-hermione.webp" alt="Hermione" className="hp-logo" />
      </div>

      {/* ── XP Card ── */}
      <button className="hp-xp-card" onClick={() => onGoTo("classement")}>
        <div className="hp-xp-top">
          <div className="hp-xp-left">
            <span className="hp-xp-emoji">{current.emoji}</span>
            <div>
              <div className="hp-xp-level">{current.name}</div>
              <div className="hp-xp-val">{userXP.toLocaleString()} XP</div>
            </div>
          </div>
          <div className="hp-xp-right">
            <span className="hp-xp-rank">#{rank.toLocaleString()}</span>
            <span className="hp-xp-rank-sub">sur 32 494</span>
          </div>
        </div>
        {nextLevel && (
          <div className="hp-xp-bar-wrap">
            <div className="hp-xp-bar">
              <div className="hp-xp-bar-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="hp-xp-bar-label">{nextLevel.emoji} {nextLevel.name} dans {(nextLevel.minXP - userXP).toLocaleString()} XP</span>
          </div>
        )}
        {streak > 0 && <div className="hp-streak">🔥 {streak} jour{streak > 1 ? "s" : ""} de suite</div>}
      </button>

      {/* ── Stats rapides ── */}
      <div className="hp-stats-row">
        <div className="hp-stat">
          <span className="hp-stat-num">{fichesLues}</span>
          <span className="hp-stat-label">Fiches lues</span>
        </div>
        <div className="hp-stat-sep" />
        <div className="hp-stat">
          <span className="hp-stat-num">{totalCours}</span>
          <span className="hp-stat-label">Chapitres dispo</span>
        </div>
        <div className="hp-stat-sep" />
        <div className="hp-stat">
          <span className="hp-stat-num">{Object.values(storage.qcm_scores || {}).flat().length}</span>
          <span className="hp-stat-label">QCM faits</span>
        </div>
      </div>

      {/* ── Mode Aventure CTA ── */}
      <div className="hp-aventure-card">
        <div className="hp-aventure-glow" />
        <div className="hp-aventure-top">
          <span className="hp-aventure-badge">🗺️ MODE AVENTURE</span>
        </div>
        <h3 className="hp-aventure-title">Révise tout le programme PASS/LAS comme un jeu vidéo</h3>
        <p className="hp-aventure-pitch">
          Chaque matière est un <strong>monde</strong> à conquérir. Chaque chapitre est un <strong>niveau</strong>. 
          Lis la fiche, réussis le QCM, valide les flashcards — et passe au suivant. 
          Chaque étape te rapporte des <strong>XP</strong> pour grimper au classement parmi 32 000 étudiants.
        </p>

        <div className="hp-aventure-steps">
          <div className="hp-aventure-step">
            <div className="hp-aventure-step-num">1</div>
            <div>
              <strong>Lis la fiche de cours</strong>
              <span>Comprends les notions du chapitre</span>
            </div>
          </div>
          <div className="hp-aventure-step-arrow">↓</div>
          <div className="hp-aventure-step">
            <div className="hp-aventure-step-num">2</div>
            <div>
              <strong>Réussis le QCM (≥ 70%)</strong>
              <span>Prouve que tu maîtrises pour débloquer la suite</span>
            </div>
          </div>
          <div className="hp-aventure-step-arrow">↓</div>
          <div className="hp-aventure-step">
            <div className="hp-aventure-step-num">3</div>
            <div>
              <strong>Valide les flashcards</strong>
              <span>Mémorise durablement pour décrocher les 3 étoiles</span>
            </div>
          </div>
          <div className="hp-aventure-step-arrow">↓</div>
          <div className="hp-aventure-step hp-aventure-step-reward">
            <div className="hp-aventure-step-num">🎁</div>
            <div>
              <strong>Débloque un mentor PASS</strong>
              <span>Finis un monde = accès chat avec un étudiant en médecine</span>
            </div>
          </div>
        </div>

        <div className="hp-aventure-bottom">
          <span>🏰 {totalMatieres} mondes</span>
          <span className="hp-aventure-dot">·</span>
          <span>📚 {totalCours} niveaux</span>
          <span className="hp-aventure-dot">·</span>
          <span>💬 4 mentors à débloquer</span>
        </div>

        <button className="hp-aventure-btn" onClick={() => onGoTo("aventure")}>
          COMMENCER L'AVENTURE →
        </button>
      </div>

      {/* ── Réviser CTA ── */}
      <button className="hp-reviser-card" onClick={() => onGoTo("cours")}>
        <div className="hp-reviser-left">
          <span className="hp-reviser-icon">📖</span>
          <div>
            <div className="hp-reviser-title">Réviser librement</div>
            <div className="hp-reviser-sub">Fiches, QCM et flashcards par matière</div>
          </div>
        </div>
        <span className="hp-reviser-arrow">›</span>
      </button>

      {/* ── CTA Coaching ── */}
      <div className="hp-coaching-card">
        <div className="hp-coaching-header">
          <span style={{ fontSize: 28 }}>🎓</span>
          <div>
            <div className="hp-coaching-title">Parle à un coach en 2e année de médecine</div>
            <div className="hp-coaching-sub">Gratuit · Un étudiant te rappelle sous 48h</div>
          </div>
        </div>

        {!showForm && !formSent && (
          <button className="hp-coaching-btn" onClick={() => setShowForm(true)}>
            SE FAIRE RAPPELER GRATUITEMENT →
          </button>
        )}

        {showForm && !formSent && (
          <form className="hp-coaching-form" onSubmit={handleSubmit}>
            <div className="hp-form-row">
              <input
                className="hp-form-input"
                placeholder="Prénom"
                required
                value={form.prenom}
                onChange={e => setForm({ ...form, prenom: e.target.value })}
              />
              <input
                className="hp-form-input"
                placeholder="Nom"
                required
                value={form.nom}
                onChange={e => setForm({ ...form, nom: e.target.value })}
              />
            </div>
            <input
              className="hp-form-input"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="hp-form-input"
              type="tel"
              placeholder="Numéro de téléphone"
              required
              value={form.tel}
              onChange={e => setForm({ ...form, tel: e.target.value })}
            />
            <select
              className="hp-form-input hp-form-select"
              required
              value={form.departement}
              onChange={e => setForm({ ...form, departement: e.target.value })}
            >
              <option value="">Département</option>
              {DEPARTEMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <button type="submit" className="hp-coaching-btn">
              ENVOYER MA DEMANDE →
            </button>
          </form>
        )}

        {formSent && (
          <div className="hp-coaching-success">
            ✅ Demande envoyée ! Un coach te recontacte très vite.
          </div>
        )}
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
