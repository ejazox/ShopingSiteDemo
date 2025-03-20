import { test, expect } from './BaseTest';
import { PageManager } from '@managers/PageManager';

test.describe('Navbar Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); 
  });

  test('Verify navbar elements are visible', async ({ pageManager }) => {
    const navbar = pageManager.getNavbarPage();
    await expect(navbar.homeLink).toBeVisible();
    await expect(navbar.contactLink).toBeVisible();
    await expect(navbar.aboutUsLink).toBeVisible();
    await expect(navbar.cartLink).toBeVisible();
    await expect(navbar.loginLink).toBeVisible();
    await expect(navbar.signUpLink).toBeVisible();
  });

  test('Verify logged-in user message appears', async ({ navbarPage }) => {
    await expect(navbarPage.userWelcomeText).toBeVisible();
    const welcomeText = await navbarPage.getUserWelcomeText();
    console.log("Welcome Ejaz text" + welcomeText);
    expect(welcomeText).toContain('Welcome');
  });
});
