import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class VerifikasiPerangkatScreen extends AppScreen {
    constructor () {
        super('');
    }
    //define selectors using getter methods
    private get titlePage () { return $('#ayoLogin > div > div > div.top > div.big-title') }
    private get email () { return $('#ayoLogin > div > div > div.top > div:nth-child(2)') }

    private get inputCode () { return $('form/div[1]/mat-form-field/div/div[1]/div/input') }
    private get btnVerifikasiPerangkat () { return $('#btn-verifikasi') }

    //a method to encapsule automation code to interact with the page
    async verifAccountPage ({ email }: {email:string}) {
        await this.titlePage.waitForDisplayed()
        await expect(this.titlePage).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('device/authentication')
        await expect(this.titlePage).toHaveText('Verifikasi Akun')
        await expect(this.email).toHaveTextContaining(email) //hanifah.budianto@contracted.sampoerna.com
        await browser.pause(5000)
    }

    async verif ({ code }: {code:string}) {
        await this.inputCode.setValue(code);  //default 123456
        await this.btnVerifikasiPerangkat.click();
    }
}

export default new VerifikasiPerangkatScreen();