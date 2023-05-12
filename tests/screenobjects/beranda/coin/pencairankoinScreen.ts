import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class PencairanKoinScreen extends AppScreen {
    constructor () {
        super('~pencairanKoinComponent');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get totalKoinTerkumpul () { return $('~totalKoinTerkumpul') }
    private get inputTukarKoin () { return $('~ketikNominalInput') }
    private get nominalSaldo () { return $('//android.view.ViewGroup[@content-desc="pencairanKoinComponent"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]') }
    private get akun () { return $('//android.view.ViewGroup[@content-desc="pencairanKoinComponent"]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView') }
    private get bank () { return $('//android.view.ViewGroup[@content-desc="pencairanKoinComponent"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[4]') }
    private get rekening () { return $('//android.view.ViewGroup[@content-desc="pencairanKoinComponent"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[5]') }
    private get ubahRekeningBtn () { return $('~ubahRekeningBtn')}
    private get txtUnderUbahRekeningBtn () { return $('~bankAccountWarningNote')}
    private get btnLanjut () { return $('~tukarKoin')}

    private get btnOkAlertSuccessRedeem () { return $('~buttonOKLabel') }
    private get alertFailedRedeem () { return $('//*[@resource-id="android:id/message"]') }
    private get btnOkAlertFailedRedeem () { return $('//*[@resource-id="android:id/button1"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.totalKoinTerkumpul.waitForDisplayed()
        console.log('Total Koin Terkumpul: ' + await this.totalKoinTerkumpul.getText())
    }

    async redeemCoinPB ({koinToRedeem} : {koinToRedeem:string;}) {
        await this.inputTukarKoin.setValue(koinToRedeem)
        console.log('Koin yang ditukar: ')
        console.log(await this.inputTukarKoin.getText())
        console.log(await this.nominalSaldo.getText())
        console.log('Tujuan Akun Pojok Bayar: ')
        console.log(await this.akun.getText())
    }
    
    async redeemCoinTB ({koinToRedeem} : {koinToRedeem:string;}) {
        await this.inputTukarKoin.setValue(koinToRedeem)
        console.log('Koin yang ditukar: ')
        console.log(await this.inputTukarKoin.getText())
        console.log(await this.nominalSaldo.getText())
        console.log('Rekening Tujuan: ')
        console.log(await this.bank.getText())
        console.log(await this.rekening.getText())
    }


    async ubahRekening () {
        console.log(await this.txtUnderUbahRekeningBtn.getText())
        await this.ubahRekeningBtn.click()
    }

    async ubahRekeningBSI () {
        await this.ubahRekeningBtn.click()
    }

    async submitRedeem () {
        await this.btnLanjut.click()
    }

    async back () {
        await this.btnBack.click()
    }

    async popUpAlertSuccessRedeemPB () {
        await this.btnOkAlertSuccessRedeem.waitForDisplayed()
        await this.btnOkAlertSuccessRedeem.click()
    }

    async popUpAlertFailedRedeemPB ({ messageAlert }: {messageAlert:string}) {
        // await expect(this.alertFailedClickTB).toHaveText(messageAlert);
        const alert = await expect(this.alertFailedRedeem).toBeDisplayed()
        if (Boolean(alert) == true) {
            console.log('Penukaran coin tidak dapat dilakukan.')
            expect(this.alertFailedRedeem).toHaveText(messageAlert);
            await this.btnOkAlertFailedRedeem.click()
        } else {
            console.log('Berhasil redeem coin Pojok Bayar')
        }
    }

    async popUpAlertFailedRedeemTB ({ messageAlert }: {messageAlert:string}) {
        // await expect(this.alertFailedClickTB).toHaveText(messageAlert);
        const alert = await expect(this.alertFailedRedeem).toBeDisplayed()
        if (Boolean(alert) == true) {
            console.log('Penukaran coin tidak dapat dilakukan. Minimal 100 coin.')
            expect(this.alertFailedRedeem).toHaveText(messageAlert);
            await this.btnOkAlertFailedRedeem.click()
        } else {
            console.log('Berhasil redeem coin Transfer Bank')
        }
    }
}

export default new PencairanKoinScreen();
