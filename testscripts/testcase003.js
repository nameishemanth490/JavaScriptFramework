describe("login scenario",
	it("TC003",()=> {
		browser.url("https://www.skillrary.com/user/login");
		browser.$("#email").addValue('hemanth.rb@testyantra.com');
		browser.$("[name='password']").addValue('MasterKey001');
		browser.debug();
		browser.$("//button[text()=' Submit ']").click();
		browser.pause(10000);
}));