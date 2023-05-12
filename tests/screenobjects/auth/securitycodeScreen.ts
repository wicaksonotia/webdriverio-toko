import AppScreen from '../AppScreen';
// import Gestures from '../../helpers/Gestures';
// import Constants from '../../helpers/Constants';
// import Utils from '../../helpers/Utils';

//sub screen containing specific selectors and methods for a specific screen
class SecurityCodeScreen extends AppScreen {
    constructor () {
        // super('~passcodeInput');
        super('~passcodeValidate');
    }

    //define selectors using getter methods
    private get titlePage () { return $('~passcodeValidateTitle') } //Masukkan Kode Keamanan
    private get inputCode () { return $('~firstInput') }
    private get firstInput () { return $('~firstInput') }
    private get secondInput () { return $('~secondInput') }
    private get thirdInput () { return $('~thirdInput') }
    private get fourthInput () { return $('~fourthInput') }
    private get fifthInput () { return $('~fifthInput') }
    private get sixthInput () { return $('~sixthInput') }
    private get keyboardNumber2 () { return $('~keyboardNumber-1') } //array 1-9,11
    private get keyboardNumber5 () { return $('~keyboardNumber-4') }
    private get keyboardNumber0 () { return $('~keyboardNumber-10') }
    private get keyboardNumber1 () { return $('~keyboardNumber-0') }
    private get btnSubmit () { return $('~submit') }

    private get btnForgotSecurityCode () { return $('~forgotSecurityCode')}

    //a method to encapsule automation code to interact with the page
    async page () {
        // await browser.waitUntil(
        //     async () => (await (this.titlePage).isExisting()),
        //     {
        //         timeout: 20000,
        //         timeoutMsg: 'expected title Page not existing after 20s'
        //     }
        // )
        await this.firstInput.waitForDisplayed()
        // await expect(this.titlePage).toBeDisplayed()
        // await expect(this.titlePage).toHaveText('Masukkan Kode Keamanan')
        // await expect(this.btnSubmit).toBeClickable()
        // await expect(this.btnForgotSecurityCode).toBeClickable()
    }

    async inputSecurityCode ({sc1,sc2,sc3,sc4,sc5,sc6}: {sc1:string; sc2:string; sc3:string; sc4:string; sc5:string; sc6:string;}) {  //Hanifah: 252525
        // await this.inputCode.setValue(securitycode)
        // await this.inputCode.click()
        // await this.keyboardNumber2.click()
        // await this.keyboardNumber5.click()
        // await this.keyboardNumber2.click()
        // await this.keyboardNumber5.click()
        // await this.keyboardNumber2.click()
        // await this.keyboardNumber5.click()
        // await this.keyboardNumber0.click()
        // await this.keyboardNumber1.click()
        // await this.keyboardNumber1.click()
        // await this.keyboardNumber1.click()
        // await this.keyboardNumber1.click()
        // await this.keyboardNumber0.click()
        await this.firstInput.setValue(sc1);
        await this.secondInput.setValue(sc2);
        await this.thirdInput.setValue(sc3);
        await this.fourthInput.setValue(sc4);
        await this.fifthInput.setValue(sc5);
        await this.sixthInput.setValue(sc6);
        if (await driver.isKeyboardShown()) {
            await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup').click();
        }
    }

    async inputSecurityCode2 ({sc1,sc2,sc3,sc4,sc5,sc6}: {sc1:string; sc2:string; sc3:string; sc4:string; sc5:string; sc6:string;}) {  //Hanifah: 252525
        // await this.inputCode.setValue(securitycode)
        // await this.inputCode.click()
        await this.firstInput.setValue(sc1);
        await this.secondInput.setValue(sc2);
        await this.thirdInput.setValue(sc3);
        await this.fourthInput.setValue(sc4);
        await this.fifthInput.setValue(sc5);
        await this.sixthInput.setValue(sc6);
        if (await driver.isKeyboardShown()) {
            await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup').click();
        }
    }

    async submit () {
        await this.btnSubmit.waitForDisplayed()
        await expect(this.btnSubmit).toBeDisplayed()
        await this.btnSubmit.click();
    }

    async forgotSecurityCode () {
        await this.btnForgotSecurityCode.click();
    }
}

export default new SecurityCodeScreen();
