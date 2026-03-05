export default function FichePage4Formules({ data }) {
  return (
    <div className="fiche-page">
      <h2 className="fiche-page-titre">{data.titre}</h2>
      {data.formules.map((f, i) => (
        <div key={i} className="formule-card">
          <div className="formule-label">{f.label}</div>
          <div className="formule-math">{f.formule}</div>
          {f.unite && <div className="formule-unite">Unité : {f.unite}</div>}
        </div>
      ))}
      {data.donnees.length > 0 && (
        <>
          <p className="fiche-section-label" style={{ marginTop: 16 }}>Valeurs à retenir</p>
          {data.donnees.map((d, i) => (
            <div key={i} className="donnee-row">
              <span className="donnee-label">{d.label}</span>
              <span className="donnee-valeur">{d.valeur}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
