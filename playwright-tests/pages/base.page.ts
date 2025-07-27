import { Page, Locator, test, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly logo: Locator;
  // eslint-disable-next-line no-unused-vars
  readonly link: (linkTitle: string) => Locator;
  // eslint-disable-next-line no-unused-vars
  readonly dropdown: (dropdownTitle: string) => Locator;
  readonly dropdownMenu: Locator;
  readonly dropdownItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole('img', { name: 'Logo' });
    this.link = (linkTitle: string) => {
      return this.page.getByRole('button', { name: `${linkTitle}` });
    };
    this.dropdown = (dropdownTitle: string) => {
      return page.getByRole('button', { name: `${dropdownTitle}` });
    };
    this.dropdownMenu = this.page.getByRole('menu');
    this.dropdownItems = this.page.getByRole('menuitem');
  }

  async navigateToPath(path: string) {
    await test.step(`Navigate to path: ${path}`, async () => {
      await this.page.goto(path);
      await this.page.waitForLoadState('networkidle');
    });
  }

  async clickElement(elementLocator: Locator) {
    await test.step(`Click the "${elementLocator}" link`, async () => {
      await elementLocator.click();
    });
  }

  async verifyURL(expectedURL: string) {
    await test.step(`Verify URL is "${expectedURL}"`, async () => {
      await expect(this.page).toHaveURL(expectedURL);
    });
  }

  async verifyPageContainsText(expectedText: string) {
    await test.step(`Verify page contains text "${expectedText}"`, async () => {
      await expect(
        this.page.getByText(expectedText, { exact: true }),
      ).toBeVisible();
    });
  }
}
