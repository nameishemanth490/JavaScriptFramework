const LoginPage = require("../pom/LoginPage");
const HomePage = require("../pom/HomePage");
var assert = require('chai').assert;


describe("Login Scenario111",function() {

    beforeEach(function(){
        browser.maximizeWindow();
        browser.url('http://automationpractice.com/index.php');
        LoginPage.login("nameishemanth@gmail.com","Testing@123");
        
    })

    it('TC001', ()=> {
      assert.equal('My account - My Store', browser.getTitle(), 'Title is Not Correct');
    });

    afterEach(function() {
        HomePage.logout();
    });

});