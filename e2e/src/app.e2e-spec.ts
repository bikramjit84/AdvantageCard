import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "Login to your bank" msg header', () => {
    page.navigateTo();
    
     expect(page.getLoginLabel()).toEqual('Login to your bank');
    
});

it('should display "User name input" in login page', () => {
  page.navigateTo();
  
    expect(page.getUserNameElementPresent()).toBe(true);
  
});

it('should display "Passwod input" in login page', () => {
  page.navigateTo();
  
    expect(page.getPwdElementPresent()).toBe(true);
  
});

it('should display "Login button" in login page', () => {
  page.navigateTo();
  
    expect(page.getLoginBtnElementPresent()).toBe(true);
  
});

it('should display "User name < 4 charcter" for invalid user name', () => {
  page.navigateTo();
  
    expect(page.getUserNameError()).toEqual(['User name must be at least 4 character long.']);
  
});

it('should display "Password < 5 charcter" for invalid pwd', () => {
  page.navigateTo();
 
    expect(page.getPwdError()).toEqual(['Password name must be at least 5 character long.']);
  
});


it('should display Login is not successful for invalid credential', () => {
  page.navigateTo();
 
    expect(page.invalidCredential()).toEqual(['Login is not successful.']);
  
});



it('should display "Card Detail" with valid credential', () => {
  page.navigateTo();
  
    expect(page.validLogin()).toEqual("http://localhost:4200/selectCard")
  
});

it('should display "Pay button" in Card Detail page', () => {
  page.navigateTo();
  
    expect(page.payBtnPresent()).toBe(true);
  
});

/*

it('should display Error message" if pay button is click without selecting card.', () => {
  page.navigateTo();
  
//    expect(page.clickWithoutSelectingCard()).toEqual("Please select a card");
expect(page.clickWithoutSelectingCard()).toEqual("Pay");
  
});
*/



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
