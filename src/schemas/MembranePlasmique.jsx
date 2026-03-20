export default function MembranePlasmique() {
  return (
    <svg
      viewBox="0 0 360 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      shapeRendering="geometricPrecision"
    >
      <rect x="8" y="8" width="344" height="224" rx="14" fill="#ffffff" stroke="#e7e9ef" />
      <text x="180" y="26" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5B4FD9">
        Bicouche phospholipidique
      </text>

      <line x1="42" y1="84" x2="318" y2="84" stroke="#C9A84C" strokeWidth="2.6" />
      <line x1="42" y1="128" x2="318" y2="128" stroke="#C9A84C" strokeWidth="2.6" />

      {[48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="74" r="6.4" fill="#C9A84C" />
          <line x1={x} y1="80" x2={x - 3} y2="96" stroke="#8d96a9" strokeWidth="1.1" />
          <line x1={x} y1="80" x2={x + 3} y2="96" stroke="#8d96a9" strokeWidth="1.1" />
          <circle cx={x} cy="138" r="6.4" fill="#C9A84C" />
          <line x1={x} y1="132" x2={x - 3} y2="116" stroke="#8d96a9" strokeWidth="1.1" />
          <line x1={x} y1="132" x2={x + 3} y2="116" stroke="#8d96a9" strokeWidth="1.1" />
        </g>
      ))}

      <rect x="156" y="66" width="48" height="80" rx="12" fill="#5B4FD9" />
      <circle cx="180" cy="91" r="8.5" fill="#8f75e7" />
      <circle cx="180" cy="116" r="8.5" fill="#8f75e7" />
      <text x="180" y="158" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5B4FD9">Canal proteique</text>

      <circle cx="106" cy="106" r="9.5" fill="#2ecc71" />
      <text x="106" y="109" textAnchor="middle" fontSize="7.8" fontWeight="700" fill="#fff">H2O</text>
      <path d="M118 106 L150 106" stroke="#2ecc71" strokeWidth="2.2" markerEnd="url(#arrM)" />
      <text x="94" y="123" textAnchor="middle" fontSize="8" fill="#239b56">Diffusion</text>

      <circle cx="254" cy="106" r="9.5" fill="#e74c3c" />
      <text x="254" y="109" textAnchor="middle" fontSize="7.8" fontWeight="700" fill="#fff">Na+</text>
      <path d="M242 106 L210 106" stroke="#e74c3c" strokeWidth="2.2" markerEnd="url(#arrM)" />
      <text x="266" y="123" textAnchor="middle" fontSize="8" fill="#c0392b">Transport actif</text>

      <rect x="36" y="170" width="288" height="48" rx="10" fill="#f9fafc" stroke="#e2e5eb" />
      <text x="50" y="187" fontSize="8.5" fill="#5B4FD9">Tetes hydrophiles vers milieux aqueux (extra / intra)</text>
      <text x="50" y="201" fontSize="8.5" fill="#6f788b">Queues hydrophobes au centre : barriere selective</text>

      <defs>
        <marker id="arrM" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#7f8799" />
        </marker>
      </defs>
    </svg>
  );
}
