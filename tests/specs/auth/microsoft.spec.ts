import screen from '../page';

//sub screen containing specific selectors and methods for a specific screen
class LoginMicrosoftPage extends screen {

    //define selectors using getter methods
    get logo () { return $('#lightbox > div:nth-child(2) > img') }
    get loginHeader () { return $('#loginHeader') }

    get inputEmail () { return $('#i0116') }
    get btnNext () { return $('#idSIButton9') }

    //https://stsprd03.pmiapps.biz/
    get pmiappsHeader () { return $('#header') }
    get pmiappsUserName () { return $('#userNameInput') }
    get pmiappsPassword () { return $('#passwordInput') }
    get pmiappsBtnNext () { return $('#submitButton') }

    //Stay signed in? /login.srf
    get headerStaySignedin () { return $('div.row.text-title') }
    get checkboxDontshowagain () { return $('#KmsiCheckboxField') }
    get btnYes () { return $('#idSIButton9') }
    get btnNo () { return $('#idBtn_Back') }

    //https://ayo-principal-dev.auth.ap-southeast-1.amazoncognito.com/
    get envTitlePage () { return $('form > div > span') } //Sign in with your corporate ID
    get btnEnv () { return $('form > div > input') }

    //SignOut
    get btnMeInitials () { return $('#meInitialsButton') }
    get btnSignOut () { return $('#mectrl_body_signOut') }

    get headerOfficeSignoutPage () { return $('#personalization-header') }

    //a method to encapsule automation code to interact with the screen
    async microsoftPage () {
        await this.logo.waitForDisplayed({timeout:6000})
        await expect(this.logo).toBeDisplayed({timeout:5000})
        await expect(this.loginHeader).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('login.microsoftonline.com/')
        await browser.pause(3000)
    }

    async loginMicrosoft (pmintlEmail) { //hanifah.budianto@pmintl.net
        await this.inputEmail.setValue(pmintlEmail)
        await this.btnNext.click()
    }

    async pmiappsPage () {
        await this.pmiappsHeader.waitForDisplayed({timeout:10000})
        await expect(this.pmiappsHeader).toBeDisplayed({timeout:5000})
        await expect(this.pmiappsHeader).toHaveText('ADFS Logon screen')
        await expect(browser).toHaveUrlContaining('pmiapps.biz/')
        await browser.pause(3000)
    }

    async signInPmiapps (username,password) { //PMI\hbudiant1 Hani_2525
        await this.pmiappsUserName.clearValue()
        await this.pmiappsUserName.setValue(username)
        await this.pmiappsPassword.setValue(password)
        await this.pmiappsBtnNext.click()
    }

    async selectEnvPage () {
        await this.envTitlePage.waitForDisplayed({timeout:6000})
        await expect(this.envTitlePage).toBeDisplayed({timeout:6000})
        await expect(browser).toHaveUrlContaining('ayo-principal-')
        await this.btnEnv.click()
        await browser.pause(3000)
    }

    async signOutMicrosoft () {
        await this.btnMeInitials.click()
        await this.btnSignOut.click()
    }

    async officeSignoutPage () {
        await this.headerOfficeSignoutPage.waitForDisplayed({timeout:6000})
        await expect(this.headerOfficeSignoutPage).toBeDisplayed({timeout:6000})
        await expect(this.headerOfficeSignoutPage).toHaveTextContaining('signed out now.')
        await expect(browser).toHaveUrlContaining('?ref=logout')
        await browser.pause(3000)
    }

    async staySignedInPage () {
        await this.headerStaySignedin.waitForDisplayed({timeout:6000})
        await expect(this.headerStaySignedin).toBeDisplayed({timeout:6000})
        await expect(this.headerStaySignedin).toHaveTextContaining('Stay signed in?')
        await expect(browser).toHaveUrlContaining('login.srf')
        await browser.pause(3000)
    }

    async staySinInYes () {
        await this.btnYes.click()
    }

    async staySinInNo () {
        await this.btnNo.click()
    }

    //overwrite specifc options to adapt it to screen object
    open () {
        return super.openOffice();
    }
}

export default new LoginMicrosoftPage();
