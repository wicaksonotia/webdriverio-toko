import AppScreen from '../../AppScreen';
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
    // private get titlePage () { return $('~passcodeInputTitle') } //Masukkan Kode Keamanan
    private get titlePage () { return $('~passcodeValidateTitle') } //Masukkan Kode Keamanan
    private get inputCode () { return $('~firstInput') }
    private get firstInput () { return $('~firstInput') }
    private get secondInput () { return $('~secondInput') }
    private get thirdInput () { return $('~thirdInput') }
    private get fourthInput () { return $('~fourthInput') }
    private get fifthInput () { return $('~fifthInput') }
    private get sixthInput () { return $('~sixthInput') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
        async () => (await (this.titlePage).isExisting()),
        {
            timeout: 20000,
            timeoutMsg: 'expected title Page not existing after 20s'
        })
    }

    async inputSecurityCode ({sc1,sc2,sc3,sc4,sc5,sc6}: {sc1:string; sc2:string; sc3:string; sc4:string; sc5:string; sc6:string;}) {
        await this.firstInput.setValue(sc1);
        await this.secondInput.setValue(sc2);
        await this.thirdInput.setValue(sc3);
        await this.fourthInput.setValue(sc4);
        await this.fifthInput.setValue(sc5);
        await this.sixthInput.setValue(sc6);
    }
}

export default new SecurityCodeScreen();
