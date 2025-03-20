import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  contactLink: Locator;
  contactModal: Locator;
  contactEmailInput: Locator;
  contactNameInput: Locator;
  contactMessageInput: Locator;
  sendMessageButton: Locator;
  constructor(page: Page) {
    super(page);
    this.contactLink = page.locator('a.nav-link[data-target="#exampleModal"]');
    this.contactModal = page.locator('#exampleModal');
    this.contactEmailInput = page.locator('#recipient-email');
    this.contactNameInput = page.locator('#recipient-name');
    this.contactMessageInput = page.locator('#message-text');
    this.sendMessageButton = page.locator('button.btn-primary:has-text("Send message")');
  }

  async navigateToContact(): Promise<void> {
    await this.contactLink.click();
    await this.page.waitForSelector('#exampleModal', { state: 'visible' });
  }

  async fillContactForm(email: string, name: string, message: string): Promise<void> {
    await this.contactEmailInput.fill(email);
    await this.contactNameInput.fill(name);
    await this.contactMessageInput.fill(message);
  }

  async submitContactForm(): Promise<void> {
    await this.sendMessageButton.click();
  }

  async handleAlertAndAssertMessage(): Promise<void> {
    const dialogPromise = this.page.waitForEvent('dialog');
    const dialog = await dialogPromise;
    const message = dialog.message();
    console.log("Dialog message:", message);
    await dialog.accept();
  }

  async isContactFormSubmitted(): Promise<boolean> {
    const successAlert = await this.page.locator('.alert-success').isVisible();
    console.log("Hello This is message" + successAlert);
    return successAlert;
  }
}
