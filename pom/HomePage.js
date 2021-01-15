class HomePage {

    signOut = "=Sign out";
    womenMenu = "=Women";
    dressesMenu = "(//a[.='Dresses'])[2]";
    tShirtsMenu = "(//a[.='T-shirts'])[2]";


    logout() {
        browser.$(this.signOut).click();
    }

    clickOnMenu(menuName) {
        menuName = menuName.toLowerCase();
        switch (menuName) {
            case "dresses":browser.$(this.dressesMenu).click();
                           break;
            case "women":browser.$(this.womenMenu).click();
                         break;
            case "t-shirts":browser.$(this.womenMenu).click();
                            break;
        }
    }


}
module.exports = new HomePage();