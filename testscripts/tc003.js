const LoginPage = require("../pom/LoginPage");
const HomePage = require("../pom/HomePage");
const ProductsListPage = require("../pom/ProductsListPage");

describe("Login Scenario333",function() {

    beforeEach(function(){
        browser.maximizeWindow();
        browser.url('http://automationpractice.com/index.php');
        LoginPage.login("nameishemanth@gmail.com","Testing@123");
    })

    it('TC005', ()=> {
		HomePage.clickOnMenu("dresses");
    });

    it('TC006', ()=> {
		HomePage.clickOnMenu("t-shirts");
    });

    afterEach(function() {
        HomePage.logout();
    });

});