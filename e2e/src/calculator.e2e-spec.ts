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
    text = element(by.id('digit-1')).element(by.css('option:checked')).getText();
    expect(text).toEqual('Black');
    text = element(by.id('digit-2')).element(by.css('option:checked')).getText();
    expect(text).toEqual('Black');
    text = element(by.id('digit-3')).element(by.css('option:checked')).getText();
    expect(text).toEqual('Black');
    
    text = element(by.id('multiplier')).element(by.css('option:checked')).getText();
    expect(text).toEqual('Black');
    text = element(by.id('tolerance')).element(by.css('option:checked')).getText();
    expect(text).toEqual('Brown');

  }); 
});
