const THEMES = [
  { icon: "🔭", label: "Vue d'ensemble", accent: "#5B4FD9" },
  { icon: "⚙️", label: "Mécanisme",      accent: "#C9A84C" },
  { icon: "🔬", label: "Détail",          accent: "#2ecc71" },
  { icon: "🩺", label: "Application",    accent: "#e74c3c" },
  { icon: "🔗", label: "Liens",           accent: "#3498db" },
];

function splitIntoSections(texte) {
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

export default function FichePage1Intro({ data }) {
  const sections = splitIntoSections(data?.texte);
  const pts = Array.isArray(data?.points_cles) ? data.points_cles : [];

  return (
    <div className="fiche-page fiche-page-modern">
      {/* ── Hero ── */}
      <div className="fp1-hero">
        <span className="fp1-kicker">Fiche de cours</span>
        <h2 className="fp1-titre">
          <span className="fiche-souligne-rose">{data?.titre || "Introduction"}</span>
        </h2>
        <div className="fp1-hero-stats">
          <span className="fp1-stat">📖 5 pages</span>
          <span className="fp1-stat">🃏 Flashcards incluses</span>
          <span className="fp1-stat">✅ QCM</span>
        </div>
      </div>

      {/* ── Sections du cours ── */}
      {sections.length > 0 && (
        <div className="fp1-sections">
          {sections.map((txt, i) => {
            const th = THEMES[i % THEMES.length];
            return (
              <div key={i} className="fp1-bloc" style={{ "--accent": th.accent }}>
                <div className="fp1-bloc-tag">
                  <span className="fp1-bloc-icon">{th.icon}</span>
                  <span className="fp1-bloc-label">{th.label}</span>
                </div>
                <p className="fp1-bloc-txt">{txt}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Points clés ── */}
      {pts.length > 0 && (
        <div className="fp1-keys-wrap">
          <div className="fp1-keys-header">
            <span>⭐</span>
            <span>À retenir absolument</span>
          </div>
          <div className="fp1-keys">
            {pts.map((p, i) => {
              const hue = [258, 45, 145, 0, 210, 285][i % 6];
              return (
                <div key={i} className="fp1-key">
                  <div
                    className="fp1-key-num"
                    style={{ background: `hsl(${hue}, 65%, 55%)` }}
                  >
                    {i + 1}
                  </div>
                  <p className="fp1-key-txt">{p}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Pied de page ── */}
      <div className="fp1-footer">
        <span>Page 1 / 5</span>
        <span>Suiv. → Notions · Schémas · Chiffres · Résumé</span>
      </div>
    </div>
  );
}
