describe("TakeScreenshot",
	it("TC006",()=> {
		browser.maximizeWindow();
		browser.url("https://www.google.com/");
		browser.saveScreenshot("./errorShots/abc.png");
}));