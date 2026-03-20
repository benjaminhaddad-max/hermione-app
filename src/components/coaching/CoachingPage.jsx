export default function CoachingPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Coaching</h1>
          <p className="page-sub">Un accompagnement personnalisé pour ta PASS/LAS</p>
        </div>
      </div>

      {/* Présentation */}
      <div className="coaching-intro">
        <div className="coaching-emoji">🎓</div>
        <h2 className="coaching-headline">Ton coach digital Hermione</h2>
        <p className="coaching-desc">
          Nos coachs sont des étudiants en médecine qui sont passés par là.
          Ils t'aident à organiser tes révisions, comprendre les cours difficiles
          et garder la motivation tout au long de l'année.
        </p>
      </div>

      {/* Points forts */}
      <p className="section-title">Ce qu'on t'apporte</p>
      <div className="coaching-features">
        {[
          { icon: "📋", title: "Plan de révision", desc: "Un planning personnalisé selon ton avancement et tes partiels" },
          { icon: "🧠", title: "Méthodo & stratégie", desc: "Les techniques qui marchent vraiment en PASS/LAS" },
          { icon: "💬", title: "Questions libres", desc: "Pose toutes tes questions sur les cours ou l'organisation" },
          { icon: "💪", title: "Motivation", desc: "Un soutien moral pour les moments difficiles" },
        ].map((f, i) => (
          <div key={i} className="coaching-feature-card">
            <span className="coaching-feature-icon">{f.icon}</span>
            <div>
              <div className="coaching-feature-title">{f.title}</div>
              <div className="coaching-feature-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Calendly */}
      <p className="section-title" style={{ marginTop: 24 }}>Prendre rendez-vous</p>
      <div className="coaching-cta-card">
        <div className="coaching-cta-text">
          <span style={{ fontSize: 28 }}>📅</span>
          <div>
            <div className="coaching-cta-title">Réserve ton créneau gratuit</div>
            <div className="coaching-cta-sub">30 min avec un coach · 100% gratuit · Visio</div>
          </div>
        </div>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="coaching-cta-btn"
        >
          PLANIFIER UN RDV →
        </a>
        <p className="coaching-cta-note">Tu seras redirigé vers Calendly pour choisir ton créneau</p>
      </div>

      {/* FAQ rapide */}
      <p className="section-title" style={{ marginTop: 24 }}>Questions fréquentes</p>
      <div className="coaching-faq">
        {[
          { q: "C'est vraiment gratuit ?", a: "Oui, 100%. Hermione est entièrement gratuit, coaching compris." },
          { q: "Qui sont les coachs ?", a: "Des étudiants en médecine (2e année et +) qui ont réussi leur PASS/LAS." },
          { q: "Combien de temps dure un RDV ?", a: "30 minutes en visio. Tu peux reprendre RDV autant de fois que tu veux." },
          { q: "Je peux poser des questions sur n'importe quel cours ?", a: "Oui ! Le coach est là pour t'aider sur tout : cours, méthodo, organisation, moral." },
        ].map((faq, i) => (
          <details key={i} className="coaching-faq-item">
            <summary className="coaching-faq-q">{faq.q}</summary>
            <p className="coaching-faq-a">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
