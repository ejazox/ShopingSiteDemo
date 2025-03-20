// src/tests/category.test.ts
import { test, expect } from './BaseTest'; // Assuming you have a BaseTest file
import { PageManager } from '@managers/PageManager';

test.describe('Category Tests', () => {
  test.beforeEach(async ({ pageManager,page }) => {
    await page.goto('/'); 
  });

  test('Verify Phones category', async ({ categoryPage }) => {
    // Click on Phones category
    await categoryPage.clickPhonesCategory();
    const { productName, productPrice } = await categoryPage.getFirstProductDetails();
    expect(productName).toBe('Samsung galaxy s6'); // Modify as needed
    expect(productPrice).toBe('$360'); // Modify as needed
  });

  test('Verify Laptops category', async ({ categoryPage }) => {
    // Click on Laptops category
    await categoryPage.clickLaptopsCategory();
    const { productName, productPrice } = await categoryPage.getFirstProductDetails();
    expect(productName).toBe('Sony vaio i5'); // Modify as needed
    expect(productPrice).toBe('$790');
  });

  test('Verify Monitors category', async ({ categoryPage }) => {
    // Click on Monitors category
    await categoryPage.clickMonitorsCategory();
    const { productName, productPrice } = await categoryPage.getFirstProductDetails();
    expect(productName).toBe('Apple monitor 24'); // Modify as needed
    expect(productPrice).toBe('$400');
  });
});
