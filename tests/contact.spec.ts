import { test, expect } from './BaseTest';
test.describe('Contact Page Tests', () => {
  test.beforeEach(async ({page }) => {
    await page.goto('/'); 
  });

  test('User can open and submit the contact form', async ({ contactPage,page }) => {
    // Navigate to Contact Page
    await contactPage.navigateToContact();
    // Fill in the contact form
    await contactPage.fillContactForm('test@example.com', 'Test User', 'This is a test message.');
    // Submit the form
    await contactPage.submitContactForm();
  });
});