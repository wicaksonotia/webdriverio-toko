import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class UndianScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get undianList () { return $('(//android.view.ViewGroup[@content-desc="undianList"])[1]') }
    private get voucherName () { return $('//android.view.ViewGroup[@content-desc="undianList"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]') }
    private get expDate () { return $('//android.view.ViewGroup[@content-desc="undianList"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]') }
    private get emptyStateList () { return $('//android.view.ViewGroup[@content-desc="transferBankComponent"]/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.navbarTitle.waitForDisplayed()
    }

    async back () {
        await this.btnBack.click()
    }
    
    async ikutUndian () {
        await this.undianList.waitForDisplayed()
        await this.voucherName.waitForDisplayed()
        console.log(await this.voucherName.getText())
        await this.expDate.waitForDisplayed()
        console.log(await this.expDate.getText())
        await this.undianList.click()  
    }
}

export default new UndianScreen();
