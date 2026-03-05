import { useState } from "react";
import { MATIERES, QUIZ_RESSOURCES, TEMOIGNAGES } from "./data/content";
import "./App.css";

function Onboarding({ onDone }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ avenir:"", classe:"", fac:"", prenom:"", email:"", bonsplans:null });
  const [facSearch, setFacSearch] = useState("");
  const [emailError, setEmailError] = useState("");
  const facs = ["A l'étranger","Amiens","Angers","Antilles","Besançon","Bordeaux","Brest","Caen","Clermont-Ferrand","Dijon","Grenoble","Lille","Lyon Est","Lyon Sud","Marseille","Montpellier","Nancy","Nantes","Nice","Paris Cité","Paris-Saclay","Poitiers","Reims","Rennes","Rouen","Sorbonne","Strasbourg","Toulouse","Tours"];
  const filteredFacs = facs.filter(f => f.toLowerCase().includes(facSearch.toLowerCase()));
  const titles = ["","Ton avenir","Ta classe","Ta fac","Ton prénom","Ton email","Bons plans",""];
  const pcts = ["0%","14%","28%","43%","57%","72%","86%","100%"];

  function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  // ÉCRAN INTRO (step 0)
  if (step === 0) return (
    <div className="ob-wrapper">
      <div className="ob-welcome">
        <div className="ob-logo-wrap">
          <img src="/logo-hermione.webp" alt="Hermione" className="ob-logo-img" />
          <div className="ob-logo-sub">La méthode pour réussir en PASS/LAS</div>
        </div>
        <div className="ob-tagline">Les méthodes des majors,<br/>dans ta poche.</div>
        <div className="ob-benefits">
          {[
            ["🏆","Les fiches des majors de promotion"],
            ["🃏","+1 200 flashcards PASS/LAS certifiées"],
            ["📈","+61% de réussite constatée"],
            ["🎯","La méthode de révision des meilleurs"],
          ].map(([icon,txt],i) => (
            <div key={i} className="ob-benefit"><span className="ob-benefit-icon">{icon}</span><span>{txt}</span></div>
          ))}
        </div>
        <div className="ob-temoignage">
          <p className="ob-temo-text">"J'ai utilisé Hermione dès la Terminale. Major de promo en PASS à Paris."</p>
          <p className="ob-temo-author">— Nicolas, Major PASS UPC 🥇</p>
        </div>
        <button className="ob-start-btn" onClick={() => setStep(1)}>COMMENCER GRATUITEMENT →</button>
        <p className="ob-free-label">100% gratuit · Aucune carte bancaire</p>
      </div>
    </div>
  );

  // ÉCRAN FINAL (step 7)
  if (step === 7) return (
    <div className="ob-wrapper">
      <div className="ob-welcome ob-final">
        <div className="ob-final-emoji">🎉</div>
        <div className="ob-logo-name" style={{marginBottom:4}}>Bienvenue {data.prenom} !</div>
        <p className="ob-tagline" style={{fontSize:16,marginBottom:24}}>Ton compte Hermione est prêt.</p>
        <div className="ob-benefits">
          {[
            ["✅","Accès à toutes les flashcards"],
            ["✅","Cours des majors débloqués"],
            ["✅","Quiz & ressources disponibles"],
            ["✅","Ton classement activé"],
          ].map(([icon,txt],i) => (
            <div key={i} className="ob-benefit"><span className="ob-benefit-icon">{icon}</span><span>{txt}</span></div>
          ))}
        </div>
        <div className="ob-temoignage">
          <p className="ob-temo-text">"La clé c'est la régularité. Hermione m'a aidée à rester constante toute l'année."</p>
          <p className="ob-temo-author">— Elise, 100e sur 1400 en PASS 🏆</p>
        </div>
        <button className="ob-start-btn" onClick={() => onDone(data)}>ACCÉDER À MON ESPACE →</button>
      </div>
    </div>
  );

  // QUESTIONS (steps 1-6)
  const screens = [
    null, // step 0 géré au-dessus
    <div className="ob-screen" key="s1">
      <div className="ob-progress"><div className="ob-bar" style={{width:pcts[step]}}></div></div>
      <h2>Tu veux faire quoi ?</h2>
      {["PASS","LAS","LSpS","J'hésite entre PASS et LAS","Autre chose, je suis juste curieux"].map(opt => (
        <button key={opt} className={`ob-option ${data.avenir===opt?"selected":""}`} onClick={() => setData({...data,avenir:opt})}>
          <span className="ob-radio">{data.avenir===opt?"●":"○"}</span> {opt}
        </button>
      ))}
      <button className="ob-next" disabled={!data.avenir} onClick={() => setStep(2)}>SUIVANT</button>
    </div>,
    <div className="ob-screen" key="s2">
      <div className="ob-progress"><div className="ob-bar" style={{width:pcts[step]}}></div></div>
      <h2>Tu es en quelle classe ?</h2>
      {["Collège","Seconde","Première","Terminale","PASS / LAS / LSpS","Autres"].map(opt => (
        <button key={opt} className={`ob-option ${data.classe===opt?"selected":""}`} onClick={() => setData({...data,classe:opt})}>
          <span className="ob-radio">{data.classe===opt?"●":"○"}</span> {opt}
        </button>
      ))}
      <button className="ob-next" disabled={!data.classe} onClick={() => setStep(3)}>SUIVANT</button>
    </div>,
    <div className="ob-screen" key="s3">
      <div className="ob-progress"><div className="ob-bar" style={{width:pcts[step]}}></div></div>
      <h2>Choisis la faculté qui t'intéresse</h2>
      <div className="ob-search-wrap"><span>🔍</span><input className="ob-search" placeholder="Recherche une faculté" value={facSearch} onChange={e => setFacSearch(e.target.value)}/></div>
      <div className="ob-fac-list">
        {filteredFacs.map(f => (
          <button key={f} className={`ob-option ${data.fac===f?"selected":""}`} onClick={() => setData({...data,fac:f})}>
            <span className="ob-radio">{data.fac===f?"●":"○"}</span> {f}
          </button>
        ))}
      </div>
      <button className="ob-next" disabled={!data.fac} onClick={() => setStep(4)}>SUIVANT</button>
    </div>,
    <div className="ob-screen" key="s4">
      <div className="ob-progress"><div className="ob-bar" style={{width:pcts[step]}}></div></div>
      <h2>Quel est ton prénom ?</h2>
      <input className="ob-input" placeholder="Prénom" value={data.prenom} onChange={e => setData({...data,prenom:e.target.value})}/>
      <div style={{flex:1}}></div>
      <button className="ob-next" disabled={!data.prenom.trim()} onClick={() => setStep(5)}>SUIVANT</button>
    </div>,
    <div className="ob-screen" key="s5">
      <div className="ob-progress"><div className="ob-bar" style={{width:pcts[step]}}></div></div>
      <h2>Ton adresse email</h2>
      <p style={{fontSize:13,color:"var(--gray)",marginBottom:20,lineHeight:1.5}}>Pour recevoir tes résultats et accéder à ton espace Hermione</p>
      <input className="ob-input" placeholder="exemple@email.com" type="email" value={data.email}
        onChange={e => { setData({...data,email:e.target.value}); setEmailError(""); }}/>
      {emailError && <p style={{color:"#e05a2b",fontSize:13,marginTop:8}}>{emailError}</p>}
      <div style={{flex:1}}></div>
      <button className="ob-next" disabled={!data.email.trim()} onClick={() => {
        if (!validateEmail(data.email)) { setEmailError("Entre une adresse email valide"); return; }
        setStep(6);
      }}>SUIVANT</button>
    </div>,
    <div className="ob-screen" key="s6">
      <div className="ob-progress"><div className="ob-bar" style={{width:pcts[step]}}></div></div>
      <h2>Bons plans</h2>
      <p className="ob-desc">Des écoles et entreprises (jobs, permis, bons plans...) sont intéressés par ton profil. Acceptes-tu d'être mis en relation ?</p>
      <div className="ob-clap">🤝</div>
      <button className={`ob-option ${data.bonsplans===true?"selected":""}`} onClick={() => setData({...data,bonsplans:true})}>Oui ✅</button>
      <button className={`ob-option ${data.bonsplans===false?"selected":""}`} onClick={() => setData({...data,bonsplans:false})}>Non</button>
      <p className="ob-consent">En cochant oui, j'accepte que mes données soient collectées pour être mis en relation avec des partenaires d'Hermione.</p>
      <button className="ob-next" disabled={data.bonsplans===null} onClick={() => setStep(7)}>SUIVANT</button>
    </div>,
  ];

  return (
    <div className="ob-wrapper">
      <button className="ob-back" onClick={() => step>1 && setStep(step-1)}>{step>1?"←":""}</button>
      <div className="ob-title-bar">{titles[step]}</div>
      {screens[step]}
    </div>
  );
}

function BottomNav({ active, onChange }) {
  return (
    <nav className="bottom-nav">
      {[{id:"home",icon:"⌂",label:"Home"},{id:"flashcards",icon:"🃏",label:"Flashcards"},{id:"classement",icon:"🏆",label:"Classement"},{id:"profil",icon:"👤",label:"Profil"}].map(t => (
        <button key={t.id} className={`nav-btn ${active===t.id?"active":""}`} onClick={() => onChange(t.id)}>
          <span className="nav-icon">{t.icon}</span>
          <span className="nav-label">{t.label}</span>
        </button>
      ))}
    </nav>
  );
}

function Home({ user, streak, fcMaîtrisées, classement, setSection }) {
  return (
    <div className="page">
      <div className="page-header">
        <div><h1 className="page-title">Bonjour {user.prenom} 👋</h1><p className="page-sub">Les méthodes des majors dans ta poche.</p></div>
        <button className="search-btn">🔍</button>
      </div>
      <div className="premium-banner" onClick={() => window.open("https://hermione.co","_blank")}>
        <div><span className="premium-badge">PREMIUM</span><p className="premium-text">✅ Coaching personnalisé + accès complet</p></div>
        <button className="premium-arrow">→</button>
      </div>
      <div className="stats-row">
        <div className="stat-card"><div className="stat-icon">🔥</div><div className="stat-val">{streak}</div><div className="stat-lbl">jours d'affilés</div></div>
        <div className="stat-card"><div className="stat-icon">🃏</div><div className="stat-val">{fcMaîtrisées}</div><div className="stat-lbl">maîtrisées</div></div>
        <div className="stat-card"><div className="stat-icon">🏆</div><div className="stat-val">{classement.toLocaleString('fr')}</div><div className="stat-lbl">classement</div></div>
      </div>
      <h2 className="section-title">Parcourir les contenus</h2>
      <div className="content-grid">
        <button className="content-tile tile-blue" onClick={() => setSection("motivation")}>💎 De la motivation en barre</button>
        <button className="content-tile tile-gold" onClick={() => setSection("avance")}>🏆 Prends de l'avance PASS/LAS</button>
        <button className="content-tile tile-blue" onClick={() => setSection("quiz")}>🤔 QUIZ & ressources</button>
        <button className="content-tile tile-blue" onClick={() => setSection("temoignages")}>👩‍⚕️ Témoignages de ceux qui ont réussi</button>
      </div>
    </div>
  );
}

function SectionAvance({ onSelectMatiere, onBack }) {
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>🏆 Prends de l'avance PASS/LAS</h2></div>
      <div className="matiere-grid">
        {MATIERES.map(m => (
          <button key={m.id} className="matiere-tile" style={{background:m.color}} onClick={() => onSelectMatiere(m)}>
            <span className="matiere-emoji">{m.emoji}</span>
            <span className="matiere-nom">{m.nom}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionQuiz({ onSelectQuiz, onBack }) {
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>🤔 QUIZ & ressources</h2></div>
      <div className="list-items">
        {QUIZ_RESSOURCES.map(q => (
          <button key={q.id} className="list-item" onClick={() => onSelectQuiz(q)}>
            <span>{q.emoji} {q.titre}</span>
            {q.nouveau && <span className="badge-new">New</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionTemoignages({ onBack }) {
  const [sel, setSel] = useState(null);
  if (sel) return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={() => setSel(null)}>←</button><h2>{sel.emoji} {sel.nom}</h2></div>
      <div className="temoignage-card"><div className="temo-result">{sel.emoji} {sel.resultat}</div><p className="temo-text">"{sel.texte}"</p></div>
    </div>
  );
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>👩‍⚕️ Témoignages</h2></div>
      <div className="list-items">
        {TEMOIGNAGES.map(t => (
          <button key={t.id} className="list-item" onClick={() => setSel(t)}>
            <span>{t.emoji} {t.nom} : {t.resultat}</span>
            {t.nouveau && <span className="badge-new">New</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionMotivation({ onBack }) {
  const tips = [
    {emoji:"🧠",titre:"La règle des 2 minutes",texte:"Si une tâche prend moins de 2 minutes, fais-la immédiatement. Ça évite la procrastination."},
    {emoji:"📅",titre:"Le système des J",texte:"Révise J+1, J+3, J+7, J+21. La répétition espacée est la technique n°1 des majors de PASS."},
    {emoji:"😴",titre:"Le sommeil d'abord",texte:"Dormir 7-8h fixe les apprentissages. Travailler fatigué est 3x moins efficace."},
    {emoji:"🎯",titre:"Focus mono-tâche",texte:"Le multitâche réduit l'efficacité de 40%. Une tâche à la fois, 45 min, puis pause."},
    {emoji:"💪",titre:"L'identité du médecin",texte:"Ne dis pas 'j'essaie de réussir PASS'. Dis 'je travaille comme un futur médecin'."},
  ];
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>💎 De la motivation en barre</h2></div>
      {tips.map((t,i) => <div key={i} className="motiv-card"><div className="motiv-emoji">{t.emoji}</div><div><div className="motiv-titre">{t.titre}</div><div className="motiv-texte">{t.texte}</div></div></div>)}
    </div>
  );
}

function FlashcardsPage({ onSelectMatiere }) {
  return (
    <div className="page">
      <h1 className="page-title">Flashcards</h1>
      <p className="page-sub">La méthode d'apprentissage la plus efficace pour une avance irattrapable</p>
      <div className="fc-promo">
        <div className="fc-promo-left">
          <div className="fc-promo-img">🃏</div>
          <div>
            <span className="premium-badge">PREMIUM</span>
            <p className="fc-promo-title">Prends une longueur d'avance</p>
            <p className="fc-promo-li">✅ + de 1 200 flashcards</p>
            <p className="fc-promo-li">✅ Certifiées par Hermione</p>
            <p className="fc-promo-li">✅ + de 61% de réussite en PASS/LAS</p>
            <button className="fc-subscribe-btn" onClick={() => window.open("https://hermione.co","_blank")}>JE M'ABONNE</button>
          </div>
        </div>
      </div>
      <div className="avance-banner"><span>🚀</span><div><div className="avance-title">Ton avance sur les autres</div><div className="avance-stats">0 jours 0 heures 0 minutes</div></div></div>
      <div className="matiere-grid">
        {MATIERES.map(m => (
          <button key={m.id} className="matiere-tile" style={{background:m.color}} onClick={() => onSelectMatiere(m)}>
            <span className="matiere-badge">🃏 {m.cours.reduce((a,c)=>a+c.flashcards,0)}</span>
            <span className="matiere-emoji">{m.emoji}</span>
            <span className="matiere-nom">{m.nom}</span>
            <span className="matiere-nb">{m.cours.length} COURS</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MatierePage({ matiere, onSelectCours, onBack }) {
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>{matiere.emoji} {matiere.nom}</h2></div>
      <p className="page-sub" style={{marginBottom:16}}>Ta moyenne apparaîtra quand tu auras fini une série de QCM</p>
      <div className="list-items">
        {matiere.cours.map(c => (
          <button key={c.id} className="list-item" onClick={() => onSelectCours(c)}>
            <span>{c.emoji} {c.titre}</span>
            {c.nouveau && <span className="badge-new">New</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

function CoursPage({ cours, onStartFC, onStartQCM, onBack }) {
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>{cours.emoji} {cours.titre}</h2></div>
      <div className="cours-actions">
        <button className="cours-btn-primary">▶ ÉCOUTER</button>
        <button className="cours-btn-outline" onClick={() => onStartQCM(cours)}>? QCM</button>
      </div>
      <button className="cours-fc-btn" onClick={() => onStartFC(cours)}>FLASHCARDS 🃏 {cours.flashcards}</button>
      <div>{cours.contenu.split("\n\n").map((p,i) => <p key={i} className="cours-para">{p}</p>)}</div>
    </div>
  );
}

function FlashcardSession({ cours, onDone }) {
  const cards = cours.flashcardsData;
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [easy, setEasy] = useState(0);
  const current = cards[idx];
  function rate(score) {
    if (score==="easy") setEasy(e=>e+1);
    setFlipped(false);
    if (idx+1 < cards.length) setIdx(idx+1);
    else onDone(easy+(score==="easy"?1:0));
  }
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={() => onDone(0)}>←</button><h2>🃏 {cours.titre}</h2></div>
      <div className="fc-progress-bar"><div style={{width:((idx)/cards.length*100)+"%",height:"100%",background:"var(--gold)",borderRadius:4,transition:"width .3s"}}></div></div>
      <p className="fc-counter">{idx+1} / {cards.length}</p>
      <div className={`fc-card ${flipped?"flipped":""}`} onClick={() => setFlipped(!flipped)}>
        <div className="fc-front"><div className="fc-hint">Question — tape pour retourner</div><div className="fc-question">{current.q}</div></div>
        <div className="fc-back"><div className="fc-hint">Réponse</div><div className="fc-answer">{current.r}</div></div>
      </div>
      {flipped && (
        <div className="fc-rating">
          <button className="fc-rate fail" onClick={() => rate("fail")}>😔 Échec</button>
          <button className="fc-rate hard" onClick={() => rate("hard")}>😐 Difficile</button>
          <button className="fc-rate ok" onClick={() => rate("ok")}>🙂 Bon</button>
          <button className="fc-rate easy" onClick={() => rate("easy")}>😄 Facile</button>
        </div>
      )}
    </div>
  );
}

function QCMSession({ cours, onDone }) {
  const questions = cours.flashcardsData.map(f => ({
    q: f.q,
    options: [f.r,"Réponse incorrecte A","Réponse incorrecte B","Réponse incorrecte C"].sort(()=>Math.random()-0.5),
    correct: f.r
  }));
  const [idx, setIdx] = useState(0);
  const [sel, setSel] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  if (done) return (
    <div className="page" style={{alignItems:"center",justifyContent:"center",textAlign:"center",paddingTop:80}}>
      <div style={{fontSize:64}}>🎉</div>
      <h2 style={{fontFamily:"var(--font-display)",fontSize:28,margin:"16px 0"}}>Score : {score}/{questions.length}</h2>
      <button className="btn-gold" style={{marginTop:24}} onClick={onDone}>Retour</button>
    </div>
  );
  const q = questions[idx];
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onDone}>←</button><h2>? QCM</h2></div>
      <div className="qcm-progress-bar"><div style={{width:((idx)/questions.length*100)+"%",height:"100%",background:"var(--gold)",borderRadius:4}}></div></div>
      <p className="fc-counter">{idx+1} / {questions.length}</p>
      <div className="qcm-question">{idx+1}. {q.q}</div>
      <div className="qcm-options">
        {q.options.map((opt,i) => {
          let cls = "qcm-opt";
          if (sel) { if (opt===q.correct) cls+=" correct"; else if (opt===sel) cls+=" wrong"; }
          return <button key={i} className={cls} onClick={() => { if(!sel){setSel(opt);if(opt===q.correct)setScore(s=>s+1);} }}>{opt}</button>;
        })}
      </div>
      {sel && <button className="btn-gold" style={{margin:"20px 0"}} onClick={() => {setSel(null);if(idx+1<questions.length)setIdx(idx+1);else setDone(true);}}>{idx+1<questions.length?"Question suivante →":"Voir les résultats →"}</button>}
    </div>
  );
}

function ClassementPage({ classement }) {
  const [pseudo, setPseudo] = useState("");
  const [saved, setSaved] = useState(false);
  const top = [{rank:1,name:"NicolasMajor",pts:12450,medal:"🥇"},{rank:2,name:"SolineS",pts:11820,medal:"🥈"},{rank:3,name:"LucieMed",pts:10990,medal:"🥉"},{rank:4,name:"VincentB",pts:9870,medal:""},{rank:5,name:"EstebanP",pts:8540,medal:""}];
  return (
    <div className="page">
      <h1 className="page-title">Mon classement</h1>
      <div className="my-rank"><span>🏅 Mon classement :</span><span className="rank-num">{classement.toLocaleString('fr')}e</span></div>
      {!saved ? (
        <div className="add-pseudo-btn"><input placeholder="Ton pseudo..." value={pseudo} onChange={e=>setPseudo(e.target.value)} className="pseudo-input"/><button className="pseudo-save" onClick={() => pseudo.trim() && setSaved(true)}>Rejoindre ✓</button></div>
      ) : (
        <div className="add-pseudo-btn" style={{background:"rgba(201,168,76,0.15)"}}><span style={{color:"var(--gold)"}}>🎉 Bienvenue {pseudo} !</span></div>
      )}
      <h2 className="section-title" style={{marginTop:24}}>Top étudiants</h2>
      <div className="classement-list">
        {top.map(t => <div key={t.rank} className="classement-item"><span className="rank-badge">{t.medal||t.rank}</span><span className="rank-name">{t.name}</span><span className="rank-pts">{t.pts.toLocaleString('fr')} pts</span></div>)}
      </div>
    </div>
  );
}

function ProfilPage({ user, pts }) {
  return (
    <div className="page">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
        <h1 className="page-title">Profil</h1>
        <div className="pts-badge">⭐ {pts} pts</div>
      </div>
      {[{label:"E-mail",val:user.email||"•••@hermione.co"},{label:"Mot de passe",val:"••••••••"},{label:"Changer de pseudo",val:""},{label:"Classe actuelle",val:user.classe||"Terminale"},{label:"Fac souhaitée",val:user.fac||"Paris Cité"}].map((r,i) => (
        <div key={i} className="profil-row"><div><div className="profil-label">{r.label}</div>{r.val && <div className="profil-val">{r.val}</div>}</div><button className="profil-edit">Modifier</button></div>
      ))}
      {["Mes points d'expériences","Contact","Mentions légales","Politique de confidentialité","Déconnexion"].map((item,i) => (
        <button key={i} className="profil-nav-row"><span>{item}</span><span>›</span></button>
      ))}
    </div>
  );
}

function QuizView({ quiz, onBack }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  if (quiz.type!=="quiz") return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>{quiz.emoji} {quiz.titre}</h2></div>
      <div className="guide-card"><p style={{color:"var(--gray)",lineHeight:1.7}}>Ce contenu sera disponible prochainement !</p><button className="btn-gold" style={{marginTop:20}} onClick={() => window.open("https://hermione.co","_blank")}>Voir hermione.co →</button></div>
    </div>
  );
  if (done) return (
    <div className="page" style={{alignItems:"center",textAlign:"center",paddingTop:80}}>
      <div style={{fontSize:64}}>✅</div>
      <h2 style={{fontFamily:"var(--font-display)",margin:"16px 0"}}>Quiz terminé !</h2>
      <button className="btn-gold" style={{marginTop:24}} onClick={onBack}>Retour</button>
    </div>
  );
  const q = quiz.questions[idx];
  return (
    <div className="page">
      <div className="sub-header"><button className="back-btn" onClick={onBack}>←</button><h2>{quiz.emoji} {quiz.titre}</h2></div>
      <div className="quiz-card">
        <div className="quiz-q-num">{idx+1}. <span style={{color:"var(--gold)"}}>{q.q}</span></div>
        {q.options.map((opt,i) => <button key={i} className={`qcm-opt ${answers[idx]===opt?"selected":""}`} onClick={() => setAnswers({...answers,[idx]:opt})}>{opt}</button>)}
        <div style={{display:"flex",justifyContent:"space-between",marginTop:20,alignItems:"center"}}>
          <span style={{color:"var(--gray)",fontSize:13}}>{idx+1}/{quiz.questions.length}</span>
          <div style={{display:"flex",gap:8}}>
            <button className="quiz-nav" onClick={() => idx>0 && setIdx(idx-1)}>↑</button>
            <button className="quiz-nav quiz-nav-active" onClick={() => idx+1<quiz.questions.length?setIdx(idx+1):setDone(true)}>↓</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [onboarded, setOnboarded] = useState(false);
  const [user, setUser] = useState({prenom:"",classe:"",fac:"",email:""});
  const [tab, setTab] = useState("home");
  const [section, setSection] = useState(null);
  const [matiere, setMatiere] = useState(null);
  const [cours, setCours] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [fcMode, setFcMode] = useState(null);
  const [fcMaîtrisées, setFcMaîtrisées] = useState(0);

  function resetTab(newTab) { setTab(newTab); setSection(null); setMatiere(null); setCours(null); setQuiz(null); setFcMode(null); }

  if (!onboarded) return <Onboarding onDone={d => { setUser({prenom:d.prenom,classe:d.classe,fac:d.fac,email:d.email}); setOnboarded(true); }}/>;
  if (fcMode==="fc" && cours) return <FlashcardSession cours={cours} onDone={n => { setFcMaîtrisées(f=>f+n); setFcMode(null); }}/>;
  if (fcMode==="qcm" && cours) return <QCMSession cours={cours} onDone={() => setFcMode(null)}/>;

  const wrap = (content) => (
    <div className="app-shell"><div className="scroll-area">{content}</div><BottomNav active={tab} onChange={resetTab}/></div>
  );

  if (cours) return wrap(<CoursPage cours={cours} onBack={() => setCours(null)} onStartFC={() => setFcMode("fc")} onStartQCM={() => setFcMode("qcm")}/>);
  if (matiere) return wrap(<MatierePage matiere={matiere} onSelectCours={setCours} onBack={() => setMatiere(null)}/>);
  if (quiz) return wrap(<QuizView quiz={quiz} onBack={() => setQuiz(null)}/>);
  if (section==="avance") return wrap(<SectionAvance onSelectMatiere={m => { setMatiere(m); setSection(null); }} onBack={() => setSection(null)}/>);
  if (section==="quiz") return wrap(<SectionQuiz onSelectQuiz={q => { setQuiz(q); setSection(null); }} onBack={() => setSection(null)}/>);
  if (section==="temoignages") return wrap(<SectionTemoignages onBack={() => setSection(null)}/>);
  if (section==="motivation") return wrap(<SectionMotivation onBack={() => setSection(null)}/>);

  const pages = {
    home: <Home user={user} streak={1} fcMaîtrisées={fcMaîtrisées} classement={62099} setSection={setSection}/>,
    flashcards: <FlashcardsPage onSelectMatiere={m => setMatiere(m)}/>,
    classement: <ClassementPage classement={62099}/>,
    profil: <ProfilPage user={user} pts={1}/>,
  };
  return wrap(pages[tab]||pages.home);
}
