import { useState, useEffect, useCallback } from "react";
import "./App.css";
import useStorage from "./hooks/useStorage";
import useAuth from "./hooks/useAuth";
import useCloudStorage from "./hooks/useCloudStorage";
import { XP_REWARDS } from "./data/leaderboard";

import HomePage from "./components/home/HomePage";
import CoursListPage from "./components/cours/CoursListPage";
import MatiereCoursPage from "./components/cours/MatiereCoursPage";
import ChapitreDetailPage from "./components/cours/ChapitreDetailPage";


import FlashcardsListPage from "./components/flashcards/FlashcardsListPage";
import MatiereFlashcardsPage from "./components/flashcards/MatiereFlashcardsPage";
import FlashcardSession from "./components/flashcards/FlashcardSession";
import ClassementPage from "./components/classement/ClassementPage";
import AventurePage from "./components/aventure/AventurePage";
import MethodePage from "./components/methode/MethodePage";
import ProfilPage from "./components/profil/ProfilPage";
import BackofficePage from "./components/admin/BackofficePage";

const CLASSES = ["Seconde","Première","Terminale","PASS/LAS","Autre"];
const FILIERES = ["Scientifique","Littéraire","Économique","Technologique","Autre"];
const ROLES = ["Élève","Parent"];
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

function Onboarding({ onDone }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ nom:"", prenom:"", tel:"", email:"", role:"Élève", classe:"", filiere:"", departement:"", fac:"", pseudo:"" });
  const [touched, setTouched] = useState({});
  const set = (k,v) => setForm(f => ({...f,[k]:v}));
  const touch = (k) => setTouched(t => ({...t,[k]:true}));

  const TOTAL_STEPS = 6;
  const progress = step === 0 ? "0%" : Math.round(step / TOTAL_STEPS * 100) + "%";

  if (step === 0) return (
    <div className="ob-wrapper">
      <div className="ob-welcome">
        <div className="ob-logo-wrap">
          <img src="/logo-hermione.webp" alt="Hermione" className="ob-logo-img" />
          <div className="ob-logo-sub">La méthode pour réussir en PASS/LAS</div>
        </div>
        <div className="ob-tagline">Ton coach digital<br />Hermione.</div>
        <div className="ob-benefits">
          {[["📖","Fiches de cours visuelles"],["✅","QCM avec corrigés détaillés"],["🃏","Flashcards intelligentes"],["🏆","Classement & XP pour te motiver"]].map(([icon,txt],i)=>(
            <div key={i} className="ob-benefit"><span className="ob-benefit-icon">{icon}</span><span>{txt}</span></div>
          ))}
        </div>
        <button className="ob-start-btn" onClick={() => setStep(1)}>COMMENCER GRATUITEMENT →</button>
        <p className="ob-free-label">100% gratuit · Pour toujours · Aucune carte bancaire</p>
      </div>
    </div>
  );

  if (step === TOTAL_STEPS) return (
    <div className="ob-wrapper">
      <div className="ob-welcome ob-final">
        <div style={{fontSize:64,marginBottom:16}}>🎉</div>
        <div style={{fontFamily:"var(--font-display)",fontSize:22,fontWeight:900,marginBottom:8}}>Bienvenue {form.prenom} !</div>
        <p style={{fontSize:14,color:"var(--gray)",marginBottom:32}}>Ton espace Hermione est prêt.<br/>Gagne des XP et grimpe dans le classement !</p>
        <button className="ob-start-btn" onClick={() => onDone(form)}>
          ACCÉDER À MON ESPACE →
        </button>
      </div>
    </div>
  );

  const titles = ["","Qui es-tu ?","Tes coordonnées","Ta situation","Ta fac","Ton pseudo"];

  return (
    <div className="ob-wrapper">
      <button className="ob-back" onClick={() => step > 1 && setStep(step - 1)}>{step > 1 ? "←" : ""}</button>
      <div className="ob-title-bar">{titles[step] || ""}</div>
      <div className="ob-screen">
        <div className="ob-progress"><div className="ob-bar" style={{ width: progress }} /></div>

        {step === 1 && <>
          <h2>Comment tu t'appelles ?</h2>
          <input className="ob-input" placeholder="Prénom" value={form.prenom} onChange={e => set("prenom",e.target.value)} autoFocus />
          <input className="ob-input" placeholder="Nom" value={form.nom} onChange={e => set("nom",e.target.value)} />
          <div className="ob-role-row">
            {ROLES.map(r => (
              <button key={r} className={`ob-role-btn ${form.role===r?"active":""}`} onClick={() => set("role",r)}>{r === "Élève" ? "🎓" : "👨‍👩‍👧"} {r}</button>
            ))}
          </div>
          <div style={{flex:1}} />
          <button className="ob-next" disabled={!form.prenom.trim() || !form.nom.trim()} onClick={() => setStep(2)}>SUIVANT</button>
        </>}

        {step === 2 && (() => {
          const emailOk = EMAIL_RE.test(form.email);
          const phoneOk = isPhoneValid(form.tel);
          const canNext = emailOk && phoneOk;
          return <>
            <h2>Tes coordonnées</h2>
            <p style={{fontSize:13,color:"var(--gray)",marginBottom:12}}>Pour te recontacter si besoin (coaching, résultats…)</p>
            <input
              className={`ob-input ${touched.email && !emailOk ? "ob-input-error" : ""}`}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Adresse email"
              value={form.email}
              onChange={e => set("email", e.target.value)}
              onBlur={() => touch("email")}
              autoFocus
            />
            {touched.email && !emailOk && <p className="ob-field-error">Format email invalide (ex: nom@mail.com)</p>}
            <input
              className={`ob-input ${touched.tel && !phoneOk ? "ob-input-error" : ""}`}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Numéro de téléphone (06 12 34 56 78)"
              value={form.tel}
              onChange={e => set("tel", formatPhone(e.target.value))}
              onBlur={() => touch("tel")}
            />
            {touched.tel && !phoneOk && <p className="ob-field-error">Format : 10 chiffres commençant par 0 (ex: 06 12 34 56 78)</p>}
            <div style={{flex:1}} />
            <button className="ob-next" disabled={!canNext} onClick={() => setStep(3)}>SUIVANT</button>
          </>;
        })()}

        {step === 3 && <>
          <h2>Ta situation actuelle</h2>
          <p style={{fontSize:13,color:"var(--gray)",marginBottom:12}}>Classe actuelle</p>
          <div className="ob-chips">
            {CLASSES.map(c => (
              <button key={c} className={`ob-chip ${form.classe===c?"active":""}`} onClick={() => set("classe",c)}>{c}</button>
            ))}
          </div>
          <p style={{fontSize:13,color:"var(--gray)",marginBottom:12,marginTop:16}}>Filière</p>
          <div className="ob-chips">
            {FILIERES.map(f => (
              <button key={f} className={`ob-chip ${form.filiere===f?"active":""}`} onClick={() => set("filiere",f)}>{f}</button>
            ))}
          </div>
          <div style={{flex:1}} />
          <button className="ob-next" disabled={!form.classe} onClick={() => setStep(4)}>SUIVANT</button>
        </>}

        {step === 4 && <>
          <h2>Ta fac visée</h2>
          <input className="ob-input" inputMode="numeric" pattern="[0-9]*" placeholder="Département (ex: 75, 69, 13…)" value={form.departement} onChange={e => set("departement", e.target.value.replace(/\D/g,"").slice(0,3))} autoFocus />
          <select className="ob-input" value={form.fac} onChange={e => set("fac",e.target.value)}>
            <option value="">Choisis ta fac…</option>
            {FACS.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
          <div style={{flex:1}} />
          <button className="ob-next" onClick={() => setStep(5)}>SUIVANT</button>
        </>}

        {step === 5 && (() => {
          const p = form.pseudo.trim();
          const hasMinLen = p.length >= 5;
          const hasDigitOrSpecial = /[\d_\-.]/.test(p);
          const pseudoOk = hasMinLen && hasDigitOrSpecial;
          return <>
            <h2>Choisis un pseudo</h2>
            <p style={{fontSize:13,color:"var(--gray)",marginBottom:4}}>Visible par les autres étudiants dans le classement</p>
            <p style={{fontSize:12,color:"var(--gold)",marginBottom:16,lineHeight:1.4}}>5 caractères min. avec au moins un chiffre ou un caractère spécial (_, -, .)</p>
            <input
              className={`ob-input ${touched.pseudo && !pseudoOk ? "ob-input-error" : ""}`}
              placeholder="Ex: emma_med26"
              value={form.pseudo}
              onChange={e => set("pseudo", e.target.value.replace(/\s/g,""))}
              onBlur={() => touch("pseudo")}
              autoFocus
              maxLength={20}
            />
            {touched.pseudo && !hasMinLen && <p className="ob-field-error">5 caractères minimum</p>}
            {touched.pseudo && hasMinLen && !hasDigitOrSpecial && <p className="ob-field-error">Ajoute au moins un chiffre ou un caractère spécial (_, -, .)</p>}
            <div style={{flex:1}} />
            <button className="ob-next" disabled={!pseudoOk} onClick={() => setStep(TOTAL_STEPS)}>TERMINER</button>
          </>;
        })()}
      </div>
    </div>
  );
}

function BottomNav({ active, onChange }) {
  const tabs = [
    { id:"home",       icon:"🏠", label:"Home" },
    { id:"cours",      icon:"📖", label:"Réviser" },
    { id:"methode",    icon:"🎯", label:"Méthode" },
    { id:"classement", icon:"🏆", label:"Classement" },
    { id:"aventure",   icon:"🗺️", label:"Aventure" },
  ];
  return (
    <nav className="bottom-nav">
      {tabs.map(t => (
        <button key={t.id} className={`nav-btn ${active===t.id?"active":""}`} onClick={() => onChange(t.id)}>
          <span className="nav-icon">{t.icon}</span>
          <span className="nav-label">{t.label}</span>
        </button>
      ))}
    </nav>
  );
}

function AuthScreen({ onAuth }) {
  const { signIn, signUp, ready } = useAuth();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");

  if (!ready) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setConfirmMsg("");
    setLoading(true);
    if (mode === "signup") {
      if (!pseudo.trim()) { setError("Choisis un pseudo"); setLoading(false); return; }
      if (password.length < 6) { setError("Mot de passe : 6 caractères min."); setLoading(false); return; }
      const { data, error: err } = await signUp(email, password, pseudo);
      if (err) {
        const msg = err.message === "Email not confirmed" ? "Email ou mot de passe incorrect" : err.message;
        setError(msg); setLoading(false); return;
      }
      if (data?.user?.identities?.length === 0) {
        setError("Cet email est déjà utilisé. Connecte-toi.");
        setMode("login");
      } else {
        onAuth();
        return;
      }
    } else {
      const { error: err } = await signIn(email, password);
      if (err) {
        const msg = (err.message === "Invalid login credentials" || err.message === "Email not confirmed")
          ? "Email ou mot de passe incorrect"
          : err.message;
        setError(msg); setLoading(false); return;
      }
      onAuth();
    }
    setLoading(false);
  }

  return (
    <div className="ob-wrapper">
      <div className="ob-welcome">
        <div className="ob-logo-wrap">
          <img src="/logo-hermione.webp" alt="Hermione" className="ob-logo-img" />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 4 }}>
          {mode === "login" ? "Connexion" : "Créer un compte"}
        </h2>
        <p style={{ fontSize: 13, color: "var(--gray)", marginBottom: 20 }}>
          {mode === "login" ? "Retrouve ta progression sur tous tes appareils" : "Gratuit · Ta progression sauvegardée en ligne"}
        </p>

        {confirmMsg && <p style={{ fontSize: 12, color: "var(--green)", marginBottom: 12 }}>{confirmMsg}</p>}

        <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {mode === "signup" && (
            <input className="ob-input" placeholder="Pseudo (visible dans le classement)" value={pseudo} onChange={e => setPseudo(e.target.value)} />
          )}
          <input className="ob-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
          <input className="ob-input" type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} autoComplete={mode === "signup" ? "new-password" : "current-password"} />
          {error && <p style={{ fontSize: 12, color: "var(--red)" }}>{error}</p>}
          <button className="ob-start-btn" type="submit" disabled={loading || !email || !password}>
            {loading ? "..." : mode === "login" ? "SE CONNECTER →" : "CRÉER MON COMPTE →"}
          </button>
        </form>

        <button
          style={{ marginTop: 16, background: "none", border: "none", color: "var(--gold-light)", fontSize: 13, cursor: "pointer", textDecoration: "underline" }}
          onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); setConfirmMsg(""); }}
        >
          {mode === "login" ? "Pas encore de compte ? Inscris-toi" : "Déjà un compte ? Connecte-toi"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [storage, updateStorage] = useStorage();
  const auth = useAuth();
  const cloud = useCloudStorage(auth.user?.id);
  const [tab, setTab] = useState("home");
  const [matiere, setMatiere] = useState(null);
  const [cours, setCours] = useState(null);
  const [view, setView] = useState(null);
  const [cloudLoaded, setCloudLoaded] = useState(false);
  const isAdminRoute =
    typeof window !== "undefined" && window.location.pathname.startsWith("/admin");

  const syncUpdate = useCallback((updater) => {
    updateStorage(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      if (auth.user?.id) cloud.syncToCloud(next);
      return next;
    });
  }, [updateStorage, auth.user?.id, cloud]);

  useEffect(() => {
    if (auth.user?.id && !cloudLoaded) {
      cloud.loadFromCloud().then(cloudData => {
        if (cloudData && cloudData.xp > (storage.xp || 0)) {
          updateStorage(prev => ({ ...prev, ...cloudData }));
        }
        setCloudLoaded(true);
      });
    }
  }, [auth.user?.id, cloudLoaded, cloud, storage.xp, updateStorage]);

  if (isAdminRoute) {
    return <BackofficePage />;
  }

  if (auth.loading) {
    return <div className="ob-wrapper"><div className="ob-welcome"><p style={{color:"var(--gray)"}}>Chargement...</p></div></div>;
  }

  if (auth.ready && !auth.user) {
    return <AuthScreen onAuth={() => {}} />;
  }

  if (!storage.user.onboarded) {
    return <Onboarding onDone={(form) => {
      syncUpdate(prev => ({
        ...prev,
        user: {
          prenom: form.prenom, nom: form.nom, email: form.email, tel: form.tel,
          role: form.role, classe: form.classe, filiere: form.filiere,
          departement: form.departement, fac: form.fac, onboarded: true,
        },
        pseudo: form.pseudo,
        xp: prev.xp || 0, streak: prev.streak || 0,
        last_active: new Date().toISOString().split("T")[0],
        show_tutorial: true,
      }));
    }} />;
  }

  function addXP(amount) {
    syncUpdate(prev => {
      const today = new Date().toISOString().split("T")[0];
      const wasYesterday = prev.last_active && (() => {
        const d = new Date(prev.last_active);
        d.setDate(d.getDate() + 1);
        return d.toISOString().split("T")[0] === today;
      })();
      const newStreak = prev.last_active === today ? (prev.streak || 0) : wasYesterday ? (prev.streak || 0) + 1 : 1;
      const streakBonus = prev.last_active !== today && newStreak > 1 ? XP_REWARDS.STREAK_BONUS : 0;
      return { ...prev, xp: (prev.xp || 0) + amount + streakBonus, streak: newStreak, last_active: today };
    });
  }

  function resetTab(newTab) { setTab(newTab); setMatiere(null); setCours(null); setView(null); }

  function saveFicheLue(coursId) {
    const alreadyRead = storage.fiches_lues?.[coursId]?.lue;
    syncUpdate(prev => ({
      ...prev,
      fiches_lues: { ...prev.fiches_lues, [coursId]: { lue: true, date: new Date().toISOString().split("T")[0] } }
    }));
    if (!alreadyRead) addXP(XP_REWARDS.FICHE_LUE);
  }

  function saveQCMScore(coursId, score, total, duree) {
    syncUpdate(prev => ({
      ...prev,
      qcm_scores: {
        ...prev.qcm_scores,
        [coursId]: [...(prev.qcm_scores?.[coursId] || []), { date: new Date().toISOString().split("T")[0], score, total, duree_sec: duree }]
      }
    }));
    if (score === total) addXP(XP_REWARDS.QCM_PERFECT);
    else addXP(XP_REWARDS.QCM_COMPLETE);
  }

  function saveFCProgress(coursId, mastered, total, cardRatings) {
    syncUpdate(prev => {
      const existing = prev.flashcards_progress?.[coursId] || {};
      const existingCards = existing.cards || {};
      const mergedCards = { ...existingCards, ...cardRatings };
      return {
        ...prev,
        flashcards_progress: {
          ...prev.flashcards_progress,
          [coursId]: {
            ...existing,
            mastered_count: mastered,
            sessions: (existing.sessions || 0) + 1,
            last_session: new Date().toISOString().split("T")[0],
            cards: mergedCards,
          }
        }
      };
    });
    addXP(XP_REWARDS.FLASHCARD_SESSION);
  }

  // Vues plein écran legacy (flashcard session depuis onglet flashcards)
  if (view === "fc-session" && cours && tab === "flashcards") return (
    <div className="app-shell"><div className="scroll-area">
      <FlashcardSession cours={cours} storage={storage} onBack={() => setView(null)} onSaveProgress={saveFCProgress} />
    </div></div>
  );

  const wrap = content => (
    <div className="app-shell">
      <div className="scroll-area">{content}</div>
      <BottomNav active={tab} onChange={resetTab} />
    </div>
  );

  // Onglet Cours — page unifiée Fiche + QCM + Flashcards
  if (tab === "cours") {
    if (cours) return wrap(
      <ChapitreDetailPage cours={cours} storage={storage}
        onBack={() => setCours(null)}
        onSaveProgress={() => saveFicheLue(cours.id)}
        onSaveQCMScore={saveQCMScore}
        onSaveFCProgress={saveFCProgress}
      />
    );
    if (matiere) return wrap(
      <MatiereCoursPage matiere={matiere} storage={storage} onSelectCours={setCours} onBack={() => setMatiere(null)} />
    );
    return wrap(<CoursListPage onSelectMatiere={setMatiere} />);
  }

  // Onglet Flashcards (accessible via sous-nav dans Réviser)
  if (tab === "flashcards") {
    if (matiere && cours) {
      setView("fc-session");
    }
    if (matiere) return wrap(
      <MatiereFlashcardsPage matiere={matiere} storage={storage}
        onSelectCours={c => { setCours(c); setView("fc-session"); }}
        onBack={() => setMatiere(null)} />
    );
    return wrap(<FlashcardsListPage storage={storage} onSelectMatiere={setMatiere} onGoFiches={() => resetTab("cours")} />);
  }

  // Onglet Méthode
  if (tab === "methode") {
    return wrap(<MethodePage />);
  }

  // Page Profil
  if (tab === "profil") {
    return wrap(
      <ProfilPage
        storage={storage}
        onBack={() => resetTab("home")}
        onUpdate={(updates) => syncUpdate(prev => ({
          ...prev,
          user: { ...prev.user, ...updates.user },
          ...(updates.pseudo !== undefined ? { pseudo: updates.pseudo } : {}),
        }))}
        onSignOut={auth.ready ? auth.signOut : null}
      />
    );
  }

  // Onglet Classement
  if (tab === "classement") {
    return wrap(<ClassementPage storage={storage} onAddXP={addXP} />);
  }
  // Onglet Aventure
  if (tab === "aventure") {
    return wrap(
      <AventurePage
        storage={storage}
        addXP={addXP}
        saveFicheLue={saveFicheLue}
        saveQCMScore={saveQCMScore}
        saveFCProgress={saveFCProgress}
        XP_REWARDS={XP_REWARDS}
      />
    );
  }

  const pages = {
    home: <HomePage user={storage.user} storage={storage} onGoTo={resetTab} onSignOut={auth.ready ? auth.signOut : null}
      onDismissTutorial={() => syncUpdate(prev => ({ ...prev, show_tutorial: false }))} />,
  };
  return wrap(pages[tab] || pages.home);
}
