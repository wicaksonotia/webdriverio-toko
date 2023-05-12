import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class DetailUndianScreen extends AppScreen {
    constructor () {
        super('~undianDetailComponent');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~backNavigationUndianList') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get btnIkutUndian () { return $('~showPageCoinExchange') }
    private get undianKuponSaya () { return $('~undianKuponSaya') }
    private get closeModalUndian () { return $('~closeModalUndian') }
    private get jmlKupon () { return $('//android.view.ViewGroup[@content-desc="undianKuponSaya"]/android.widget.TextView[2]') }
    private get undianDaftarPemenang () { return $('~undianDaftarPemenang') }
    private get pemenang () { return $('//android.widget.ScrollView[@content-desc="undianDetailComponent"]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup') }
    private get undianScrollWinner () { return $('~undianScrollWinner') }
    private get plusCoinExchange () { return $('~plusCoinExchange') }
    private get minCoinExchange () { return $('~minCoinExchange') }
    private get exchangeCoin () { return $('~exchangeCoin') }
    private get exchangeAgree () { return $('~exchangeAgree') }
    private get exchangeCancel () { return $('~exchangeCancel') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.btnBack.waitForDisplayed()
    }

    async back () {
        await this.btnBack.click()
    }

    async ikutUndian () {
        await this.btnIkutUndian.waitForDisplayed()
        await this.jmlKupon.waitForDisplayed()
        console.log(await this.jmlKupon.getText())
        await this.btnIkutUndian.click()
        await this.plusCoinExchange.waitForDisplayed()
        await this.plusCoinExchange.click()
        await this.exchangeCoin.click()
        await this.exchangeAgree.click()
    }

    async cekKuponUndian () {
        await this.undianKuponSaya.waitForDisplayed()
        await this.undianKuponSaya.click()
        await this.closeModalUndian.waitForDisplayed()
        await driver.pause(3000)
        await this.closeModalUndian.click()
        await this.jmlKupon.waitForDisplayed()
        console.log(await this.jmlKupon.getText())
    }

    async cekPemenang () {
        await this.undianDaftarPemenang.waitForDisplayed()
        await this.undianDaftarPemenang.click()
        await this.pemenang.waitForDisplayed()
        await this.pemenang.click()
        await this.undianScrollWinner.waitForDisplayed()
    }
}

export default new DetailUndianScreen();
