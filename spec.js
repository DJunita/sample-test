// spec.js
describe('Sale Stock Test', function() {
  var welcome = browser.driver.findElement(by.css('welcome'));
  var passion = browser.driver.findElement(by.css('Our Passion'));
  var Menu = browser.driver.findElement(by.css('Menu'));
  var LetsTalk = browser.driver.findElement(by.css("Let's Talk Tea"));
  var CheckoutMenu = browser.driver.findElement(by.css('Check Out'));
  var Checkoutbutton = browser.driver.findElement(by.css('button-content wsb-button-content'));
  var email = browser.driver.findElement(by.id('email'));
  var name = browser.driver.findElement(by.id('name'));
  var address = browser.driver.findElement(by.id('address'));
  var cardType = browser.driver.findElement(by.id('card_type'));
  var cardNumber = browser.driver.findElement(by.id('card_number'));
  var cardHolderName = browser.driver.findElement(by.id('cardholder_name'));
  var VerificationCode = browser.driver.findElement(by.id('verification_code'));
  var placeOrder = browser.driver.findElement(by.css('btn btn-primary'));
  
 

  function checkout(a, b, c, d, e, f,g) {
    email.sendKeys(a);
    name.sendKeys(b);
    address.sendKeys(c);
    cardType.sendKeys(d);
    cardNumber.sendKeys(e);
    cardHolderName.sendKeys(f);
    VerificationCode.sendKeys(g);
    placeOrder.click();
  }

  beforeEach(function() {
    browser.get('http://www.practiceselenium.com/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual("We're passionate about tea.");
  });

  it('should link to welcome page', function() {
    welcome.click();
    expect(browser.getTitle()).toEqual("We're passionate about tea.");
  });

  it('should link to passion page', function() {
    passion.click();
    expect(browser.getTitle()).toEqual('Our Passion');
  });

    it('should link menu page', function() {
    Menu.click();
    expect(browser.getTitle()).toEqual('Our Passion');
  });

  it('should link Lest talk page', function() {
    LetsTalk.click();
    expect(browser.getTitle()).toEqual("Let's Talk Tea");
  });

  it('should show warnibg message the payment info should valid format', function() {
    expect(browser.getTitle()).toEqual('Pay with Credit Card or Log In');
    CheckoutMenu.click();
    checkout('a', 'b', 'c',' d', 'e',' f','g');
    expect(browser.getTitle()).toEqual('Your input is not valid please check the format');
  });

  it('should Give a warning message. Field can not be blank', function() {
    CheckoutMenu.click();
    expect(browser.getTitle()).toEqual('Pay with Credit Card or Log In');
    
    checkout('','','','','','','');
    expect(browser.getTitle()).toEqual('Your input is not valid please check the format');
  });

});