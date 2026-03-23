export default function MembraneCellulaire() {
  return (
    <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="320" rx="12" fill="#1a1a2e" />
      <text x="190" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A">La membrane cellulaire</text>
      <text x="190" y="40" textAnchor="middle" fontSize="9" fill="#aaa">Modèle de la mosaïque fluide</text>

      {/* Extracellular */}
      <text x="190" y="62" textAnchor="middle" fontSize="9" fontWeight="600" fill="#3498db">Milieu extracellulaire (eau)</text>

      {/* Upper layer of phospholipids */}
      <g transform="translate(20, 80)">
        {Array.from({length: 14}).map((_, i) => (
          <g key={`u${i}`} transform={`translate(${i * 24 + 4}, 0)`}>
            <circle cx="8" cy="4" r="6" fill="#3498db" opacity="0.6" />
            <line x1="4" y1="10" x2="4" y2="36" stroke="#E5C97A" strokeWidth="1.5" />
            <line x1="12" y1="10" x2="12" y2="36" stroke="#E5C97A" strokeWidth="1.5" />
          </g>
        ))}
      </g>

      {/* Lower layer of phospholipids */}
      <g transform="translate(20, 118)">
        {Array.from({length: 14}).map((_, i) => (
          <g key={`l${i}`} transform={`translate(${i * 24 + 4}, 0)`}>
            <line x1="4" y1="0" x2="4" y2="26" stroke="#E5C97A" strokeWidth="1.5" />
            <line x1="12" y1="0" x2="12" y2="26" stroke="#E5C97A" strokeWidth="1.5" />
            <circle cx="8" cy="32" r="6" fill="#3498db" opacity="0.6" />
          </g>
        ))}
      </g>

      {/* Cholesterol */}
      <g transform="translate(85, 92)">
        <rect x="0" y="0" width="12" height="44" rx="4" fill="#f39c12" opacity="0.5" stroke="#f39c12" strokeWidth="1" />
        <text x="6" y="24" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff" transform="rotate(-90, 6, 24)">CHOL</text>
      </g>

      {/* Transmembrane protein */}
      <g transform="translate(160, 72)">
        <rect x="0" y="0" width="24" height="68" rx="8" fill="#e74c3c" opacity="0.4" stroke="#e74c3c" strokeWidth="1.5" />
        <text x="12" y="20" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">Protéine</text>
        <text x="12" y="28" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">trans-</text>
        <text x="12" y="36" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">membr.</text>
      </g>

      {/* Channel protein */}
      <g transform="translate(250, 72)">
        <path d="M0,0 L0,68 M18,0 L18,68" stroke="#2ecc71" strokeWidth="2" />
        <path d="M0,0 Q9,-6 18,0" fill="none" stroke="#2ecc71" strokeWidth="1.5" />
        <path d="M0,68 Q9,74 18,68" fill="none" stroke="#2ecc71" strokeWidth="1.5" />
        <text x="9" y="38" textAnchor="middle" fontSize="5" fontWeight="700" fill="#2ecc71">Canal</text>
        <text x="9" y="46" textAnchor="middle" fontSize="5" fontWeight="700" fill="#2ecc71">ionique</text>
      </g>

      {/* Intracellular */}
      <text x="190" y="168" textAnchor="middle" fontSize="9" fontWeight="600" fill="#e74c3c">Milieu intracellulaire (cytoplasme)</text>

      {/* Labels */}
      <g transform="translate(20, 185)">
        <rect x="0" y="0" width="340" height="120" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <text x="170" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Légende</text>

        <circle cx="24" cy="34" r="6" fill="#3498db" opacity="0.6" />
        <text x="36" y="38" fontSize="8" fill="#ccc">Tête hydrophile (aime l'eau) des phospholipides</text>

        <line x1="20" y1="52" x2="28" y2="52" stroke="#E5C97A" strokeWidth="2" />
        <text x="36" y="56" fontSize="8" fill="#ccc">Queues hydrophobes (fuient l'eau) = acides gras</text>

        <rect x="18" y="64" width="12" height="12" rx="3" fill="#f39c12" opacity="0.5" />
        <text x="36" y="74" fontSize="8" fill="#ccc">Cholestérol (rigidifie la membrane)</text>

        <rect x="18" y="82" width="12" height="12" rx="4" fill="#e74c3c" opacity="0.4" />
        <text x="36" y="92" fontSize="8" fill="#ccc">Protéine transmembranaire (récepteur, transporteur)</text>

        <line x1="20" y1="100" x2="28" y2="100" stroke="#2ecc71" strokeWidth="2" />
        <text x="36" y="104" fontSize="8" fill="#ccc">Canal ionique (passage d'ions)</text>
      </g>
    </svg>
  );
}
