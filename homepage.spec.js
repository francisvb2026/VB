const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test.describe('Satoden Homepage UI Validation', () => {
  test('should validate homepage UI', async ({ page }) => {
    const home = new HomePage(page);

    await test.step('load homepage', async () => {
      await home.goto();
      await expect(page).toHaveURL('https://satoden.jenocabrera.tech/');
      await expect(page).toHaveTitle('Sato Den');
    });

    await test.step('validate hero section', async () => {
      await home.validateHeroSection();
    });

    await test.step('validate header UI', async () => {
      await home.validateHeaderVisible();
      await home.validateNavLinks();
      await home.validateBookCallButton();
      await home.validateGlobalDropdown();
    });

    await test.step('validate our solutions section', async () => {
      await home.validateOurSolutionsSection();
    });
  });
});
