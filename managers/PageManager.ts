import { Page } from '@playwright/test';
import { NavbarPage } from '../pages/NavbarPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactPage } from '../pages/ContactPage';
import { CategoryPage } from '../pages/CategoryPage'; 

export class PageManager {
  private page: Page;
  private navbarPage: NavbarPage;
  private loginPage: LoginPage;
  private contactPage: ContactPage;
  private categoryPage: CategoryPage;

  constructor(page: Page) {
    this.page = page;
    this.navbarPage = new NavbarPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.contactPage = new ContactPage(this.page);
    this.categoryPage = new CategoryPage(this.page);
  }

  getNavbarPage(): NavbarPage {
    return this.navbarPage;
  }

  getLoginPage(): LoginPage {
    return this.loginPage;
  }
  getContactPage(): ContactPage {
    return this.contactPage;
  }
  getCategoryPage(): CategoryPage { 
    return this.categoryPage;
  }
}
