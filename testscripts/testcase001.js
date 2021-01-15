describe('Login Scenario',
	it('TC001', ()=> {
		browser.maximizeWindow();
		browser.url('https://demo.actitime.com/');
		browser.$('#username').addValue('admin');
		browser.$('[name="pwd"]').addValue('manager');		
		browser.$('#loginButton').click();
		browser.$('#logoutLink').click();
}));