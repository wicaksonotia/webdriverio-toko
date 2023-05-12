import screen from '../page';

//sub screen containing specific selectors and methods for a specific screen
class VerifikasiPerangkatPage extends screen {

    //define selectors using getter methods
    get titlePage () { return $('#ayoLogin > div > div > div.top > div.big-title') }
    get email () { return $('#ayoLogin > div > div > div.top > div:nth-child(2)') }

    get inputCode () { return $('form/div[1]/mat-form-field/div/div[1]/div/input') }
    get btnVerifikasiPerangkat () { return $('#btn-verifikasi') }

    //a method to encapsule automation code to interact with the screen
    async verifAccountPage (email) {
        await this.titlePage.waitForDisplayed({timeout:15000})
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
        await expect(browser).toHaveUrlContaining('device/authentication')
        await expect(this.titlePage).toHaveText('Verifikasi Akun')
        await expect(this.email).toHaveTextContaining(email) //hanifah.budianto@contracted.sampoerna.com
        await browser.pause(5000)
    }

    async verif (code) {
        await this.inputCode.setValue(code);  //default 123456
        await this.btnVerifikasiPerangkat.click();
    }

    //overwrite specifc options to adapt it to screen object
    open () {
        return super.open('');
    }
}

export default new VerifikasiPerangkatPage();
