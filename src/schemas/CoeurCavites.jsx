export default function CoeurCavites() {
  return (
    <svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Fond cœur */}
      <path d="M150 230 C60 175, 20 120, 30 75 C40 35, 85 25, 115 50 C130 60, 145 72, 150 80 C155 72, 170 60, 185 50 C215 25, 260 35, 270 75 C280 120, 240 175, 150 230Z"
        fill="rgba(224,90,43,0.1)" stroke="rgba(224,90,43,0.4)" strokeWidth="2" />
      {/* Septum */}
      <line x1="150" y1="85" x2="150" y2="205" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
      <line x1="100" y1="135" x2="200" y2="135" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      {/* OD - Oreillette Droite */}
      <ellipse cx="105" cy="108" rx="38" ry="30" fill="rgba(100,149,237,0.3)" stroke="#6495ED" strokeWidth="1.5" />
      <text x="105" y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6495ED">O. Droite</text>
      <text x="105" y="115" textAnchor="middle" fontSize="8" fill="#6495ED">↓ tricuspide</text>
      {/* OG - Oreillette Gauche */}
      <ellipse cx="195" cy="108" rx="38" ry="30" fill="rgba(201,168,76,0.25)" stroke="#C9A84C" strokeWidth="1.5" />
      <text x="195" y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="#C9A84C">O. Gauche</text>
      <text x="195" y="115" textAnchor="middle" fontSize="8" fill="#C9A84C">↓ mitrale</text>
      {/* VD - Ventricule Droit */}
      <path d="M70 145 Q78 195 120 200 L130 145Z" fill="rgba(100,149,237,0.25)" stroke="#6495ED" strokeWidth="1.5" />
      <text x="96" y="172" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6495ED">V. Droit</text>
      {/* VG - Ventricule Gauche */}
      <path d="M170 145 L180 200 Q222 195 230 145Z" fill="rgba(224,90,43,0.25)" stroke="#e05a2b" strokeWidth="1.5" />
      <text x="204" y="172" textAnchor="middle" fontSize="9" fontWeight="700" fill="#e05a2b">V. Gauche</text>
      {/* Artère pulmonaire */}
      <path d="M90 90 C85 65, 65 55, 55 45" fill="none" stroke="#6495ED" strokeWidth="3" />
      <text x="25" y="42" fontSize="8" fill="#6495ED">Art. pulm.</text>
      <text x="25" y="52" fontSize="8" fill="#6495ED">(désoxy.)</text>
      {/* Aorte */}
      <path d="M210 90 C215 65, 235 55, 245 45" fill="none" stroke="#e05a2b" strokeWidth="3" />
      <text x="248" y="42" fontSize="8" fill="#e05a2b">Aorte</text>
      <text x="248" y="52" fontSize="8" fill="#e05a2b">(oxyg.)</text>
      {/* Veines pulmonaires */}
      <path d="M245 110 C240 108, 230 106, 220 107" fill="none" stroke="#C9A84C" strokeWidth="2" />
      <text x="248" y="108" fontSize="7" fill="#C9A84C">V. pulm.</text>
      {/* Veine cave */}
      <path d="M55 110 C60 108, 70 107, 78 107" fill="none" stroke="#6495ED" strokeWidth="2" strokeDasharray="4 2" />
      <text x="15" y="108" fontSize="7" fill="#6495ED">V. cave</text>
      {/* Flèches circulation */}
      <text x="150" y="248" textAnchor="middle" fontSize="8" fill="#8a9bb0">Bleu = désoxygéné • Or/Rouge = oxygéné</text>
    </svg>
  );
}
