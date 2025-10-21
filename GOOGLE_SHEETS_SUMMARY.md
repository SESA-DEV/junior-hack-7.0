# Google Sheets Integration - Quick Summary

## What Was Added

✅ **New Files:**
- `src/lib/googleSheets.ts` - Google Sheets API integration utilities
- `GOOGLE_SHEETS_SETUP.md` - Detailed setup guide
- `setup-google-sheets.sh` - Quick setup script
- `.env.example` - Updated with Google Sheets variables

✅ **Modified Files:**
- `src/app/api/register/route.ts` - Now saves to both MongoDB and Google Sheets

## Quick Start

### 1. Install Package
```bash
npm install googleapis
```

### 2. Set Up Google Cloud
Follow the detailed guide in `GOOGLE_SHEETS_SETUP.md`:
- Create Google Cloud project
- Enable Google Sheets API
- Create service account
- Download JSON key
- Share Google Sheet with service account email

### 3. Configure Environment
Add to your `.env` file:
```bash
GOOGLE_SHEET_ID="your-sheet-id"
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
```

### 4. Test
```bash
npm run dev
```
Register a team and check your Google Sheet!

## Data Format

Each registration creates **one row** with these columns:
- Timestamp
- Team Name
- Member Count
- Leader Name
- Leader Student No
- Leader Phone
- Leader Email
- Member 1 Name
- Member 1 Student No
- Member 1 Phone
- Member 1 Email
- Member 2 Name
- Member 2 Student No
- Member 2 Phone
- Member 2 Email
- Member 3 Name
- Member 3 Student No
- Member 3 Phone
- Member 3 Email

*Note: If a team has fewer members, those columns will be empty.*

## Features

✨ **Automatic Headers** - First registration initializes the sheet
✨ **Error Handling** - Registration still works if Google Sheets fails
✨ **Duplicate Prevention** - Both MongoDB and Google Sheets track registrations
✨ **Timestamp** - Each entry includes ISO timestamp

## Security

🔒 Service account credentials are stored in environment variables
🔒 Never commit `.env` file to Git
🔒 Google Sheet is only accessible to service account

## Need Help?

📖 Read the full guide: `GOOGLE_SHEETS_SETUP.md`
🚀 Run the setup script: `./setup-google-sheets.sh`
