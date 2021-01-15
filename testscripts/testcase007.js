describe("Element Screenshot",
	it("TC007",()=> {
		browser.maximizeWindow();
		browser.url("https://demo.actitime.com/");
		browser.$("#loginButton").saveScreenshot("./errorShots/login.png");
}));