import { Page, Locator, expect } from '@playwright/test';
export class BasePage {
    protected page: Page;

    constructor(page: Page) {
      this.page = page;
    }
  
    async navigate(url: string): Promise<void> {
      await this.page.goto(url);
    }
  
    async click(locator: Locator | string): Promise<void> {
      const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
      await element.waitFor();
      await element.click();
    }
  
    async type(locator: Locator | string, text: string): Promise<void> {
      const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
      await element.waitFor();
      await element.fill(text);
    }
  
    async getText(locator: Locator | string): Promise<string> {
      const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
      await element.waitFor();
      return (await element.textContent())?.trim() || '';
    }
  
    async assertText(locator: Locator | string, expectedText: string): Promise<void> {
      const actualText = await this.getText(locator);
      expect(actualText).toContain(expectedText);
    }
}
