import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getLoginLabel(): Promise<string> {
    return element(by.css('app-login div form h1')).getText() as Promise<
      string
    >;
  }

  getUserNameElementPresent(): Promise<boolean> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    return el.isPresent() as Promise<boolean>;
  }

  getPwdElementPresent(): Promise<boolean> {
    var el = element(by.css('app-login div form [formControlName="password"]'));

    return el.isPresent() as Promise<boolean>;
  }
  getLoginBtnElementPresent(): Promise<boolean> {
    var el = element(by.css('app-login div form [type="submit"]'));

    return el.isPresent() as Promise<boolean>;
  }

  getUserNameError(): Promise<string> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('ABC');
    var errorMsg = element(by.css('app-login div form'))
      .all(by.className('alert alert-danger'))
      .getText();
    return errorMsg as Promise<string>;
  }

  getPwdError(): Promise<string> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('ABCDD');

    el = element(by.css('app-login div form [formControlName="password"]'));

    el.sendKeys('pwd');

    var errorMsg = element(by.css('app-login div form'))
      .all(by.className('alert alert-danger'))
      .getText();
    return errorMsg as Promise<string>;
  }

  invalidCredential(): Promise<string> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('ABCDssD');

    el = element(by.css('app-login div form [formControlName="password"]'));

    el.sendKeys('pwdsadada');

    var loginBtn = element(by.css('app-login div form [type="submit"]'));
    loginBtn.click();

    var errorMsg = element(by.css('app-login div form'))
      .all(by.className('alert alert-danger'))
      .getText();
    return errorMsg as Promise<string>;
  }

  validLogin(): Promise<string> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('user1');

    el = element(by.css('app-login div form [formControlName="password"]'));

    el.sendKeys('password');

    var loginBtn = element(by.css('app-login div form [type="submit"]'));
    loginBtn.click();

    // var payBtn = element(by.css('app-card-payment div input [value="Pay"]'));

    return browser.getCurrentUrl() as Promise<string>;
  }

  payBtnPresent(): Promise<boolean> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('user1');

    el = element(by.css('app-login div form [formControlName="password"]'));

    el.sendKeys('password');

    var loginBtn = element(by.css('app-login div form [type="submit"]'));
    loginBtn.click();

    var payBtn = element(by.css('app-card-payment [type="button"]'));

    return payBtn.isPresent() as Promise<boolean>;
  }

  clickWithoutSelectingCard(): Promise<string> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('user1');

    el = element(by.css('app-login div form [formControlName="password"]'));

    el.sendKeys('password');

    var loginBtn = element(by.css('app-login div form [type="submit"]'));
    loginBtn.click();

    browser.sleep(10000);
     var payBtn = element(by.xpath('//input[@value="Pay"]'));

    payBtn.click();

    return element(by.css('app-card-payment label')).getText() as Promise<string>;
  }
 

  payClickAfterSelectingCard(): Promise<string> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('user1');

    el = element(by.css('app-login div form [formControlName="password"]'));

    el.sendKeys('password');

    var loginBtn = element(by.css('app-login div form [type="submit"]'));
    loginBtn.click();

    browser.sleep(10000);
    var selectCard = element(by.xpath("(//input[@name='selectedBankIndex'])[3]"));
    selectCard.click();
 
     var payBtn = element(by.xpath('//input[@value="Pay"]'));

    payBtn.click();

    return  browser.getCurrentUrl() as Promise<string>;
  }

  
  payClickAfterSelectingCardAndCheckMsg(): Promise<string> {
    var el = element(by.css('app-login div form [formControlName="username"]'));

    el.sendKeys('user1');

    el = element(by.css('app-login div form [formControlName="password"]'));

    el.sendKeys('password');

    var loginBtn = element(by.css('app-login div form [type="submit"]'));
    loginBtn.click();

    browser.sleep(10000);
    var selectCard = element(by.xpath("(//input[@name='selectedBankIndex'])[3]"));
    selectCard.click();
 
     var payBtn = element(by.xpath('//input[@value="Pay"]'));

    payBtn.click();

    
    return   element(by.css('app-payment-result p')).getText() as Promise<string>;
  }

}


 
