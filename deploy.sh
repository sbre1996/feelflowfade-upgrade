#!/bin/bash
# ═══════════════════════════════════════════
#  Friedens-Yoga-Akademie · Deploy Script
#  Einfach per Doppelklick ausführen
# ═══════════════════════════════════════════

cd "$(dirname "$0")"

echo ""
echo "🚀 Website wird veröffentlicht..."
echo ""

# Alle Änderungen stagen
git add .

# Commit mit aktuellem Datum/Uhrzeit
TIMESTAMP=$(date "+%d.%m.%Y %H:%M")
git commit -m "Update $TIMESTAMP"

# Zu GitHub pushen
git push origin main
# Repository: https://github.com/sbre1996/feelflowfade-upgrade.git

echo ""
echo "✅ Fertig! Die Website ist jetzt live."
echo "   Änderungen sind in ca. 1 Minute sichtbar."
echo ""
