import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class SelectAgenScreen extends AppScreen {
    constructor() {
        super('~wSNearby');
    }

    //define selectors using getter methods
    private get btnBack() { return $('~btnBack') }
    private get navbarTitle() { return $('~navbarTitle') }

    private get selectRb() { return $('~expandMore') }
    private get rbKodeAgen() { return $('~Kode_Agen') }
    private get btnPilih() { return $('~pickMitra') }
    private get searchKodeAgen() { return $('~cariWSAgent') }
    private get chooseAgen() { return $('~buttonPilihMitraTerdekat') }
    private get btnTidak() { return $('~buttonConfirmNo') }
    private get btnYa() { return $('~buttonConfirmYes') }
    private get btnPilihMitra() { return $('~buttonPilihKodeAgenLabel') }
    private get buttonKonfirmasi() { return $('~buttonKonfirmasi') }

    //a method to encapsule automation code to interact with the page
    async page() {
        await this.searchKodeAgen.waitForDisplayed()
        await expect(this.searchKodeAgen).toBeDisplayed()
        await expect(this.chooseAgen).toBeDisplayed()
    }

    async searchAgen({ kodeAgen }: { kodeAgen: string; }) {
        await this.searchKodeAgen.waitForDisplayed()
        await expect(this.searchKodeAgen).toBeDisplayed()
        await this.selectRb.click();

        await this.rbKodeAgen.click();
        await this.btnPilih.click();
        await this.searchKodeAgen.setValue(kodeAgen);
        await driver.pause(3000)
    }

    async selectAgen() {
        await this.chooseAgen.click();
    }

    async confirmPairing() {
        await this.btnYa.click();
        // await this.btnPilihMitra.click();
        await this.buttonKonfirmasi.click();
    }
}

export default new SelectAgenScreen();
