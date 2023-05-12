import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';
// import { expect as chaiExpect, assert } from 'chai';

//sub screen containing specific selectors and methods for a specific screen
class NotifikasiScreen extends AppScreen {
    constructor () {
        super('~notificationComponent');
    }

    //define selectors using getter methods
    private get tab () { return $$('//android.view.ViewGroup[@content-desc="notificationComponent"]/android.view.ViewGroup') }
    private get tabBelanja () { return $('') }
    private get tabMisi () { return $('') }
    private get tabLainnya () { return $('') }
    private get titlePage () { return $('~titlePage') }
    private get cardNotif () { return $$('//android.view.ViewGroup[@content-desc="notifCard"]') }
    private get titleNotif () { return $$('//android.widget.TextView[@content-desc="notifTitle"]') }
    private get descNotif () { return $$('//android.widget.TextView[@content-desc="descNotif"]') }
    private get dateNotif () { return $$('//android.widget.TextView[@content-desc="dateNotif"]') }
    private get dateSubmission () { return $('~dateSubmission') }

    //Belum ada Notifikasi
    private get emptyStateList () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView') }
    private get emptyStateNotif () { return $('~emptyStateList') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.titlePage.waitForDisplayed()
        await expect(this.titlePage).toBeDisplayed()
    }

    async viewTabBelanja () {
        await this.tabBelanja.click()
    }

    async viewTabMisi () {
        await this.tab?.[2]?.click()
        // await this.tabMisi.click()
    }

    async viewTabLainnya () {
        await this.tabLainnya.click()
    }

    async viewNotif1 ({titleNotif}: {titleNotif:string;}) {
        console.log('Title Notif Submit Misi: '+await this.titleNotif?.[0]?.getText())
        // await expect(this.titleNotif[0]).toHaveTextContaining(titleNotif)
        console.log('Desc Notif Submit Misi: '+await this.descNotif?.[0]?.getText())
        await this.cardNotif?.[0]?.click()
    }

    async viewNotif () {
        console.log('Title Notif Submit Misi: '+await this.titleNotif?.[0]?.getText())
        // await expect(this.titleNotif[0]).toHaveTextContaining(titleNotif)
        console.log('Desc Notif Submit Misi: '+await this.descNotif?.[0]?.getText())
        await this.cardNotif?.[0]?.click()
    }

    async scrollDetailNotifSC7 () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.dateSubmission, 10)
    }
}

export default new NotifikasiScreen();
