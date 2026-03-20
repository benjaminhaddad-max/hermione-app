const NUM_COLORS = [
  { bg: "rgba(255,230,0,0.5)", color: "#7a5c00" },
  { bg: "rgba(255,80,120,0.2)", color: "#a0002a" },
  { bg: "rgba(50,180,80,0.2)", color: "#1a6e30" },
  { bg: "rgba(40,130,255,0.2)", color: "#0040a0" },
  { bg: "rgba(150,50,200,0.2)", color: "#5a0090" },
  { bg: "rgba(255,160,0,0.2)", color: "#7a4400" },
];

export default function FichePage5Resume({ data }) {
  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-rose">{data.titre}</span>
      </h2>

      <div className="fiche-resume-list">
        {data.points.map((p, i) => {
          const c = NUM_COLORS[i % NUM_COLORS.length];
          return (
            <div key={i} className="fiche-resume-point">
              <span
                className="fiche-resume-num"
                style={{ background: c.bg, color: c.color }}
              >
                {i + 1}
              </span>
              <span className="fiche-resume-texte">{p}</span>
            </div>
          );
        })}
      </div>

      {data.mnemo && (
        <div className="fiche-mnemo-manuscrit">
          <span className="fiche-mnemo-icon">💡</span>
          <div>
            <div className="fiche-mnemo-label">Astuce mémo :</div>
            <p className="fiche-mnemo-texte">{data.mnemo}</p>
          </div>
        </div>
      )}
    </div>
  );
}
