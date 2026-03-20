export default function CoeurCavites() {
  return (
    <svg
      viewBox="0 0 320 260"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      shapeRendering="geometricPrecision"
    >
      <rect x="8" y="8" width="304" height="244" rx="14" fill="#ffffff" stroke="#e7e9ef" />

      <path
        d="M160 224 C92 182, 52 140, 54 94 C56 58, 86 38, 114 56 C132 68, 148 82, 160 98 C172 82, 188 68, 206 56 C234 38, 264 58, 266 94 C268 140, 228 182, 160 224 Z"
        fill="#fff0ee"
        stroke="#e05a2b"
        strokeWidth="2.2"
      />

      <line x1="160" y1="96" x2="160" y2="208" stroke="#d6dbe6" strokeWidth="2.4" />
      <line x1="112" y1="136" x2="208" y2="136" stroke="#d6dbe6" strokeWidth="2" />

      <ellipse cx="122" cy="111" rx="34" ry="24" fill="#eaf3ff" stroke="#6495ED" strokeWidth="1.8" />
      <text x="122" y="109" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4f7ecf">Oreillette D</text>
      <text x="122" y="121" textAnchor="middle" fontSize="8" fill="#4f7ecf">tricuspide</text>

      <ellipse cx="198" cy="111" rx="34" ry="24" fill="#fff6e8" stroke="#C9A84C" strokeWidth="1.8" />
      <text x="198" y="109" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#9a7a21">Oreillette G</text>
      <text x="198" y="121" textAnchor="middle" fontSize="8" fill="#9a7a21">mitrale</text>

      <path d="M88 145 Q98 188 136 193 L142 145 Z" fill="#eaf3ff" stroke="#6495ED" strokeWidth="1.8" />
      <text x="114" y="172" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4f7ecf">Ventricule D</text>

      <path d="M178 145 L184 193 Q222 188 232 145 Z" fill="#ffeceb" stroke="#e05a2b" strokeWidth="1.8" />
      <text x="206" y="172" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#c24a1f">Ventricule G</text>

      <path d="M92 90 C82 74, 68 62, 56 54" fill="none" stroke="#6495ED" strokeWidth="2.8" />
      <text x="22" y="54" fontSize="8.5" fill="#4f7ecf">Artere pulmonaire</text>

      <path d="M228 90 C238 74, 252 62, 264 54" fill="none" stroke="#e05a2b" strokeWidth="2.8" />
      <text x="242" y="50" fontSize="8.5" fill="#c24a1f">Aorte</text>

      <path d="M262 116 C246 112, 232 112, 216 112" fill="none" stroke="#C9A84C" strokeWidth="2" />
      <text x="258" y="123" fontSize="8" fill="#9a7a21">Veines pulm.</text>

      <path d="M58 116 C74 112, 88 112, 102 112" fill="none" stroke="#6495ED" strokeWidth="2" strokeDasharray="4 2" />
      <text x="20" y="123" fontSize="8" fill="#4f7ecf">Veine cave</text>

      <text x="160" y="240" textAnchor="middle" fontSize="8.5" fill="#7f889b">
        Bleu = sang desoxygené  •  Jaune/Rouge = sang oxygene
      </text>
    </svg>
  );
}
