import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class forgotSecurityCodeScreen extends AppScreen {
    constructor () {
        super('');
    }
    //define selectors using getter methods
    private get welcomeTitle () { return $('~') }
    private get inputCode () { return $('~') }
    private get btnSubmit () { return $('~submit') }


    //a method to encapsule automation code to interact with the page
    async welcome () {
        await this.welcomeTitle.waitForDisplayed()
        await expect(this.welcomeTitle).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('login')
        await browser.pause(3000)
    }

    async loginInternal ({ securitycode }: {securitycode:string}) {
        await this.inputCode.setValue(securitycode);
        await this.btnSubmit.click();
    }
}

export default new forgotSecurityCodeScreen();