import { test, expect } from './BaseTest';

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // Uses baseURL automatically
      });
    test('User can log in successfully', async ({ pageManager }) => {
    //const pageManager = new PageManager(page);
    const loginPage = pageManager.getLoginPage();
    await loginPage.signInLinkButton();
  //  await loginPage.login("Ejaz", "Secret");
    await loginPage.signInClickButton();  
    // Verify user is logged in
    const isLoggedIn = await loginPage.isUserLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });
});
