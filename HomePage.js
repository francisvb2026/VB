const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    // Header - use navigation element which contains the visible navigation
    this.header = this.page.locator('navigation');
    this.bookCallBtn = this.page.locator('#masthead').getByRole('link', { name: 'Book A Call' });
    this.globalDropdown = this.page.locator('#masthead').getByRole('link', { name: 'Global' });

    this.navLinks = [
      'AI Solutions',
      'Software Solutions',
      'Industries',
      'Insights',
      'About'
    ];
  }

  async goto() {
    await this.page.goto('https://satoden.jenocabrera.tech/');
  }

  async validateHeaderVisible() {
    await this.header.isVisible();
  }

  async validateNavLinks() {
    for (const link of this.navLinks) {
      await this.header.getByRole('link', { name: link }).isVisible();
    }
  }

  async validateBookCallButton() {
    await expect(this.bookCallBtn).toBeVisible();
  }

  async validateGlobalDropdown() {
    await expect(this.globalDropdown).toBeVisible();
  }

  async validateHeroSection() {
    await this.page.getByText('Empowering Your Sales, Technology & Operations').isVisible();

    await expect(this.page.getByRole('link', { name: 'Start a Project' })).toBeVisible();
  }

  async validateOurSolutionsSection() {
    await this.page.getByText('Our AI Solutions').isVisible();
  }
}

module.exports = { HomePage };
