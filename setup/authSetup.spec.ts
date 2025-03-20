import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Generate auth.json for persistent login', async ({ page, context }) => {
  console.log('🔄 Navigating to login page...');
  await page.goto('https://www.demoblaze.com/index.html');

  // Click login button
  console.log('🔄 Clicking login button...');
  await page.click('#login2');

  // Fill credentials
  console.log('🔄 Entering credentials...');
  await page.fill('#loginusername', 'Ejaz');
  await page.fill('#loginpassword', 'Secret');

  // Click "Log in" button
  console.log('🔄 Submitting login...');
  await page.click('button:has-text("Log in")');

  // Wait for successful login
  console.log('🔄 Waiting for user to be logged in...');
  await page.waitForSelector('#nameofuser', { timeout: 5000 });

  // ✅ Save session to auth.json
  console.log('✅ Saving session to auth.json...');
  const storageState = await context.storageState();
  
  fs.writeFileSync('auth.json', JSON.stringify(storageState, null, 2));
  console.log('✅ Auth session successfully saved to auth.json!');
});
