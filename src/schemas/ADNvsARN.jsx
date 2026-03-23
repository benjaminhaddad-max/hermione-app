export default function ADNvsARN() {
  return (
    <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="320" rx="12" fill="#1a1a2e" />
      <text x="190" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A">ADN vs ARN</text>

      {/* ADN side */}
      <g transform="translate(20, 50)">
        <rect x="0" y="0" width="160" height="240" rx="10" fill="rgba(91,79,217,0.12)" stroke="#5B4FD9" strokeWidth="1.5" />
        <text x="80" y="22" textAnchor="middle" fontSize="12" fontWeight="800" fill="#5B4FD9">ADN</text>

        <text x="14" y="46" fontSize="9" fontWeight="600" fill="#fff">Structure :</text>
        <text x="14" y="60" fontSize="8.5" fill="#ccc">Double brin (double hélice)</text>

        <text x="14" y="82" fontSize="9" fontWeight="600" fill="#fff">Sucre :</text>
        <text x="14" y="96" fontSize="8.5" fill="#ccc">Désoxyribose</text>
        <text x="14" y="108" fontSize="7.5" fill="#888">(un OH en moins que le ribose)</text>

        <text x="14" y="128" fontSize="9" fontWeight="600" fill="#fff">Bases azotées :</text>
        <g transform="translate(14, 136)">
          {[
            { l: "A", n: "Adénine", c: "#e74c3c" },
            { l: "T", n: "Thymine", c: "#3498db" },
            { l: "C", n: "Cytosine", c: "#2ecc71" },
            { l: "G", n: "Guanine", c: "#f39c12" },
          ].map((b, i) => (
            <g key={i} transform={`translate(0, ${i * 16})`}>
              <circle cx="6" cy="4" r="5" fill={b.c} opacity="0.8" />
              <text x="6" y="7" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff">{b.l}</text>
              <text x="16" y="8" fontSize="8" fill="#ccc">{b.n}</text>
            </g>
          ))}
        </g>

        <text x="14" y="210" fontSize="9" fontWeight="600" fill="#fff">Localisation :</text>
        <text x="14" y="224" fontSize="8.5" fill="#ccc">Noyau (+ mitochondries)</text>

        <text x="80" y="238" textAnchor="middle" fontSize="7.5" fill="#888">Stable, permanente</text>
      </g>

      {/* ARN side */}
      <g transform="translate(200, 50)">
        <rect x="0" y="0" width="160" height="240" rx="10" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.5" />
        <text x="80" y="22" textAnchor="middle" fontSize="12" fontWeight="800" fill="#E5C97A">ARN</text>

        <text x="14" y="46" fontSize="9" fontWeight="600" fill="#fff">Structure :</text>
        <text x="14" y="60" fontSize="8.5" fill="#ccc">Simple brin</text>

        <text x="14" y="82" fontSize="9" fontWeight="600" fill="#fff">Sucre :</text>
        <text x="14" y="96" fontSize="8.5" fill="#ccc">Ribose</text>
        <text x="14" y="108" fontSize="7.5" fill="#888">(un OH de plus en position 2')</text>

        <text x="14" y="128" fontSize="9" fontWeight="600" fill="#fff">Bases azotées :</text>
        <g transform="translate(14, 136)">
          {[
            { l: "A", n: "Adénine", c: "#e74c3c" },
            { l: "U", n: "Uracile", c: "#9b59b6" },
            { l: "C", n: "Cytosine", c: "#2ecc71" },
            { l: "G", n: "Guanine", c: "#f39c12" },
          ].map((b, i) => (
            <g key={i} transform={`translate(0, ${i * 16})`}>
              <circle cx="6" cy="4" r="5" fill={b.c} opacity="0.8" />
              <text x="6" y="7" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff">{b.l}</text>
              <text x="16" y="8" fontSize="8" fill="#ccc">{b.n}</text>
            </g>
          ))}
        </g>

        <text x="14" y="210" fontSize="9" fontWeight="600" fill="#fff">Localisation :</text>
        <text x="14" y="224" fontSize="8.5" fill="#ccc">Noyau → Cytoplasme</text>

        <text x="80" y="238" textAnchor="middle" fontSize="7.5" fill="#888">Éphémère, copie de travail</text>
      </g>

      {/* VS */}
      <circle cx="190" cy="170" r="14" fill="#1a1a2e" stroke="#E5C97A" strokeWidth="1.5" />
      <text x="190" y="174" textAnchor="middle" fontSize="9" fontWeight="800" fill="#E5C97A">VS</text>

      <text x="190" y="310" textAnchor="middle" fontSize="8" fill="#666">Appariement : A↔T (ADN) / A↔U (ARN) et C↔G</text>
    </svg>
  );
}
