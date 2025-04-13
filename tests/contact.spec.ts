import { test, expect } from './BaseTest';
test.describe('Contact Page Tests', () => {
  test.beforeEach(async ({page }) => {
    await page.goto('/'); 
  });

  test('User can open and submit the contact form', async ({ contactPage,page }) => {
    await contactPage.navigateToContact();
    await contactPage.fillContactForm('test@example.com', 'Test User', 'This is a test message.');
    await contactPage.submitContactForm();
  });
});