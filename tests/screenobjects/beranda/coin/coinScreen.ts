import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class CoinScreen extends AppScreen {
    constructor () {
        super('~coinHistory');
    }

    //define selectors using getter methods
    private get btnBack () { return $('(//android.view.ViewGroup[@content-desc="coinHistory"])[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get btnKembaliKeRiwayat () { return $('//android.view.ViewGroup[@content-desc="ModalDetailHistoryCoin"]/android.view.ViewGroup') }
    private get expiredDateCoin () { return $('~coinExpDate') }
    private get listRiwayat () { return $('~listRiwayatCoin') }
    private get detailHistoryCoin () { return $$('//android.view.ViewGroup[@content-desc="DetailHistoryCoin"]') }
    private get detailTitleCoinHistory () { return $$('//android.widget.TextView[@content-desc="detailTitleCoinHistory"]') }
    private get detailDateCoinHistory () { return $$('//android.widget.TextView[@content-desc="detailDateCoinHistory"]') }
    private get detailCoinInCurrency () { return $$('///android.widget.TextView[@content-desc="detailCoinInCurrency"]') }
    private get detailCoinValue () { return $$('//android.widget.TextView[@content-desc="detailCoinValue"]') }
    private get btnTukarKoin () { return $('//android.view.ViewGroup[@content-desc="buttonTukar KoinLabel"]') }
    private get saldoPojokBayar () { return $('~saldoPojokBayarCard') }
    private get popUpDesc () { return $('//android.view.ViewGroup[@content-desc="invalidPBModal"]/android.widget.TextView') }
    private get btnMengerti () { return $('~buttonMengertiLabel') }
    private get transferRekeningBank () { return $('~transferRekeningBankCard') }
    private get voucherKonsumen () { return $('~voucherKonsumen') }
    private get undianCard () { return $('~undianCard') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.detailHistoryCoin?.[0]?.waitForDisplayed()
        await expect(this.listRiwayat).toBeDisplayed()
    }

    async getExpDateCoin () {
        await this.expiredDateCoin.waitForDisplayed()
        console.log('Kadaluarsa: ')
        console.log(await this.expiredDateCoin.getText())
    }

    async getDetailHistory1 () {
        console.log(await this.detailTitleCoinHistory?.[0]?.getText())
        // console.log(await this.detailDateCoinHistory?.[0]?.getText())
        // console.log(await this.detailCoinInCurrency?.[0]?.getText())
        // console.log(await this.detailCoinValue?.[0]?.getText())
    }

    async clickDetailHistory1 () {
        await this.detailTitleCoinHistory?.[0]?.click()
        await this.btnKembaliKeRiwayat.waitForDisplayed()
        await this.btnKembaliKeRiwayat.click();
    }

    async tukarKoin () {
        await this.btnTukarKoin.click();
    }

    async back () {
        await this.btnBack.click()
    }

    async selectSaldoPojokBayar () {
        await this.saldoPojokBayar.click();
    }

    async selectUndian () {
        await this.undianCard.click();
    }

    async popUpPB () {
        await this.popUpDesc.waitForDisplayed();
        console.log(await this.popUpDesc.getText());
        await this.btnMengerti.click();
        await this.saldoPojokBayar.waitForDisplayed();
    }

    async selectTransferRekeningBank () {
        await this.transferRekeningBank.click();
    }

    async selectVoucherKonsumen () {
        await this.voucherKonsumen.click();
    }
}

export default new CoinScreen();
