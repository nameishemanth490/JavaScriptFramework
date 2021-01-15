describe("login scenario",
	it("TC002",()=> {
		browser.url("https://mail.protonmail.com/login");
		browser.$("#usernamechetana").addValue('hemanth190');
		browser.$("#password").addValue('Testing@123');
		browser.$("#login_btn").click();
		browser.$("//a[contains(.,'hemanth190')]").click();
		browser.$("=LOGOUT").click();
}));