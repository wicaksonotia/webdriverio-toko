import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class PoinScreen extends AppScreen {
    constructor () {
        super('~wsSaya');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get tabDetailMitra () { return $('~detailToko') }
    private get wsName () { return $('~wsName') }
    private get wsAddress () { return $('~wsAddress') }
    private get btnLihatMap () { return $('~buttonLihatMap') }
    private get btnKontakMitra () { return $('~buttonKontakMitra') }

    private get tabPoinKamu () { return $('~poinSaya') }
    private get tabPoinKamuScreen () { return $('~pointSaya') }
    private get currentPoin () { return $('~currentPoin') }
    private get expiredDatePoin () { return $('~expiredDatePoin') }

    private get tabTukar () { return $('~tabTukar') }
    private get emptyStateTukar () { return $('~emptyStateTukar') } //Tab Tukar "Tidak Ada Katalog Saat Ini"

    private get tabRiwayat () { return $('~tabRiwayat') }
    private get emptyStateRiwayat () { return $('~emptyStateRiwayat') } //Tab Riwayat "Tidak Ada History Katalog Saat Ini"
    private get poinHistoryWholesaler () { return $('(//android.view.ViewGroup[@content-desc="listRiwayatPoin"])[1]') }
    private get listRiwayat () { return $('~riwayatPoin')}

    private get btnUnmatch () { return $('~btnUnmatch') }
    private get titlePopupUnmatch () { return $('~berhentiBerlanggananWS') }
    private get btnTidak () { return $('~buttonConfirmNo') }
    private get btnYa () { return $('~buttonConfirmYes') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.tabDetailMitra.waitForDisplayed()
        await expect(this.tabDetailMitra).toBeDisplayed()
        await expect(this.wsName).toBeDisplayed()
        await expect(this.wsAddress).toBeDisplayed()
        // await this.tabDetailToko.isEnabled()
        // await this.tabPoinSaya.isEnabled()
    }

    async getDetailToko () {
        console.log('Kode Agen: '+await this.wsName.getText())
        console.log('Alamat: '+await this.wsAddress.getText())
    }

    async poinKamu () {
        await this.tabPoinKamu.click();
        await this.tabPoinKamuScreen.waitForDisplayed()
        await expect(this.tabPoinKamuScreen).toBeDisplayed()
        await this.tabTukar.isEnabled()
        await this.tabRiwayat.isEnabled()
    }

    async getDetailPoinSaya () {
        console.log('Current Poin: '+await this.currentPoin.getText())
        console.log(await this.expiredDatePoin.getText())
    }

    async viewTabRiwayat () {
        await this.tabRiwayat.waitForExist()
        await this.tabRiwayat.click()
        await browser.pause(2000)
        await expect(this.poinHistoryWholesaler).toBeDisplayed()
    }

    async riwayat () {
        await expect(this.poinHistoryWholesaler).toBeDisplayed()
    }

    async unmatchAgen () {
        await this.btnUnmatch.click()
        await expect(this.titlePopupUnmatch).toBeDisplayed()
        await this.btnYa.click()
    }
}

export default new PoinScreen();
