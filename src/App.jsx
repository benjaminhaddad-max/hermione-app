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
import FicheCoursViewer from "./components/cours/FicheCoursViewer";
import QCMChapitreSession from "./components/qcm/QCMChapitreSession";
import FlashcardsListPage from "./components/flashcards/FlashcardsListPage";
import MatiereFlashcardsPage from "./components/flashcards/MatiereFlashcardsPage";
import FlashcardSession from "./components/flashcards/FlashcardSession";
import ClassementPage from "./components/classement/ClassementPage";
import AventurePage from "./components/aventure/AventurePage";
import BackofficePage from "./components/admin/BackofficePage";

function Onboarding({ onDone }) {
  const [step, setStep] = useState(0);
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");

  if (step === 0) return (
    <div className="ob-wrapper">
      <div className="ob-welcome">
        <div className="ob-logo-wrap">
          <img src="/logo-hermione.webp" alt="Hermione" className="ob-logo-img" />
          <div className="ob-logo-sub">La méthode pour réussir en PASS/LAS</div>
        </div>
        <div className="ob-tagline">Ton coach digital<br />Hermione.</div>
        <div className="ob-benefits">
          {[["📖","Fiches de cours visuelles style manuscrit"],["✅","QCM avec corrigés détaillés"],["🃏","Flashcards par matière"],["🏆","Classement & XP pour te motiver"]].map(([icon,txt],i)=>(
            <div key={i} className="ob-benefit"><span className="ob-benefit-icon">{icon}</span><span>{txt}</span></div>
          ))}
        </div>
        <button className="ob-start-btn" onClick={() => setStep(1)}>COMMENCER GRATUITEMENT →</button>
        <p className="ob-free-label">100% gratuit · Pour toujours · Aucune carte bancaire</p>
      </div>
    </div>
  );

  if (step === 3) return (
    <div className="ob-wrapper">
      <div className="ob-welcome ob-final">
        <div style={{fontSize:64,marginBottom:16}}>🎉</div>
        <div style={{fontFamily:"var(--font-display)",fontSize:22,fontWeight:900,marginBottom:8}}>Bienvenue {prenom} !</div>
        <p style={{fontSize:14,color:"var(--gray)",marginBottom:32}}>Ton espace Hermione est prêt.<br/>Gagne des XP et grimpe dans le classement !</p>
        <button className="ob-start-btn" onClick={() => onDone({ prenom, pseudo })}>
          ACCÉDER À MON ESPACE →
        </button>
      </div>
    </div>
  );

  const titles = ["", "Ton prénom", "Ton pseudo"];
  const progress = step === 1 ? "33%" : step === 2 ? "66%" : "100%";

  return (
    <div className="ob-wrapper">
      <button className="ob-back" onClick={() => step > 1 && setStep(step - 1)}>{step > 1 ? "←" : ""}</button>
      <div className="ob-title-bar">{titles[step] || ""}</div>
      <div className="ob-screen">
        <div className="ob-progress"><div className="ob-bar" style={{ width: progress }} /></div>

        {step === 1 && <>
          <h2>Comment tu t'appelles ?</h2>
          <input className="ob-input" placeholder="Ton prénom" value={prenom} onChange={e => setPrenom(e.target.value)} autoFocus />
          <div style={{flex:1}} />
          <button className="ob-next" disabled={!prenom.trim()} onClick={() => setStep(2)}>SUIVANT</button>
        </>}

        {step === 2 && <>
          <h2>Choisis un pseudo pour le classement</h2>
          <p style={{fontSize:13,color:"var(--gray)",marginBottom:16}}>Visible par les autres étudiants</p>
          <input className="ob-input" placeholder="Ex: emma_med26" value={pseudo} onChange={e => setPseudo(e.target.value)} autoFocus />
          <div style={{flex:1}} />
          <button className="ob-next" disabled={!pseudo.trim()} onClick={() => setStep(3)}>SUIVANT</button>
        </>}
      </div>
    </div>
  );
}

function BottomNav({ active, onChange }) {
  const tabs = [
    { id:"home",       icon:"🏠", label:"Home" },
    { id:"cours",      icon:"📖", label:"Réviser" },
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
      if (err) { setError(err.message); setLoading(false); return; }
      if (data?.user?.identities?.length === 0) {
        setError("Cet email est déjà utilisé. Connecte-toi.");
        setMode("login");
      } else {
        setConfirmMsg("Compte créé ! Vérifie tes emails pour confirmer, ou connecte-toi directement.");
        setMode("login");
      }
    } else {
      const { error: err } = await signIn(email, password);
      if (err) { setError(err.message === "Invalid login credentials" ? "Email ou mot de passe incorrect" : err.message); setLoading(false); return; }
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
    return (
      <div className="app-shell">
        <div className="scroll-area">
          <BackofficePage />
        </div>
      </div>
    );
  }

  if (auth.loading) {
    return <div className="ob-wrapper"><div className="ob-welcome"><p style={{color:"var(--gray)"}}>Chargement...</p></div></div>;
  }

  if (auth.ready && !auth.user) {
    return <AuthScreen onAuth={() => {}} />;
  }

  if (!storage.user.onboarded) {
    return <Onboarding onDone={({ prenom, pseudo }) => {
      syncUpdate(prev => ({ ...prev, user: { prenom, classe: "", fac: "", onboarded: true }, pseudo, xp: 0, streak: 0, last_active: new Date().toISOString().split("T")[0] }));
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

  // Vues plein écran
  if (view === "fiche" && cours) return (
    <FicheCoursViewer cours={cours} onBack={() => setView(null)} onSaveProgress={() => saveFicheLue(cours.id)} />
  );
  if (view === "qcm" && cours) return (
    <div className="app-shell"><div className="scroll-area">
      <QCMChapitreSession cours={cours} onBack={() => setView(null)} onSaveScore={saveQCMScore} />
    </div></div>
  );
  if (view === "fc-session" && cours) return (
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

  // Onglet Cours (Fiches)
  if (tab === "cours") {
    if (cours) return wrap(
      <ChapitreDetailPage cours={cours} storage={storage}
        onFiche={() => setView("fiche")} onQCM={() => setView("qcm")} onFlashcards={() => setView("fc-session")}
        onBack={() => setCours(null)} />
    );
    if (matiere) return wrap(
      <MatiereCoursPage matiere={matiere} storage={storage} onSelectCours={setCours} onBack={() => setMatiere(null)} />
    );
    return wrap(<CoursListPage onSelectMatiere={setMatiere} onGoFlashcards={() => resetTab("flashcards")} />);
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
    home: <HomePage user={storage.user} storage={storage} onGoTo={resetTab} onSignOut={auth.ready ? auth.signOut : null} />,
  };
  return wrap(pages[tab] || pages.home);
}
