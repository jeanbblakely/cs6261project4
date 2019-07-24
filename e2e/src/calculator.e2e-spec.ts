import { browser, logging, element, by } from 'protractor';
import { Helper } from './helper.po';

describe('Resistance Calculator', () => {
  beforeEach(() => {
    let helper: Helper;
  });    

  it('should load home page and assert defaults', () => {
    browser.get('/');
    let text = element(by.id('resistance')).getText();
    expect(text).toEqual('Resistance: 0 ohms +/-1%');

  }); 
});
