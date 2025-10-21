#!/bin/bash

echo "🚀 Setting up Google Sheets Integration for JuniorHack 7.0"
echo "============================================================"
echo ""

# Check if googleapis is installed
echo "📦 Installing googleapis package..."
npm install googleapis

if [ $? -eq 0 ]; then
    echo "✅ googleapis installed successfully!"
else
    echo "❌ Failed to install googleapis"
    exit 1
fi

echo ""
echo "📝 Setup Checklist:"
echo ""
echo "1. ✓ googleapis package installed"
echo "2. ⏳ Create Google Cloud Project"
echo "3. ⏳ Enable Google Sheets API"
echo "4. ⏳ Create Service Account"
echo "5. ⏳ Download Service Account Key (JSON)"
echo "6. ⏳ Create/Open Google Sheet"
echo "7. ⏳ Share Sheet with Service Account Email"
echo "8. ⏳ Add credentials to .env file"
echo ""
echo "📖 Please follow the detailed guide in GOOGLE_SHEETS_SETUP.md"
echo ""
echo "⚙️  Required environment variables:"
echo "   - GOOGLE_SHEET_ID"
echo "   - GOOGLE_SERVICE_ACCOUNT_KEY"
echo ""
echo "✨ After setup, restart your dev server: npm run dev"
echo ""
