import { google } from 'googleapis';

// Initialize Google Sheets API
const getGoogleSheetsClient = () => {
  try {
    // Use service account credentials from environment variables
    const credentials = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    throw error;
  }
};

export interface TeamRegistration {
  teamName: string;
  membersCount: number;
  leader: {
    name: string;
    studentNo: string;
    contactNo: string;
    email: string;
  };
  members: Array<{
    name: string;
    studentNo: string;
    contactNo: string;
    email: string;
  }>;
  timestamp: string;
}

export async function appendToGoogleSheet(data: TeamRegistration) {
  try {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      console.error('GOOGLE_SHEET_ID not found in environment variables');
      return { success: false, error: 'Google Sheet ID not configured' };
    }

    // Prepare single row with all team data
    const row: string[] = [
      data.timestamp,
      data.teamName,
      String(data.membersCount),
      data.leader.name,
      data.leader.studentNo,
      data.leader.contactNo,
      data.leader.email,
    ];

    // Add member data (up to 3 members)
    for (let i = 0; i < 3; i++) {
      if (i < data.members.length) {
        const member = data.members[i];
        row.push(
          member.name,
          member.studentNo,
          member.contactNo,
          member.email
        );
      } else {
        // Add empty cells if member doesn't exist
        row.push('', '', '', '');
      }
    }

    // Append data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:Z', // Adjust sheet name and range as needed
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });

    console.log('Data appended to Google Sheet:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Function to create the sheet with headers if it doesn't exist
export async function initializeGoogleSheet() {
  try {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID not found in environment variables');
    }

    // Check if headers exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A1:Z1',
    });

    // If no headers, add them
    if (!response.data.values || response.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1:Z1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [[
            'Timestamp',
            'Team Name',
            'Member Count',
            'Leader Name',
            'Leader Student No',
            'Leader Phone',
            'Leader Email',
            'Member 1 Name',
            'Member 1 Student No',
            'Member 1 Phone',
            'Member 1 Email',
            'Member 2 Name',
            'Member 2 Student No',
            'Member 2 Phone',
            'Member 2 Email',
            'Member 3 Name',
            'Member 3 Student No',
            'Member 3 Phone',
            'Member 3 Email',
          ]],
        },
      });
      console.log('Headers added to Google Sheet');
    }

    return { success: true };
  } catch (error) {
    console.error('Error initializing Google Sheet:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
