import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';
// import Page from '../../pageobjects/page';

//sub screen containing specific selectors and methods for a specific screen
class BerandaScreen extends AppScreen {
    constructor() {
        super('~dashboardComponent');
    }

    //define selectors using getter methods
    private get panah1() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView') }
    private get panah2() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView') }
    private get panah3() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView') }
    private get panah4() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView') }
    private get panah5() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView') }
    private get panah6() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView') }
    private get panah7() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView') }

    private get panah1NonHMS() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView') }
    private get panah2NonHMS() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView') }
    private get panah3NonHMS() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView') }
    private get panah4NonHMS() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView') }
    private get panah5NonHMS() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView') }
    private get panah6NonHMS() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView') }
    private get panah7NonHMS() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView') }

    private get shopName() { return $('~fullname') }
    private get avatar() { return $('~myProfile') }
    private get coin() { return $('~myCointSection') }
    private get nominalCoin() { return $('~myCointInCurrency') }
    private get currentCoin() { return $('~myCoint') }
    private get poin() { return $('~myPointSection') }
    private get currentPoin() { return $('~myPoint') }
    private get pilihMitra() { return $('~//android.view.ViewGroup[@content-desc="buttonPilih MitraLabel"]') }
    private get accLoc() { return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button') }
    private get belanja() { return $('~belanja') }
    private get langganan() { return $('~pelanggan') }
    private get misi() { return $('~misi') }
    private get redBubble() { return $('~redBubble') } //atribute: text, value: 10
    private get promosi() { return $('~promosi') }
    private get pojokbayar() { return $('~pojokBayar') }
    private get katalogsrc() { return $('~katalogSrc') }
    private get pojokmodal() { return $('~bayarNanti') }
    private get infoboard() { return $('~infoBoard') }
    private get xpBar() { return $('~containerXpBar_in_dashboard') }
    private get imageDirectorSTW() { return $('//android.view.ViewGroup[@content-desc="dashboardComponent"]/android.view.ViewGroup[3]/android.widget.ImageView[1]') }
    private get btnPutar() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.ImageView') }
    private get helpCenter() { return $('~bantuan-buDe') }

    private get alertMisiNonHms() { return $('//*[@resource-id="android:id/message"]') }
    private get btnAlertOk() { return $('//*[@resource-id="android:id/button1"]') }

    private get pushNotif() { return $('//*[@resource-id="android:id/notification_headerless_view_row"]') } //hp Samsung
    private get titlePushNotif() { return $('//*[@resource-id="android:id/title"]') }
    private get textPushNotif() { return $('//*[@resource-id="android:id/text"]') }

    //a method to encapsule automation code to interact with the page
    async waitForAvatarShown(): Promise<boolean | void> {
        return this.avatar.waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'expected avatar not existing after 60s'
        });
    }

    async tutorial() {
        await this.panah1.click();
        await this.panah2.click();
        await this.panah3.click();
        await this.panah4.click();
        await this.panah5.click();
        await this.panah6.click();
        await this.panah7.click();
    }

    async tutorialNonHMS() {
        await this.panah1NonHMS.click();
        await this.panah2NonHMS.click();
        await this.panah3NonHMS.click();
        await this.panah4NonHMS.click();
        await this.panah5NonHMS.click();
        await this.panah6NonHMS.click();
        await this.panah7NonHMS.click();
    }

    async beranda({ shopname }: { shopname: string }) {
        await this.shopName.waitForDisplayed()
        await expect(this.shopName).toBeDisplayed()
        await expect(this.shopName).toHaveText(shopname)
        await expect(this.avatar).toBeDisplayed()
        // await expect(this.avatar).toBeClickable()
    }

    async menu() {
        await expect(this.helpCenter).toBeDisplayed()
        // await expect(this.helpCenter).toBeClickable()
        await expect(this.belanja).toBeDisplayed()
        // await expect(this.belanja).toBeClickable()
        await expect(this.langganan).toBeDisplayed()
        // await expect(this.langganan).toBeClickable()
        await expect(this.misi).toBeDisplayed()
        // await expect(this.misi).toBeClickable()
        await expect(this.pojokbayar).toBeDisplayed()
        // await expect(this.pojokbayar).toBeClickable()
        // await expect(this.katalogsrc).toBeDisplayed() //comment saat run prod
        // await expect(this.katalogsrc).toBeClickable()
        // await expect(this.pojokmodal).toBeDisplayed() //comment saat run prod
        // await expect(this.pojokmodal).toBeClickable()
        await expect(this.infoboard).toBeDisplayed()
        // await expect(this.infoboard).toBeClickable()
    }

    async viewAvatar() {
        await this.avatar.click();
    }

    async menuCoin() {
        await this.coin.click();
    }

    async menuPoin() {
        await this.poin.click();
    }

    async pairingMitra() {
        await this.pilihMitra.click();
        await this.accLoc.click();
    }

    async menuBelanja() {
        await this.belanja.click();
    }

    async menuLangganan() {
        await this.langganan.click();
    }

    async menuMisi() {
        await this.misi.click();
    }

    async menuPojokbayar() {
        await this.pojokbayar.click();
    }

    async menuKatalogsrc() {
        await this.katalogsrc.click();
    }

    async menuPojokmodal() {
        await this.pojokmodal.click();
    }

    async menuInfoboard() {
        await this.infoboard.click();
    }

    async viewXP() {
        await this.xpBar.click();
    }

    async spinTheWheel() {
        await this.imageDirectorSTW.waitForDisplayed();
        await this.imageDirectorSTW.click();
        // await this.btnPutar.waitForDisplayed();
        // await this.btnPutar.click();
    }

    async chatBude() {
        await this.helpCenter.click();
    }

    async getCurrentMyCoin() {
        await expect(this.coin).toBeDisplayed()
        // await expect(this.coin).toBeClickable()
        await expect(this.currentCoin).toBeDisplayed()
        await expect(this.nominalCoin).toBeDisplayed()
        console.log('Total Current Coin: ' + await this.currentCoin.getText());
        console.log('Total Nominal Coin: ' + await this.nominalCoin.getText());
    }

    async getCurrentMyPoin() {
        await expect(this.poin).toBeDisplayed()
        // await expect(this.poin).toBeClickable()
        await expect(this.currentPoin).toBeDisplayed()
        console.log('Total My Poin: ' + await this.currentPoin.getText());
    }

    async existCounterRedbubbleMisi({ existingNewMission }: { existingNewMission: string }) {
        await expect(this.redBubble).toHaveText(existingNewMission);
    }
    async getCounterRedbubbleMisi() {
        const alert = await this.redBubble.isExisting()
        if (Boolean(alert) == true) {
            console.log('Total Redbubble Misi: ' + await this.redBubble.getText());
        } else {
            console.log('Tidak ada misi baru')
        }
    }

    async counterRedbubbleNewMisi({ newMission }: { newMission: string }) {
        await expect(this.redBubble).toHaveText(newMission);
    }

    async popUpAlert({ messageAlert }: { messageAlert: string }) {
        // await expect(this.alertMisiNonHms).toHaveText(messageAlert);
        await this.alertMisiNonHms.waitForDisplayed()
        await expect(this.alertMisiNonHms).toBeDisplayed()
        const alert = await this.alertMisiNonHms.isExisting()
        if (Boolean(alert) == true) {
            console.log('Akun non Hms')
            expect(this.alertMisiNonHms).toHaveText(messageAlert)
        } else {
            console.log('Akun Hms')
        }
    }

    async closePopUpAlert() {
        await this.btnAlertOk.click();
    }

    async tapPushNotif1() {
        await driver.pause(3000)
        await this.pushNotif.waitForExist();
        //dapat copytext dari push notif
        console.log(await this.titlePushNotif.getText());
        console.log(await this.textPushNotif.getText());
        await this.pushNotif.touchAction('tap');
    }

    async tapPushNotif() {
        await driver.pause(3000)
        await this.pushNotif.waitForExist();
        //dapat copytext dari push notif
        console.log(await this.titlePushNotif.getText());
        console.log(await this.textPushNotif.getText());
    }
}

export default new BerandaScreen();
