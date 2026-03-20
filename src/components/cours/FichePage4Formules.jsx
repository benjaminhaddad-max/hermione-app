export default function FichePage4Formules({ data }) {
  return (
    <div className="fiche-page fiche-page-modern">
      <h2 className="fiche-titre-modern">
        <span className="fiche-souligne-violet">{data.titre}</span>
      </h2>

      {data.formules && data.formules.map((f, i) => (
        <div key={i} className="fiche-formule-manuscrite">
          <div className="fiche-formule-label">{f.label}</div>
          <div className="fiche-formule-math">{f.formule}</div>
          {f.unite && <div className="fiche-formule-unite">({f.unite})</div>}
        </div>
      ))}

      {data.donnees && data.donnees.length > 0 && (
        <div className="fiche-encadre-vert" style={{ marginTop: 16 }}>
          <p className="fiche-encadre-label">📊 Valeurs à retenir</p>
          {data.donnees.map((d, i) => (
            <div key={i} className="fiche-donnee-row">
              <span className="fiche-donnee-label">• {d.label}</span>
              <span className="fiche-donnee-valeur">{d.valeur}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
