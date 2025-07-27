import { expect } from '@playwright/test';

import { test } from '@utils/fixtures';

test('should display complete navigation menu', async ({
  page,
  landingPage,
}) => {
  await page.goto('/');
  await expect(landingPage.link('Home')).toBeVisible();
  await expect(landingPage.dropdown('Mentorship')).toBeVisible();
  await expect(landingPage.dropdown('Programmes')).toBeVisible();
  await expect(landingPage.link('Events')).toBeVisible();
  await expect(landingPage.link('Blog')).toBeVisible();
  await expect(landingPage.link('Jobs')).toBeVisible();
  await expect(landingPage.dropdown('About Us')).toBeVisible();
});

test('Join Slack button navigates to Slack invite in the new page', async ({
  page,
  landingPage,
}) => {
  await page.goto('/');
  const newPagePromise = page.waitForEvent('popup');
  await landingPage.joinSlackButton.click();
  const newPage = await newPagePromise;

  await newPage.waitForLoadState();
  expect(newPage.url()).toContain('slack.com');
  await expect(newPage).toHaveTitle(/Slack/i);
});
