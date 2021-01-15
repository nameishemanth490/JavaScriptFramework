describe("login scenario",
	it("TC003",()=> {
		browser.maximizeWindow();
		browser.url("http://www.marimallappawomenscollege.org/contactus.php?current=contactus");
		browser.$("[name='Send']").click();
		browser.pause(10000);
		let actualAlertText=browser.getAlertText();
		if(actualAlertText==="Please Enter Your Name"){
			console.log("PASS");
		} else {
			console.log("FAILED");
		}
		browser.acceptAlert();
		browser.pause(10000);
		
}));