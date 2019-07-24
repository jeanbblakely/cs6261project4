import { browser, by, element } from 'protractor';

export class Helper {

  
   /*
	   Takes in id to look at and asserts resulting text is equal to expected message
  */
  assertTextById(id: string, message: string) {
    let text = element(by.id(id)).getText();
    expect(text).toEqual(message);
  }
  
   /*
	   Takes in id to look for and clicks
  */
  clickById(id: string) {
    element(by.id(id)).click();
  }
  
  
  /*
	   Loads homepage and asserts text is Brackets App
  */
  loadHomePage() {
    browser.get('/');
    this.assertTextById('subpageTitle', 'Brackets App');
  }
  
  /*
	   Navigates to Register page and asserts text is Register Players
  */
  navigateToRegisterPage() {
    element(by.partialLinkText('Registration')).click();
    this.assertTextById('subPageTitle', 'Register Players');
  }
  
   /*
	   Navigates to Bracket page and asserts text is Brackets
  */
  navigateToBracketsPage() {
    element(by.partialLinkText('Brackets')).click();
    this.assertTextById('subpageTitle', 'Brackets');
  }
  
}
