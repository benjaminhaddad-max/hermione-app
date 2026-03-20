export default function MembranePlasmique() {
  return (
    <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect x="24" y="30" width="312" height="180" rx="16" fill="rgba(91,79,217,0.05)" stroke="rgba(91,79,217,0.22)" />
      <text x="180" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5B4FD9">
        Bicouche phospholipidique et transport membranaire
      </text>

      <line x1="48" y1="78" x2="312" y2="78" stroke="#C9A84C" strokeWidth="3" />
      <line x1="48" y1="126" x2="312" y2="126" stroke="#C9A84C" strokeWidth="3" />

      {[56, 78, 100, 122, 144, 166, 188, 210, 232, 254, 276, 298].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="68" r="7" fill="#C9A84C" />
          <line x1={x} y1="75" x2={x - 3} y2="92" stroke="#8a9bb0" strokeWidth="1.2" />
          <line x1={x} y1="75" x2={x + 3} y2="92" stroke="#8a9bb0" strokeWidth="1.2" />

          <circle cx={x} cy="136" r="7" fill="#C9A84C" />
          <line x1={x} y1="129" x2={x - 3} y2="112" stroke="#8a9bb0" strokeWidth="1.2" />
          <line x1={x} y1="129" x2={x + 3} y2="112" stroke="#8a9bb0" strokeWidth="1.2" />
        </g>
      ))}

      <rect x="150" y="62" width="60" height="80" rx="14" fill="rgba(91,79,217,0.84)" />
      <circle cx="180" cy="89" r="10" fill="rgba(255,255,255,0.32)" />
      <circle cx="180" cy="114" r="10" fill="rgba(255,255,255,0.32)" />
      <text x="180" y="154" textAnchor="middle" fontSize="8" fill="#5B4FD9">Canal proteique</text>

      <circle cx="108" cy="102" r="11" fill="rgba(46,204,113,0.9)" />
      <text x="108" y="106" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">H2O</text>
      <path d="M120 102 C130 102, 138 102, 148 102" stroke="#2ecc71" strokeWidth="2" markerEnd="url(#arrM)" />
      <text x="108" y="120" textAnchor="middle" fontSize="7.5" fill="#2ecc71">Diffusion</text>

      <circle cx="256" cy="102" r="11" fill="rgba(231,76,60,0.9)" />
      <text x="256" y="106" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">Na+</text>
      <path d="M244 102 C232 102, 224 102, 212 102" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrM)" />
      <text x="256" y="120" textAnchor="middle" fontSize="7.5" fill="#e74c3c">Transport</text>

      <rect x="44" y="160" width="272" height="38" rx="10" fill="rgba(255,255,255,0.75)" stroke="rgba(0,0,0,0.08)" />
      <text x="58" y="176" fontSize="8" fill="#5B4FD9">Tetes hydrophiles (exterieur / cytosol)</text>
      <text x="58" y="189" fontSize="8" fill="#8a9bb0">Queues hydrophobes au centre : barriere selective</text>

      <defs>
        <marker id="arrM" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#8a9bb0" />
        </marker>
      </defs>
    </svg>
  );
}
