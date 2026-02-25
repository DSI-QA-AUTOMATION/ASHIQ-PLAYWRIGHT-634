import BasePage from './base/BasePage.js';

class LinksPage extends BasePage {
  constructor(page) {
    super(page);
    this.homeLink = this.page.locator('#simpleLink');
    this.dynamicLink = this.page.locator('#dynamicLink');
    this.createdLink = this.page.locator('#created');
    this.noContentLink = this.page.locator('#no-content');
    this.movedLink = this.page.locator('#moved');
    this.badRequestLink = this.page.locator('#bad-request');
    this.unauthorizedLink = this.page.locator('#unauthorized');
    this.forbiddenLink = this.page.locator('#forbidden');
    this.notFoundLink = this.page.locator('#invalid-url');
    
    this.linkResponse = this.page.locator('#linkResponse');
  }

  async clickHomeLink() {
    // Use Promise.all to handle the new page opening (popup)
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.homeLink.click()
    ]);
    return newPage;
  }
}

export default LinksPage;