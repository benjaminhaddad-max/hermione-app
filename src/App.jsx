import { useState } from "react";
import "./App.css";
import useStorage from "./hooks/useStorage";

import HomePage from "./components/home/HomePage";
import CoursListPage from "./components/cours/CoursListPage";
import MatiereCoursPage from "./components/cours/MatiereCoursPage";
import ChapitreDetailPage from "./components/cours/ChapitreDetailPage";
import FicheCoursViewer from "./components/cours/FicheCoursViewer";
import QCMChapitreSession from "./components/qcm/QCMChapitreSession";
import FlashcardsListPage from "./components/flashcards/FlashcardsListPage";
import MatiereFlashcardsPage from "./components/flashcards/MatiereFlashcardsPage";
import FlashcardSession from "./components/flashcards/FlashcardSession";
import CoachingPage from "./components/coaching/CoachingPage";

function Onboarding({ onDone }) {
  const [step, setStep] = useState(0);
  const [prenom, setPrenom] = useState("");

  if (step === 0) return (
    <div className="ob-wrapper">
      <div className="ob-welcome">
        <div className="ob-logo-wrap">
          <img src="/logo-hermione.webp" alt="Hermione" className="ob-logo-img" />
          <div className="ob-logo-sub">La méthode pour réussir en PASS/LAS</div>
        </div>
        <div className="ob-tagline">Ton grand frère<br />de médecine.</div>
        <div className="ob-benefits">
          {[["📖","Fiches de cours visuelles style manuscrit"],["✅","QCM avec corrigés détaillés"],["🃏","Flashcards par matière"],["🎓","Coaching gratuit avec un étudiant en médecine"]].map(([icon,txt],i)=>(
            <div key={i} className="ob-benefit"><span className="ob-benefit-icon">{icon}</span><span>{txt}</span></div>
          ))}
        </div>
        <button className="ob-start-btn" onClick={() => setStep(1)}>COMMENCER GRATUITEMENT →</button>
        <p className="ob-free-label">100% gratuit · Pour toujours · Aucune carte bancaire</p>
      </div>
    </div>
  );

  if (step === 2) return (
    <div className="ob-wrapper">
      <div className="ob-welcome ob-final">
        <div style={{fontSize:64,marginBottom:16}}>🎉</div>
        <div style={{fontFamily:"var(--font-display)",fontSize:22,fontWeight:900,marginBottom:8}}>Bienvenue {prenom} !</div>
        <p style={{fontSize:14,color:"var(--gray)",marginBottom:32}}>Ton espace Hermione est prêt.</p>
        <button className="ob-start-btn" onClick={() => onDone({ prenom })}>
          ACCÉDER À MON ESPACE →
        </button>
      </div>
    </div>
  );

  return (
    <div className="ob-wrapper">
      <button className="ob-back" onClick={() => step > 1 && setStep(step - 1)}>{step > 1 ? "←" : ""}</button>
      <div className="ob-title-bar">{["","Ton prénom"][step]}</div>
      <div className="ob-screen">
        <div className="ob-progress"><div className="ob-bar" style={{ width: step === 1 ? "50%" : "100%" }} /></div>

        {step === 1 && <>
          <h2>Comment tu t'appelles ?</h2>
          <input className="ob-input" placeholder="Ton prénom" value={prenom} onChange={e => setPrenom(e.target.value)} autoFocus />
          <div style={{flex:1}} />
          <button className="ob-next" disabled={!prenom.trim()} onClick={() => setStep(2)}>SUIVANT</button>
        </>}
      </div>
    </div>
  );
}

function BottomNav({ active, onChange }) {
  const tabs = [
    { id:"home",       icon:"🏠", label:"Accueil" },
    { id:"cours",      icon:"📖", label:"Fiches" },
    { id:"flashcards", icon:"🃏", label:"Flashcards" },
    { id:"coaching",   icon:"🎓", label:"Coaching" },
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

export default function App() {
  const [storage, updateStorage] = useStorage();
  const [tab, setTab] = useState("home");
  const [matiere, setMatiere] = useState(null);
  const [cours, setCours] = useState(null);
  const [view, setView] = useState(null); // "fiche" | "qcm" | "fc-session"

  if (!storage.user.onboarded) {
    return <Onboarding onDone={({ prenom }) => {
      updateStorage(prev => ({ ...prev, user: { prenom, classe: "", fac: "", onboarded: true } }));
    }} />;
  }

  function resetTab(newTab) { setTab(newTab); setMatiere(null); setCours(null); setView(null); }

  function saveFicheLue(coursId) {
    updateStorage(prev => ({
      ...prev,
      fiches_lues: { ...prev.fiches_lues, [coursId]: { lue: true, date: new Date().toISOString().split("T")[0] } }
    }));
  }

  function saveQCMScore(coursId, score, total, duree) {
    updateStorage(prev => ({
      ...prev,
      qcm_scores: {
        ...prev.qcm_scores,
        [coursId]: [...(prev.qcm_scores?.[coursId] || []), { date: new Date().toISOString().split("T")[0], score, total, duree_sec: duree }]
      }
    }));
  }

  function saveFCProgress(coursId, mastered) {
    updateStorage(prev => ({
      ...prev,
      flashcards_progress: {
        ...prev.flashcards_progress,
        [coursId]: {
          ...(prev.flashcards_progress?.[coursId] || {}),
          mastered_count: mastered,
          sessions: (prev.flashcards_progress?.[coursId]?.sessions || 0) + 1,
          last_session: new Date().toISOString().split("T")[0]
        }
      }
    }));
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
      <FlashcardSession cours={cours} onBack={() => setView(null)} onSaveProgress={saveFCProgress} />
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
    return wrap(<CoursListPage onSelectMatiere={setMatiere} />);
  }

  // Onglet Flashcards
  if (tab === "flashcards") {
    if (matiere && cours) {
      setView("fc-session");
    }
    if (matiere) return wrap(
      <MatiereFlashcardsPage matiere={matiere} storage={storage}
        onSelectCours={c => { setCours(c); setView("fc-session"); }}
        onBack={() => setMatiere(null)} />
    );
    return wrap(<FlashcardsListPage storage={storage} onSelectMatiere={setMatiere} />);
  }

  const pages = {
    home:     <HomePage user={storage.user} storage={storage} onGoTo={resetTab} />,
    coaching: <CoachingPage />,
  };
  return wrap(pages[tab] || pages.home);
}
