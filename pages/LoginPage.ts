import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private userNameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private userWelcomeText: Locator;
  private loginLinkButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.locator('button:has-text("Log in")');
    this.loginLinkButton = page.locator('#login2');
    this.userWelcomeText = page.locator('#nameofuser');
  }

  async login(username: string, password: string): Promise<void> {
    await this.type(this.userNameInput, username);
    await this.type(this.passwordInput, password);
  }

  async signInClickButton(): Promise<void> {
    await this.loginButton.click();
   }
  
  async signInLinkButton(): Promise<void> {
   this.loginLinkButton.click(); 
  }
  
  async isUserLoggedIn(): Promise<boolean> {
    await this.page.waitForSelector('#nameofuser', { state: 'visible' });
    const welcomeText = await this.getText(this.userWelcomeText);
    return welcomeText.includes('Welcome');
  }
}
