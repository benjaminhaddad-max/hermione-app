/* ═══════════════════════════════════════════════════════
   FichePage1Intro — Fiche de cours COMPLÈTE (5 sections)
   Reçoit le fiche entier pour donner un scroll de 5 pages
═══════════════════════════════════════════════════════ */

const SECTION_THEMES = [
  { icon: "🔭", label: "Vue d'ensemble", accent: "#5B4FD9" },
  { icon: "⚙️", label: "Mécanisme",      accent: "#C9A84C" },
  { icon: "🔬", label: "Détail",          accent: "#2ecc71" },
  { icon: "🩺", label: "Application",    accent: "#e74c3c" },
  { icon: "🔗", label: "Liens",           accent: "#3498db" },
];

const CONCEPT_PALETTE = [
  "#5B4FD9","#C9A84C","#2ecc71","#e74c3c","#3498db","#9b59b6","#e67e22","#1abc9c",
];

const RESUME_COLORS = [
  { bg:"rgba(91,79,217,0.15)",  fg:"#3d2e8b" },
  { bg:"rgba(201,168,76,0.2)",  fg:"#6b5c2e" },
  { bg:"rgba(46,204,113,0.15)", fg:"#1a6e30" },
  { bg:"rgba(231,76,60,0.15)",  fg:"#8b1a0a" },
  { bg:"rgba(52,152,219,0.15)", fg:"#0040a0" },
  { bg:"rgba(155,89,182,0.15)", fg:"#5a0090" },
];

function splitToSections(texte) {
  if (!texte) return [];
  const sentences = texte
    .replace(/\s+/g, " ")
    .trim()
    .split(/\.\s+/)
    .filter((s) => s.trim().length > 20)
    .map((s, i, arr) => (i < arr.length - 1 ? s.trim() + "." : s.trim()));
  const result = [];
  for (let i = 0; i < sentences.length; i += 2) {
    const chunk = sentences.slice(i, Math.min(i + 2, sentences.length)).join(" ");
    if (chunk.length > 30) result.push(chunk);
  }
  return result.slice(0, 5);
}

/* ── Séparateur de section ── */
function SectionDivider({ icon, label }) {
  return (
    <div className="fc-divider">
      <span className="fc-divider-icon">{icon}</span>
      <span className="fc-divider-label">{label}</span>
      <div className="fc-divider-line" />
    </div>
  );
}

export default function FichePage1Intro({ fiche }) {
  const intro    = fiche?.page1_intro    || {};
  const concepts = fiche?.page2_concepts?.concepts || [];
  const formules = fiche?.page4_formules?.formules  || [];
  const donnees  = fiche?.page4_formules?.donnees   || [];
  const points   = fiche?.page5_resume?.points      || [];
  const mnemo    = fiche?.page5_resume?.mnemo;

  const sections = splitToSections(intro?.texte);
  const keyPts   = Array.isArray(intro?.points_cles) ? intro.points_cles : [];

  return (
    <div className="fiche-page fiche-page-modern">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <div className="fc-hero">
        <span className="fc-kicker">Fiche de cours</span>
        <h2 className="fc-titre">
          <span className="fiche-souligne-rose">{intro?.titre || "Introduction"}</span>
        </h2>
        <div className="fc-hero-chips">
          <span className="fc-chip">📖 {concepts.length} notions</span>
          {formules.length > 0 && <span className="fc-chip">📐 {formules.length} formules</span>}
          {points.length > 0   && <span className="fc-chip">✅ {points.length} points clés</span>}
        </div>
      </div>

      {/* ══ INTRODUCTION ══════════════════════════════════ */}
      <SectionDivider icon="📚" label="Introduction" />
      <div className="fc-intro-blocks">
        {sections.map((txt, i) => {
          const th = SECTION_THEMES[i % SECTION_THEMES.length];
          return (
            <div key={i} className="fc-intro-bloc" style={{ "--acc": th.accent }}>
              <div className="fc-intro-bloc-tag">
                <span>{th.icon}</span>
                <span className="fc-intro-tag-label">{th.label}</span>
              </div>
              <p className="fc-intro-bloc-txt">{txt}</p>
            </div>
          );
        })}
      </div>

      {/* ── Points clés intro ── */}
      {keyPts.length > 0 && (
        <div className="fc-keypts">
          <div className="fc-keypts-head">⭐ À retenir</div>
          {keyPts.map((p, i) => (
            <div key={i} className="fc-keypt">
              <div
                className="fc-keypt-num"
                style={{ background: CONCEPT_PALETTE[i % CONCEPT_PALETTE.length] }}
              >{i + 1}</div>
              <p className="fc-keypt-txt">{p}</p>
            </div>
          ))}
        </div>
      )}

      {/* ══ CONCEPTS CLÉS ═════════════════════════════════ */}
      {concepts.length > 0 && (
        <>
          <SectionDivider icon="🔬" label="Concepts clés" />
          <div className="fc-concepts">
            {concepts.map((c, i) => (
              <div
                key={i}
                className="fc-concept-card"
                style={{ "--cc": CONCEPT_PALETTE[i % CONCEPT_PALETTE.length] }}
              >
                <span className="fc-concept-term">{c.terme}</span>
                <p className="fc-concept-def">{c.definition}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ══ FORMULES & DONNÉES ════════════════════════════ */}
      {(formules.length > 0 || donnees.length > 0) && (
        <>
          <SectionDivider icon="📐" label="Formules & données" />
          <div className="fc-formules">
            {formules.map((f, i) => (
              <div key={i} className="fc-formule-card">
                <div className="fc-formule-label">{f.label}</div>
                <div className="fc-formule-math">{f.formule}</div>
                {f.unite && <div className="fc-formule-unite">{f.unite}</div>}
              </div>
            ))}
          </div>
          {donnees.length > 0 && (
            <div className="fc-donnees">
              <div className="fc-donnees-head">📊 Valeurs à connaître</div>
              {donnees.map((d, i) => (
                <div key={i} className="fc-donnee-row">
                  <span className="fc-donnee-label">{d.label}</span>
                  <span className="fc-donnee-val">{d.valeur}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ══ RÉSUMÉ FINAL ══════════════════════════════════ */}
      {points.length > 0 && (
        <>
          <SectionDivider icon="✅" label="Résumé du chapitre" />
          <div className="fc-resume">
            {points.map((p, i) => {
              const rc = RESUME_COLORS[i % RESUME_COLORS.length];
              return (
                <div key={i} className="fc-resume-pt">
                  <span
                    className="fc-resume-num"
                    style={{ background: rc.bg, color: rc.fg }}
                  >{i + 1}</span>
                  <p className="fc-resume-txt">{p}</p>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* ── Mnémotechnique ── */}
      {mnemo && (
        <div className="fc-mnemo">
          <span className="fc-mnemo-icon">💡</span>
          <div>
            <div className="fc-mnemo-label">Astuce mémo</div>
            <p className="fc-mnemo-txt">
              {typeof mnemo === "object" ? mnemo.texte || mnemo.label : mnemo}
            </p>
          </div>
        </div>
      )}

      <div className="fp1-footer">
        <span>Fiche complète — scroll pour tout voir</span>
        <span>← Onglets pour aller directement</span>
      </div>
    </div>
  );
}
