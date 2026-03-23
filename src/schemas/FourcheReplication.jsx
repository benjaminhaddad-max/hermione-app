export default function FourcheReplication() {
  return (
    <svg viewBox="0 0 380 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }} shapeRendering="geometricPrecision">
      <rect width="380" height="340" rx="12" fill="#1a1a2e" />
      <text x="190" y="24" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E5C97A">La fourche de réplication</text>

      {/* Parent DNA */}
      <g transform="translate(20, 50)">
        <path d="M0,60 L80,60" stroke="#5B4FD9" strokeWidth="3" />
        <path d="M0,80 L80,80" stroke="#E5C97A" strokeWidth="3" />
        <text x="40" y="55" textAnchor="middle" fontSize="8" fill="#888">ADN parental</text>
        <text x="-4" y="64" textAnchor="end" fontSize="7" fontWeight="700" fill="#5B4FD9">3'</text>
        <text x="-4" y="84" textAnchor="end" fontSize="7" fontWeight="700" fill="#E5C97A">5'</text>
      </g>

      {/* Fork opening */}
      <g transform="translate(100, 50)">
        {/* Helicase */}
        <circle cx="20" cy="70" r="14" fill="#e74c3c" opacity="0.3" stroke="#e74c3c" strokeWidth="1.5" />
        <text x="20" y="73" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fff">Hélicase</text>

        {/* Top strand (leading) */}
        <path d="M0,60 Q30,50 60,30 L220,30" stroke="#5B4FD9" strokeWidth="3" />
        <path d="M60,46 L220,46" stroke="#2ecc71" strokeWidth="2.5" strokeDasharray="0" />
        <text x="60" y="26" fontSize="7" fontWeight="700" fill="#5B4FD9">3'</text>
        <text x="224" y="34" fontSize="7" fontWeight="700" fill="#5B4FD9">5'</text>
        <text x="224" y="50" fontSize="7" fontWeight="700" fill="#2ecc71">3'</text>

        {/* Leading strand label */}
        <text x="140" y="18" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#2ecc71">Brin directeur</text>
        <text x="140" y="60" textAnchor="middle" fontSize="7" fill="#888">(copie continue →)</text>

        {/* Bottom strand (lagging) */}
        <path d="M0,80 Q30,90 60,110 L220,110" stroke="#E5C97A" strokeWidth="3" />

        {/* Okazaki fragments */}
        <line x1="180" y1="94" x2="220" y2="94" stroke="#e67e22" strokeWidth="2.5" />
        <line x1="130" y1="94" x2="170" y2="94" stroke="#e67e22" strokeWidth="2.5" />
        <line x1="80" y1="94" x2="120" y2="94" stroke="#e67e22" strokeWidth="2.5" />
        <text x="60" y="118" fontSize="7" fontWeight="700" fill="#E5C97A">5'</text>
        <text x="224" y="114" fontSize="7" fontWeight="700" fill="#E5C97A">3'</text>

        {/* Lagging strand label */}
        <text x="150" y="135" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#e67e22">Brin retardé</text>
        <text x="150" y="147" textAnchor="middle" fontSize="7" fill="#888">(fragments d'Okazaki ←)</text>

        {/* DNA Polymerase */}
        <g transform="translate(195, 30)">
          <rect x="0" y="0" width="10" height="18" rx="3" fill="#2ecc71" opacity="0.6" />
        </g>
        <g transform="translate(170, 80)">
          <rect x="0" y="0" width="10" height="18" rx="3" fill="#e67e22" opacity="0.6" />
        </g>
      </g>

      {/* Legend */}
      <g transform="translate(20, 215)">
        <rect x="0" y="0" width="340" height="110" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <text x="170" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Acteurs de la réplication</text>

        <line x1="14" y1="32" x2="34" y2="32" stroke="#5B4FD9" strokeWidth="3" />
        <text x="40" y="36" fontSize="8" fill="#ccc">Brin matrice 3'→5'</text>

        <line x1="14" y1="50" x2="34" y2="50" stroke="#2ecc71" strokeWidth="2.5" />
        <text x="40" y="54" fontSize="8" fill="#ccc">Nouveau brin directeur (copie continue)</text>

        <line x1="14" y1="68" x2="34" y2="68" stroke="#e67e22" strokeWidth="2.5" />
        <text x="40" y="72" fontSize="8" fill="#ccc">Fragments d'Okazaki (brin retardé)</text>

        <circle cx="24" cy="88" r="6" fill="#e74c3c" opacity="0.4" />
        <text x="40" y="92" fontSize="8" fill="#ccc">Hélicase (déroule la double hélice)</text>

        <rect x="180" y="28" width="8" height="12" rx="2" fill="#2ecc71" opacity="0.6" />
        <text x="194" y="38" fontSize="8" fill="#ccc">ADN polymérase</text>

        <text x="194" y="56" fontSize="8" fill="#888">+ Primase (amorces ARN)</text>
        <text x="194" y="72" fontSize="8" fill="#888">+ ADN ligase (recolle)</text>
        <text x="194" y="88" fontSize="8" fill="#888">+ Topoisomérase (détord)</text>
      </g>
    </svg>
  );
}
