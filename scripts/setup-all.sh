#!/usr/bin/env bash
set -euo pipefail
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd /home/nearshore/cv-luiz-guilherme
{
  echo "=== node/npm ==="
  command -v node
  command -v npm
  node -v
  npm -v
  echo "=== npm install ==="
  npm install
  echo "=== playwright ==="
  npx playwright install chromium
  echo "=== build ==="
  npm run build
  echo "=== pdf ==="
  node scripts/generate-pdf.mjs
  echo "=== pdfs ==="
  ls -la public/*.pdf
  echo "DONE:0"
} > /tmp/cv-setup.log 2>&1
