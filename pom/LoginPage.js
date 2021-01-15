class LoginPage {

    signIn = "=Sign in";
    username = "#email";
    password = "#passwd";
    loginButton = "#SubmitLogin";

    login(userData, pwdData) {
        browser.$(this.signIn).click();
        browser.$(this.username).clearValue();
        browser.$(this.username).addValue(userData);
        browser.$(this.password).clearValue();
        browser.$(this.password).addValue(pwdData);
        browser.$(this.loginButton).click();
    }
}
module.exports = new LoginPage();