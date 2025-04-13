import { test as baseTest } from '@playwright/test';
import { NavbarPage } from '../pages/NavbarPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactPage } from '../pages/ContactPage';
import { CategoryPage } from '../pages/CategoryPage';
import { PageManager } from '../managers/PageManager';

type MyFixtures = {
    pageManager: PageManager;
    navbarPage: NavbarPage;
    loginPage: LoginPage;
    contactPage: ContactPage;
    categoryPage: CategoryPage;
  };
  
  export const test = baseTest.extend<MyFixtures>({
    pageManager: async ({ page }, use) => {
      const pageManager = new PageManager(page);
      await use(pageManager);
    },
  
    navbarPage: async ({ pageManager }, use) => {
        await use(pageManager.getNavbarPage());
    },
    contactPage: async ({ pageManager }, use) => {
      await use(pageManager.getContactPage());
    },
    loginPage: async ({ pageManager }, use) => {
        await use(pageManager.getLoginPage());
    },
    categoryPage: async ({ pageManager }, use) => { 
        await use(pageManager.getCategoryPage());
      },
  });

export { expect } from '@playwright/test';
