/**
 * Test script to verify Google Sheets integration
 * Run with: node --loader ts-node/esm test-sheets.ts
 * Or: npx tsx test-sheets.ts
 */

import { appendToGoogleSheet, initializeGoogleSheet } from './src/lib/googleSheets';

async function testGoogleSheets() {
  console.log('🧪 Testing Google Sheets Integration...\n');

  // Check environment variables
  console.log('1️⃣ Checking environment variables...');
  if (!process.env.GOOGLE_SHEET_ID) {
    console.error('❌ GOOGLE_SHEET_ID not found in .env');
    return;
  }
  console.log('✅ GOOGLE_SHEET_ID found');

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    console.error('❌ GOOGLE_SERVICE_ACCOUNT_KEY not found in .env');
    return;
  }
  console.log('✅ GOOGLE_SERVICE_ACCOUNT_KEY found\n');

  // Initialize sheet
  console.log('2️⃣ Initializing Google Sheet...');
  const initResult = await initializeGoogleSheet();
  if (!initResult.success) {
    console.error('❌ Failed to initialize sheet:', initResult.error);
    return;
  }
  console.log('✅ Sheet initialized successfully\n');

  // Test data
  console.log('3️⃣ Testing data append...');
  const testData = {
    teamName: 'Test Team',
    membersCount: 3,
    leader: {
      name: 'Test Leader',
      studentNo: 'SE/2022/001',
      contactNo: '0771234567',
      email: 'leader@test.com',
    },
    members: [
      {
        name: 'Test Member 1',
        studentNo: 'SE/2022/002',
        contactNo: '0771234568',
        email: 'member1@test.com',
      },
      {
        name: 'Test Member 2',
        studentNo: 'SE/2022/003',
        contactNo: '0771234569',
        email: 'member2@test.com',
      },
    ],
    timestamp: new Date().toISOString(),
  };

  const appendResult = await appendToGoogleSheet(testData);
  if (!appendResult.success) {
    console.error('❌ Failed to append data:', appendResult.error);
    return;
  }
  console.log('✅ Test data appended successfully\n');

  console.log('🎉 All tests passed!');
  console.log('📊 Check your Google Sheet to see the test data');
  console.log('� The test data should appear as ONE row with all team members in separate columns');
  console.log('�🗑️  You can delete the test row if needed');
}

// Run the test
testGoogleSheets().catch(console.error);
