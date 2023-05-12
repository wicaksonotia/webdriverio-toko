import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class HelpCenterScreen extends AppScreen {
    constructor () {
        super('');
    }
    //define selectors using getter methods
    private get titlePage () { return $('~') }
    private get inputKodeToko () { return $('~') }
    private get inputNamaToko () { return $('~') }
    private get inputPemilikToko () { return $('~') }
    private get inputNoTelp () { return $('~') }
    private get inputLokasi () { return $('~') }
    private get selectKategoriPertanyaan () { return $('~') }
    private get inputDetailPertanyaan () { return $('~') }
    private get checkboxTnc () { return $('~') }
    private get btnKirim () { return $('~') }

    //a method to encapsule automation code to interact with the page
    async helpCenterPage () {
        await this.titlePage.waitForDisplayed()
        await expect(this.titlePage).toBeDisplayed()
        await expect(this.btnKirim).toBeClickable()
    }
    
    async submitHelpCenter ({ kodeToko,namaToko,pemilikToko,noTelp,lokasi,kategoriPertanyaan,detailPertanyaan }: {kodeToko:string; namaToko:string; pemilikToko:string; noTelp:string; lokasi:string; kategoriPertanyaan:string; detailPertanyaan:string; }) {
        await this.inputKodeToko.setValue(kodeToko)
        await this.inputNamaToko.setValue(namaToko)
        await this.inputPemilikToko.setValue(pemilikToko)
        await this.inputNoTelp.setValue(noTelp)
        await this.inputLokasi.setValue(lokasi)
        await this.selectKategoriPertanyaan.setValue(kategoriPertanyaan)
        await this.inputDetailPertanyaan.setValue(detailPertanyaan)
        await this.checkboxTnc.click();
        await this.btnKirim.click();
    }
}

export default new HelpCenterScreen();