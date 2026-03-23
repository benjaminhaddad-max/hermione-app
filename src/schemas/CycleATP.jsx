export default function CycleATP() {
  return (
    <svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="280" rx="12" fill="#1a1a2e" />
      <text x="190" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A">Le cycle ATP / ADP</text>
      <text x="190" y="40" textAnchor="middle" fontSize="9" fill="#aaa">La monnaie énergétique de la cellule</text>

      {/* ATP circle */}
      <g transform="translate(80, 100)">
        <circle cx="0" cy="0" r="40" fill="rgba(46,204,113,0.15)" stroke="#2ecc71" strokeWidth="2.5" />
        <text x="0" y="-8" textAnchor="middle" fontSize="18" fontWeight="800" fill="#2ecc71">ATP</text>
        <text x="0" y="8" textAnchor="middle" fontSize="7" fill="#ccc">Adénosine</text>
        <text x="0" y="18" textAnchor="middle" fontSize="7" fill="#ccc">TriPhosphate</text>
        <g transform="translate(-20, 28)">
          <circle cx="0" cy="0" r="5" fill="#f39c12" opacity="0.7" /><text x="0" y="3" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">P</text>
          <circle cx="14" cy="0" r="5" fill="#f39c12" opacity="0.7" /><text x="14" y="3" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">P</text>
          <circle cx="28" cy="0" r="5" fill="#e74c3c" opacity="0.8" /><text x="28" y="3" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">P</text>
          <text x="40" y="3" fontSize="6" fill="#888">← riche en énergie</text>
        </g>
      </g>

      {/* ADP circle */}
      <g transform="translate(300, 100)">
        <circle cx="0" cy="0" r="35" fill="rgba(231,76,60,0.15)" stroke="#e74c3c" strokeWidth="2" />
        <text x="0" y="-6" textAnchor="middle" fontSize="16" fontWeight="800" fill="#e74c3c">ADP</text>
        <text x="0" y="8" textAnchor="middle" fontSize="7" fill="#ccc">Adénosine</text>
        <text x="0" y="18" textAnchor="middle" fontSize="7" fill="#ccc">DiPhosphate</text>
        <g transform="translate(-10, 26)">
          <circle cx="0" cy="0" r="5" fill="#f39c12" opacity="0.7" /><text x="0" y="3" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">P</text>
          <circle cx="14" cy="0" r="5" fill="#f39c12" opacity="0.7" /><text x="14" y="3" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">P</text>
        </g>
      </g>

      {/* Top arrow: ATP → ADP (releases energy) */}
      <g transform="translate(130, 60)">
        <path d="M0,20 Q60,-15 120,20" fill="none" stroke="#2ecc71" strokeWidth="2" />
        <polygon points="120,20 114,14 116,22" fill="#2ecc71" />
        <text x="60" y="0" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2ecc71">Libère de l'énergie</text>
        <text x="60" y="12" textAnchor="middle" fontSize="7" fill="#888">ATP → ADP + Pi</text>
      </g>

      {/* Bottom arrow: ADP → ATP (needs energy) */}
      <g transform="translate(130, 130)">
        <path d="M120,0 Q60,35 0,0" fill="none" stroke="#e67e22" strokeWidth="2" />
        <polygon points="0,0 6,6 4,-2" fill="#e67e22" />
        <text x="60" y="30" textAnchor="middle" fontSize="8" fontWeight="700" fill="#e67e22">Consomme de l'énergie</text>
        <text x="60" y="42" textAnchor="middle" fontSize="7" fill="#888">ADP + Pi → ATP</text>
      </g>

      {/* + Pi */}
      <g transform="translate(260, 60)">
        <text x="0" y="0" fontSize="9" fill="#888">+ Pi</text>
        <circle cx="20" cy="-3" r="5" fill="#e74c3c" opacity="0.5" /><text x="20" y="0" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fff">P</text>
      </g>

      {/* Uses of ATP */}
      <g transform="translate(20, 200)">
        <rect x="0" y="0" width="340" height="65" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <text x="170" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">L'ATP fournit l'énergie pour :</text>
        <text x="30" y="34" fontSize="8" fill="#ccc">💪 Contraction musculaire</text>
        <text x="30" y="48" fontSize="8" fill="#ccc">🚚 Transport de molécules</text>
        <text x="200" y="34" fontSize="8" fill="#ccc">🧬 Synthèse de molécules</text>
        <text x="200" y="48" fontSize="8" fill="#ccc">📡 Transmission de signaux</text>
        <text x="170" y="62" textAnchor="middle" fontSize="7" fill="#888">~40 kg d'ATP recyclés par jour !</text>
      </g>
    </svg>
  );
}
