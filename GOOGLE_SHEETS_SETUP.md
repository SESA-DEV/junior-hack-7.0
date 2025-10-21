# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the JuniorHack 7.0 registration system.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- A Google Sheet where you want to store the registrations

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it something like "JuniorHack 7.0 Registrations"
4. Copy the **Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
   ```
5. The sheet will automatically be initialized with headers on first registration

## Step 2: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Name it (e.g., "JuniorHack Registration")

## Step 3: Enable Google Sheets API

1. In the Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Google Sheets API"
3. Click on it and press **Enable**

## Step 4: Create Service Account

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Fill in the details:
   - Service account name: `juniorhack-sheets`
   - Service account ID: (auto-generated)
   - Description: "Service account for JuniorHack registration sheets"
4. Click **Create and Continue**
5. Skip the optional steps and click **Done**

## Step 5: Create Service Account Key

1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Click **Create**
6. The JSON key file will be downloaded to your computer
7. **Keep this file secure!** It contains sensitive credentials

## Step 6: Share Google Sheet with Service Account

1. Open the JSON key file you downloaded
2. Find the `client_email` field (looks like: `juniorhack-sheets@project-id.iam.gserviceaccount.com`)
3. Copy this email address
4. Go back to your Google Sheet
5. Click **Share** button
6. Paste the service account email
7. Give it **Editor** permissions
8. Uncheck "Notify people"
9. Click **Share**

## Step 7: Configure Environment Variables

1. Open your `.env` file in the project root
2. Add the following variables:

```bash
# Google Sheets Configuration
GOOGLE_SHEET_ID="your-sheet-id-from-step-1"
GOOGLE_SERVICE_ACCOUNT_KEY='paste-entire-json-key-content-here-as-single-line'
```

### Format the Service Account Key:

The JSON key file needs to be formatted as a single-line string. You can do this by:

**Option 1: Manual**
1. Open the downloaded JSON file
2. Remove all line breaks and extra spaces
3. Make it one continuous line
4. Wrap it in single quotes

**Option 2: Using command line**
```bash
cat path/to/service-account-key.json | jq -c . | sed "s/'/'\\\\''/g"
```

Example:
```bash
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"juniorhack-12345","private_key_id":"abc123...","private_key":"-----BEGIN PRIVATE KEY-----\nMIIE...","client_email":"juniorhack-sheets@juniorhack-12345.iam.gserviceaccount.com",...}'
```

## Step 8: Install Dependencies

```bash
npm install googleapis
```

## Step 9: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Try registering a team through the website

3. Check your Google Sheet - you should see the registration data appear!

## Google Sheet Structure

The data will be saved with the following columns (one row per team):

| Timestamp | Team Name | Member Count | Leader Name | Leader Student No | Leader Phone | Leader Email | Member 1 Name | Member 1 Student No | Member 1 Phone | Member 1 Email | Member 2 Name | ... |
|-----------|-----------|--------------|-------------|-------------------|--------------|--------------|---------------|-------------------|----------------|----------------|---------------|-----|
| 2025-10-21T... | Team Alpha | 4 | John Doe | SE/2022/001 | 0771234567 | john@example.com | Jane Smith | SE/2022/002 | 0771234568 | jane@example.com | Bob Johnson | ... |

**Complete column list:**
1. Timestamp
2. Team Name
3. Member Count
4. Leader Name
5. Leader Student No
6. Leader Phone
7. Leader Email
8. Member 1 Name
9. Member 1 Student No
10. Member 1 Phone
11. Member 1 Email
12. Member 2 Name
13. Member 2 Student No
14. Member 2 Phone
15. Member 2 Email
16. Member 3 Name
17. Member 3 Student No
18. Member 3 Phone
19. Member 3 Email

Each team registration creates **one row** with all member information in separate columns. If a team has fewer than 4 members, the unused member columns will be empty.

## Troubleshooting

### Error: "GOOGLE_SHEET_ID not found"
- Make sure you've added the `GOOGLE_SHEET_ID` to your `.env` file
- Restart your development server after adding environment variables

### Error: "Permission denied"
- Verify the service account email has been shared with the Google Sheet
- Check that it has Editor permissions

### Error: "Invalid credentials"
- Make sure the entire JSON key is correctly formatted as a single line
- Check for any missing quotes or escaped characters
- Verify the JSON is valid using a JSON validator

### Error: "API not enabled"
- Go to Google Cloud Console
- Make sure Google Sheets API is enabled for your project

## Security Notes

⚠️ **Important Security Reminders:**

1. **Never commit** `.env` file to Git
2. **Never share** your service account key file
3. Add `.env` to your `.gitignore` file
4. If you accidentally expose the key, **immediately** delete it from Google Cloud Console and create a new one
5. Only share the Google Sheet with the service account email, not your personal email

## Additional Features

### Initialize Sheet Headers Manually

If you want to set up the headers before the first registration:

```typescript
import { initializeGoogleSheet } from '@/lib/googleSheets';

// Call this once to set up headers
await initializeGoogleSheet();
```

### Change Sheet Name

By default, data is written to `Sheet1`. To change this, edit the range in `/src/lib/googleSheets.ts`:

```typescript
range: 'YourSheetName!A:H', // Change 'Sheet1' to your sheet name
```

## Support

If you encounter any issues:
1. Check the console logs for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure the Google Sheets API is enabled
4. Confirm the service account has proper permissions

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform's environment variables section
2. Make sure to use the same format for `GOOGLE_SERVICE_ACCOUNT_KEY`
3. Test the integration in production after deployment
