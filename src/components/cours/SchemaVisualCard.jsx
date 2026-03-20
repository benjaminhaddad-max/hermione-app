const NODE_PALETTE = [
  "#5B4FD9", "#7c6ae8", "#C9A84C",
  "#2ecc71", "#e74c3c", "#3498db", "#9b59b6", "#e67e22",
];

function parseSchema(raw) {
  if (!raw || typeof raw !== "string") return null;
  const colonIdx = raw.indexOf(":");
  let title = "";
  let body = raw.trim();

  if (colonIdx > 2 && colonIdx < 120) {
    title = raw
      .slice(0, colonIdx)
      .replace(/^[Ss]chéma\s+(d[eu']?|du|de la|des|de l[''])\s+/i, "")
      .trim();
    body = raw.slice(colonIdx + 1).trim();
  }

  if (body.includes("→")) {
    const steps = body
      .split(/\s*→\s*/)
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 8);
    return { type: "flow", title, steps };
  }

  const items = body
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2 && s.length < 90);
  if (items.length >= 3) {
    return { type: "list", title, items: items.slice(0, 10) };
  }

  return { type: "text", title, body };
}

function FlowNode({ step, idx }) {
  const bg = NODE_PALETTE[idx % NODE_PALETTE.length];
  const main = step.replace(/\s*\([^)]+\)/g, "").trim() || step;
  const sub = (step.match(/\(([^)]+)\)/) || [])[1] || "";
  return (
    <div className="sfv-node" style={{ background: bg }}>
      <span className="sfv-node-num">{idx + 1}</span>
      <span className="sfv-node-main">{main.length > 28 ? main.slice(0, 28) + "…" : main}</span>
      {sub && (
        <span className="sfv-node-sub">{sub.length > 32 ? sub.slice(0, 32) + "…" : sub}</span>
      )}
    </div>
  );
}

export default function SchemaVisualCard({ texte, index }) {
  const parsed = parseSchema(texte);
  if (!parsed) return null;

  return (
    <div className="sfv-card" style={{ "--idx": index }}>
      <div className="sfv-card-head">
        <span className="sfv-badge">Schéma {index + 1}</span>
        {parsed.title && <h3 className="sfv-card-title">{parsed.title}</h3>}
      </div>

      {parsed.type === "flow" && (
        <div className="sfv-flow">
          {parsed.steps.map((step, i) => (
            <div key={i} className="sfv-flow-unit">
              <FlowNode step={step} idx={i} />
              {i < parsed.steps.length - 1 && (
                <span className="sfv-arrow" aria-hidden>›</span>
              )}
            </div>
          ))}
        </div>
      )}

      {parsed.type === "list" && (
        <ul className="sfv-list">
          {parsed.items.map((item, i) => (
            <li key={i} className="sfv-list-row">
              <span
                className="sfv-dot"
                style={{ background: NODE_PALETTE[i % NODE_PALETTE.length] }}
              />
              <span className="sfv-list-text">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {parsed.type === "text" && <p className="sfv-text">{parsed.body}</p>}
    </div>
  );
}
