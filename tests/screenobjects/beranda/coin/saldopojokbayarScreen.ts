import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class SaldoPojokBayarScreen extends AppScreen {
    constructor () {
        super('~saldoPojokBayarComponent');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get redeemCoinCard () { return $('(//android.view.ViewGroup[@content-desc="RedeemCoinCard"])[1]/android.widget.ImageView') }
    private get voucherName () { return $('(//android.view.ViewGroup[@content-desc="RedeemCoinCard"])[1]/android.view.ViewGroup/android.widget.TextView') }
    private get totalKoinTerkumpul () { return $('(//android.view.ViewGroup[@content-desc="RedeemCoinCard"])[1]/android.widget.TextView[2]') }
    private get expDate () { return $('(//android.view.ViewGroup[@content-desc="RedeemCoinCard"])[1]/android.widget.TextView[3]') }
    private get emptyStateList () { return $('//android.view.ViewGroup[@content-desc="saldoPojokBayarComponent"]/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.redeemCoinCard.waitForDisplayed()
    }

    async redeemSaldoPojokBayar () {
        await this.voucherName.waitForDisplayed()
        console.log(await this.voucherName.getText())
        await this.totalKoinTerkumpul.waitForDisplayed()
        console.log(await this.totalKoinTerkumpul.getText())
        await this.expDate.waitForDisplayed()
        console.log(await this.expDate.getText())
        await this.redeemCoinCard.click()
        
    }
}

export default new SaldoPojokBayarScreen();
