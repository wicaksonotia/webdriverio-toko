import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class OtpScreen extends AppScreen {
    constructor () {
        super('~otpResetPassword');
    }

    //define selectors using getter methods
    private get titlePage () { return $('~titlePage'); } //otpResetPasswordTitle
    private get firstInput () { return $('~firstInput'); }
    private get secondInput () { return $('~secondInput'); }
    private get thirdInput () { return $('~thirdInput'); }
    private get fourthInput () { return $('~fourthInput'); }
    private get fifthInput () { return $('~fifthInput'); }
    private get sixthInput () { return $('~sixthInput'); }
    private get btnSubmit () { return $('~submit'); }

    private get btnResendOtp () { return $('~btnresendOtp'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isExisting()),
            {
                timeout: 20000,
                timeoutMsg: 'expected title Page not existing after 20s'
            }
        )
        // await this.logoPage.waitForDisplayed()
        // await expect(this.logoPage).toBeDisplayed()
        // await expect(this.titlePage).toBeDisplayed()
        // await expect(this.btnMasuk).toBeClickable()
        // await expect(this.helpCenter).toBeClickable()
        // await browser.pause(3000)
    }


    async inputOtp ({otp1,otp2,otp3,otp4,otp5,otp6}: {otp1:string; otp2:string; otp3:string; otp4:string; otp5:string; otp6:string;}) { //default Hanifah 123456
        await this.firstInput.setValue(otp1);
        await this.secondInput.setValue(otp2);
        await this.thirdInput.setValue(otp3);
        await this.fourthInput.setValue(otp4);
        await this.fifthInput.setValue(otp5);
        await this.sixthInput.setValue(otp6);
        if (await driver.isKeyboardShown()) {
            await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup').click();
        }
    }

    async submitSmsOtp () {
        await this.btnSubmit.click();
    }

    async resendSmsOtp () {
        await this.btnResendOtp.click();
    }
}

export default new OtpScreen();
