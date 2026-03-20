#!/usr/bin/env bash
# Relance le pipeline Terminale puis build + commit + push (aucune action manuelle).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/pipeline-terminale.log"
cd "$ROOT/pipeline"

{
  echo ""
  echo "══════════════════════════════════════════════════════"
  echo "  $(date -Iseconds) — Démarrage auto Terminale + déploiement"
  echo "══════════════════════════════════════════════════════"
} >> "$LOG"

node generate-terminale.js --concurrency=6 >> "$LOG" 2>&1

cd "$ROOT"
export CI=true
npm run build >> "$LOG" 2>&1

git add src/data/content.js
if git diff --cached --quiet; then
  echo "$(date -Iseconds) — Aucun changement content.js" >> "$LOG"
  exit 0
fi

git commit -m "content: Terminale régénérée depuis Drive (pipeline auto)" >> "$LOG" 2>&1
git push origin main >> "$LOG" 2>&1

{
  echo "$(date -Iseconds) — Terminé : build + push OK"
  echo "══════════════════════════════════════════════════════"
} >> "$LOG"
