// src/pages/CategoryPage.ts
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {
  phonesCategory: Locator;
  laptopsCategory: Locator;
  monitorsCategory: Locator;
  firstProductName: Locator;
  firstProductPrice: Locator;
  firstProductDescription: Locator;

  constructor(page: Page) {
    super(page);
    this.phonesCategory = page.locator('a.list-group-item:has-text("Phones")');
    this.laptopsCategory = page.locator('a.list-group-item:has-text("Laptops")');
    this.monitorsCategory = page.locator('a.list-group-item:has-text("Monitors")');
    this.firstProductName = page.locator('.col-lg-4 .card-title a').first();
    this.firstProductPrice = page.locator('.col-lg-4 .card h5').first();
    this.firstProductDescription = page.locator('.col-lg-4 .card-text').first();
  }

  // Method to click on the Phones category
  async clickPhonesCategory() {
    await this.phonesCategory.click();
    await this.firstProductName.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
  }

  // Method to click on the Laptops category
  async clickLaptopsCategory() {
    await this.laptopsCategory.waitFor({ state: 'visible' });
    await this.laptopsCategory.click({force:true});
    await this.firstProductName.waitFor({ state: 'visible' });
    await this.page.waitForLoadState('load');
    await this.page.waitForTimeout(1100);
  }

  // Method to click on the Monitors category
  async clickMonitorsCategory() {
    await this.monitorsCategory.waitFor({ state: 'visible' });
    await this.monitorsCategory.click({force:true});
    await this.page.waitForLoadState('load');
    await this.page.waitForTimeout(1100);
  }

  async getFirstProductDetails() {
    await this.page.waitForSelector('.col-lg-4 .card');
    const productName = await this.page.locator('.col-lg-4 .card .card-title a').first().innerText();
    const productPrice = await this.page.locator('.col-lg-4 .card h5').first().innerText();
    console.log("Mobile prize is" + productPrice);
    return {
      productName,
      productPrice,
    };
  }
}
