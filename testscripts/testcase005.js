describe("login scenario",
	it("TC005",()=> {
		browser.maximizeWindow();
		browser.url("https://www.naukri.com/");
		let windowids=browser.getWindowHandles();
		for(let i=0;i<=windowids.length-1;i++){
			browser.switchToWindow(windowids[i])
			console.log(browser.getTitle());
			browser.closeWindow();
		}		
}));