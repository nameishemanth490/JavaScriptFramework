const LoginPage = require("../pom/LoginPage");
const HomePage = require("../pom/HomePage");
const ProductsListPage = require("../pom/ProductsListPage");

describe("Login Scenario222",function() {

    beforeEach(function(){
        browser.maximizeWindow();
        browser.url('http://automationpractice.com/index.php');
        LoginPage.login("nameishemanth@gmail.com","Testing@123");
    })

    it('TC003', ()=> {
		HomePage.clickOnMenu("dresses");
    });

    it('TC004', ()=> {
		HomePage.clickOnMenu("t-shirts");
    });

    afterEach(function() {
        HomePage.logout();
    });

});