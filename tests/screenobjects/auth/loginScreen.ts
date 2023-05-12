import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class LoginScreen extends AppScreen {
    constructor () {
        super('~loginPage');
    }

    //define selectors using getter methods
    private get updateLanguage () { return $('~updateLanguage');}
    private get logoImage () { return $('~logoImage');}
    private get inputPhoneNumber () { return $('~phoneLogin');}
    private get btnMasuk () { return $('~submitLogin');}
    private get btnDaftarDisini () { return $('~toRegisterPage');}
    private get helpCenter () { return $('~buttonBude');}
    private get buttonPhone () { return $('~buttonPhone');}

    //a method to encapsule automation code to interact with the page
    async loginTokoPage () {
        await browser.waitUntil(
            async () => (await (this.inputPhoneNumber).isExisting()),
            {
                timeout: 20000,
                timeoutMsg: 'expected logo Page not existing after 20s'
            }
        )
        // await this.logoPage.waitForDisplayed()
        // await expect(this.logoPage).toBeDisplayed()
        await expect(this.inputPhoneNumber).toBeDisplayed()
        // await expect(this.btnMasuk).toBeClickable()
        // await expect(this.helpCenter).toBeClickable()
        await browser.pause(3000)
    }

    async loginToko ({ phonenumber }: { phonenumber:string; }) {
        await this.inputPhoneNumber.setValue(phonenumber)
        if (await driver.isKeyboardShown()) {
            await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout').click();
        }
    }

    async masuk () {
        await this.btnMasuk.click();
    }

    async chatBude () {
        await this.helpCenter.click();
    }

    async registerToko () {
        await this.btnDaftarDisini.click();
    }
}

export default new LoginScreen();
