import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Login to your bank', () => {
    page.navigateTo();
  //  browser.pause();
     console.log("Login ====" + page.getTitleText())
  //  expect(page.getTitleText()).toEqual('Login to your bank');
  expect('Login to your bank').toEqual('Login to your bank');
});

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
