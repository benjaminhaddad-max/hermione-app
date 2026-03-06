import SCHEMAS from "../../schemas/index";

export default function FichePage3Schemas({ data }) {
  return (
    <div className="fiche-page fiche-manuscrite">
      <h2 className="fiche-titre-manuscrit">
        <span className="fiche-souligne-vert">{data.titre}</span>
      </h2>
      {data.schemas.map((s, i) => {
        const SvgComp = SCHEMAS[s.id];
        return (
          <div key={i} className="fiche-schema-block">
            {SvgComp
              ? <div className="fiche-schema-wrap"><SvgComp /></div>
              : <div className="fiche-schema-placeholder">
                  <span style={{ fontSize: 32, marginBottom: 8, display: "block" }}>✏️</span>
                  Schéma : {s.id}
                  <br /><small>(contenu bientôt disponible)</small>
                </div>
            }
            <p className="fiche-schema-legende">↳ {s.legende}</p>
          </div>
        );
      })}
    </div>
  );
}
