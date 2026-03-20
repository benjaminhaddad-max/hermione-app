export default function CelluleEucaryote() {
  return (
    <svg
      viewBox="0 0 360 260"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      shapeRendering="geometricPrecision"
    >
      <rect x="8" y="8" width="344" height="244" rx="14" fill="#ffffff" stroke="#e7e9ef" />

      <ellipse cx="165" cy="128" rx="126" ry="92" fill="#f7f3e7" stroke="#C9A84C" strokeWidth="3" />
      <text x="256" y="54" fontSize="10" fontWeight="700" fill="#8d7426">Membrane plasmique</text>
      <line x1="250" y1="58" x2="232" y2="68" stroke="#8d7426" strokeWidth="1.5" />

      <ellipse cx="165" cy="128" rx="50" ry="38" fill="#ebe5ff" stroke="#8f75e7" strokeWidth="2.5" />
      <ellipse cx="165" cy="128" rx="34" ry="24" fill="#f4f1ff" stroke="#8f75e7" strokeWidth="1.4" />
      <text x="165" y="124" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6e54c9">Noyau</text>
      <text x="165" y="137" textAnchor="middle" fontSize="9" fill="#7d69cf">ADN / chromatine</text>

      <ellipse cx="92" cy="96" rx="24" ry="14" fill="#e8f9ef" stroke="#2ecc71" strokeWidth="2" />
      <path d="M74 96 Q92 84 110 96 Q92 108 74 96" fill="none" stroke="#2ecc71" strokeWidth="1.3" />
      <text x="92" y="99" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#209c55">Mitoch.</text>

      <path d="M220 92 C242 100, 242 116, 220 124 C240 132, 240 148, 220 156" fill="none" stroke="#C9A84C" strokeWidth="2.4" />
      <path d="M228 92 C250 100, 250 116, 228 124 C248 132, 248 148, 228 156" fill="none" stroke="#d8bc66" strokeWidth="1.6" />
      <text x="250" y="128" fontSize="9" fontWeight="700" fill="#8d7426">RE</text>

      <path d="M98 164 Q126 156 142 166" fill="none" stroke="#ff9f43" strokeWidth="2.6" />
      <path d="M102 172 Q130 164 146 174" fill="none" stroke="#ff9f43" strokeWidth="2.1" />
      <path d="M106 180 Q134 172 150 182" fill="none" stroke="#ff9f43" strokeWidth="1.6" />
      <text x="120" y="197" fontSize="9" fontWeight="700" fill="#bb6a1f">Golgi</text>

      <circle cx="222" cy="181" r="11" fill="#ffeceb" stroke="#e05a2b" strokeWidth="2" />
      <text x="222" y="185" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#c24a1f">Lys.</text>

      <text x="54" y="203" fontSize="10" fill="#7f8aa1">Cytoplasme</text>

      <g fontSize="9" fill="#5f6778" fontWeight="600">
        <rect x="30" y="226" width="10" height="7" fill="#f7f3e7" stroke="#C9A84C" />
        <text x="44" y="232">Membrane</text>
        <rect x="108" y="226" width="10" height="7" fill="#ebe5ff" stroke="#8f75e7" />
        <text x="122" y="232">Noyau</text>
        <rect x="168" y="226" width="10" height="7" fill="#e8f9ef" stroke="#2ecc71" />
        <text x="182" y="232">Mitochondrie</text>
        <rect x="264" y="226" width="10" height="7" fill="#fff1e6" stroke="#ff9f43" />
        <text x="278" y="232">Golgi</text>
      </g>
    </svg>
  );
}
