export default function DoubleHelice() {
  return (
    <svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="300" rx="12" fill="#1a1a2e" />
      <text x="190" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A">Structure de la double hélice d'ADN</text>

      {/* Main helix */}
      <g transform="translate(100, 40)">
        {/* Backbone strand 1 */}
        <path d="M0,0 Q40,-15 80,0 Q120,15 160,0 Q200,-15 240,0" fill="none" stroke="#5B4FD9" strokeWidth="3.5" />
        {/* Backbone strand 2 */}
        <path d="M0,180 Q40,195 80,180 Q120,165 160,180 Q200,195 240,180" fill="none" stroke="#E5C97A" strokeWidth="3.5" />

        {/* Base pairs */}
        {[
          { x: 10, t: "A", b: "T", c1: "#e74c3c", c2: "#3498db" },
          { x: 35, t: "T", b: "A", c1: "#3498db", c2: "#e74c3c" },
          { x: 60, t: "C", b: "G", c1: "#2ecc71", c2: "#f39c12" },
          { x: 90, t: "G", b: "C", c1: "#f39c12", c2: "#2ecc71" },
          { x: 115, t: "A", b: "T", c1: "#e74c3c", c2: "#3498db" },
          { x: 140, t: "T", b: "A", c1: "#3498db", c2: "#e74c3c" },
          { x: 165, t: "G", b: "C", c1: "#f39c12", c2: "#2ecc71" },
          { x: 195, t: "C", b: "G", c1: "#2ecc71", c2: "#f39c12" },
          { x: 220, t: "A", b: "T", c1: "#e74c3c", c2: "#3498db" },
        ].map((bp, i) => {
          const y1off = Math.sin((bp.x / 240) * Math.PI * 2) * 10;
          const y1 = 10 + y1off;
          const y2 = 170 - y1off;
          return (
            <g key={i}>
              <line x1={bp.x} y1={y1 + 20} x2={bp.x} y2={y2 + 20} stroke="#fff" strokeWidth="1" opacity="0.15" />
              <circle cx={bp.x} cy={y1 + 20} r="8" fill={bp.c1} opacity="0.8" />
              <text x={bp.x} y={y1 + 24} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">{bp.t}</text>
              <circle cx={bp.x} cy={y2 + 20} r="8" fill={bp.c2} opacity="0.8" />
              <text x={bp.x} y={y2 + 24} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">{bp.b}</text>
              <line x1={bp.x} y1={y1 + 28} x2={bp.x} y2={y2 + 12} stroke="#fff" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.3" />
            </g>
          );
        })}

        {/* Direction arrows */}
        <text x="-10" y="6" fontSize="9" fontWeight="700" fill="#5B4FD9">5'</text>
        <text x="248" y="6" fontSize="9" fontWeight="700" fill="#5B4FD9">3'</text>
        <text x="-10" y="190" fontSize="9" fontWeight="700" fill="#E5C97A">3'</text>
        <text x="248" y="190" fontSize="9" fontWeight="700" fill="#E5C97A">5'</text>
      </g>

      {/* Labels */}
      <g transform="translate(0, 240)">
        <text x="20" y="14" fontSize="9" fontWeight="700" fill="#fff">Légende :</text>

        <circle cx="30" cy="30" r="6" fill="#e74c3c" opacity="0.8" />
        <text x="40" y="34" fontSize="8" fill="#ccc">A = Adénine</text>

        <circle cx="120" cy="30" r="6" fill="#3498db" opacity="0.8" />
        <text x="130" y="34" fontSize="8" fill="#ccc">T = Thymine</text>

        <circle cx="210" cy="30" r="6" fill="#2ecc71" opacity="0.8" />
        <text x="220" y="34" fontSize="8" fill="#ccc">C = Cytosine</text>

        <circle cx="300" cy="30" r="6" fill="#f39c12" opacity="0.8" />
        <text x="310" y="34" fontSize="8" fill="#ccc">G = Guanine</text>

        <text x="20" y="52" fontSize="8" fill="#888">Brin violet = squelette sucre-phosphate (sens 5'→3')</text>
        <text x="20" y="62" fontSize="8" fill="#888">Brin doré = squelette sucre-phosphate (sens 3'→5') — brins antiparallèles</text>
      </g>
    </svg>
  );
}
