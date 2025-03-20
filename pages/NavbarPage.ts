import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NavbarPage extends BasePage {
  
  homeLink: Locator;
  contactLink: Locator;
  aboutUsLink: Locator;
  cartLink: Locator;
  loginLink: Locator;
  logoutLink: Locator;
  userWelcomeText: Locator;
  signUpLink: Locator;

  constructor(page: Page) {
    super(page);
    this.homeLink = page.locator('a.nav-link[href="index.html"]');
    this.contactLink = page.locator('a.nav-link[data-target="#exampleModal"]');
    this.aboutUsLink = page.locator('a.nav-link[data-target="#videoModal"]');
    this.cartLink = page.locator('#cartur');
    this.loginLink = page.locator('#login2');
    this.logoutLink = page.locator('#logout2');
    this.userWelcomeText = page.locator('#nameofuser');
    this.signUpLink = page.locator('#signin2');
  }

  async verifyNavbarElements() {
    await this.homeLink.waitFor();
    await this.contactLink.waitFor();
    await this.aboutUsLink.waitFor();
    await this.cartLink.waitFor();
    await this.loginLink.waitFor();
    await this.signUpLink.waitFor();
  }

  async getUserWelcomeText(): Promise<string> {
    this.page.pause();
    return this.getText(this.userWelcomeText);
   console.log(this.userWelcomeText);
    this.page.pause();
  }
}
