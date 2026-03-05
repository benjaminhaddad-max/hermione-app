import SCHEMAS from "../../schemas/index";

export default function FichePage3Schemas({ data }) {
  return (
    <div className="fiche-page">
      <h2 className="fiche-page-titre">{data.titre}</h2>
      {data.schemas.map((s, i) => {
        const SvgComp = SCHEMAS[s.id];
        return (
          <div key={i} className="schema-block">
            {SvgComp
              ? <div className="schema-svg-wrap"><SvgComp /></div>
              : <div className="schema-placeholder">Schéma : {s.id}</div>
            }
            <p className="schema-legende">{s.legende}</p>
          </div>
        );
      })}
    </div>
  );
}
