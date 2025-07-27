import { expect } from '@playwright/test';

import {
  menuLinksTestCases,
  dropdownsTestCases,
} from '@utils/datafactory/nav.tests';
import { test } from '@utils/fixtures';

test.describe('Validate Navigation Menu', () => {
  menuLinksTestCases.forEach(
    ({ id, linkName, pathToStart, expectedURL, expectedText }) => {
      test(`${id}: Test "${linkName}" Link Navigation`, async ({
        basePage,
      }) => {
        await basePage.navigateToPath(pathToStart);
        await basePage.clickElement(basePage.link(linkName));
        await basePage.verifyURL(expectedURL);
        if (expectedText) {
          await basePage.verifyPageContainsText(expectedText);
        }
      });
    },
  );

  dropdownsTestCases.forEach(
    ({ id, dropdownTitle, dropdownItemsCount, dropdownItemsTitles }) => {
      test(`${id} Validate ${dropdownTitle} Dropdown`, async ({ basePage }) => {
        await basePage.navigateToPath('/');
        await basePage.clickElement(basePage.dropdown(dropdownTitle));
        await expect(basePage.dropdownMenu).toBeVisible();
        expect(await basePage.dropdownItems.count()).toEqual(
          dropdownItemsCount,
        );
        await expect(basePage.dropdownItems).toHaveText(dropdownItemsTitles);
      });
    },
  );
});
