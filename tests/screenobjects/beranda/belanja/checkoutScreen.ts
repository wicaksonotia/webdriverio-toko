import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class CheckoutScreen extends AppScreen {
    constructor () {
        super('~checkoutComponent');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }
    
    private get shippingMethod () { return $('~selectShipping') }
    private get rbshippingMethod () { return $$('//android.view.ViewGroup[@content-desc="radioButtonInput"]') }
    private get selectVoucher () { return $('~selectVoucher') }
    private get closeVoucher () { return $('~closeModalVoucher') }
    private get rbVoucher () { return $('~buttonundefinedLabel') }
    private get btnUseVoucher () { return $('//android.view.ViewGroup[@content-desc="buttonGunakan VoucherLabel"]') }
    private get diambil () { return $('~btnPickupInput') }
    private get dikirim () { return $('~btnDeliveryInput') }
    private get hariIni () { return $('//android.view.ViewGroup[@content-desc="Kirim hari iniInput"]') }
    private get besok () { return $('//android.view.ViewGroup[@content-desc="Kirim besokInput"]') }
    private get deliveryServiceHariIni () { return $('//android.view.ViewGroup[@content-desc="Kurir Agen - Hari Ini (1 Hari)"]/android.view.ViewGroup') }
    private get deliveryServiceBesok () { return $('//android.view.ViewGroup[@content-desc="Kurir Agen - Besok (1 - 2 Hari)"]/android.view.ViewGroup') }
    private get address () { return $('~address') }
    private get inputNote () { return $('~note') }

    private get valueSubtotal () { return $('~Subtotal') }
    private get valueDiskonNonRokok () { return $('~DiskonNonRokok') }
    private get valueTotalOrder () { return $('~TotalPesanan') }
    private get valueOngkosPengiriman () { return $('~OngkosPengiriman') }
    private get valueDiskonOngkosPengiriman () { return $('~DiskonOngkosPengiriman') }
    private get valueGrandTotal () { return $('~GrandTotal') }
    private get valueTotalPoin () { return $('~TotalPoin') }

    private get btnKirim () { return $('~btnCartKirim') }
    private get confirmNext () { return $('//android.view.ViewGroup[@content-desc="buttonYa, lanjutkanLabel"]') }
    private get btnAlertOk () { return $('//*[@resource-id="android:id/button1"]') }
    private get unselectVoucher () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]') }
    private get btnLihatDetailPesanan () { return $('//android.view.ViewGroup[@content-desc="buttonLihat Detail PesananLabel"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.navbarTitle.waitForDisplayed()
        await expect(this.navbarTitle).toBeDisplayed()
        await this.shippingMethod.waitForDisplayed()
        await expect(this.shippingMethod).toBeDisplayed()
    }

    async selectShippingMethod () {
        await this.shippingMethod.click();
    }

    async shippingDiambil () {
        await this.diambil.click();
    }

    async shippingDikirim () {
        await this.dikirim.click();
    }

    async kirimHariIni () {
        await this.hariIni.click();
    }

    async kirimBesok () {
        await this.besok.click();
    }

    async chooseDeliveryServiceHariIni () {
        await driver.pause(3000);
        // await this.deliveryServiceHariIni.scrollIntoView();
        await this.deliveryServiceHariIni.click();
    }

    async chooseDeliveryServiceBesok () {
        await driver.pause(3000);
        // await this.deliveryServiceBesok.waitForDisplayed();
        await this.deliveryServiceBesok.click();
    }

    async selectVoucherBelanja () {
        await this.selectVoucher.click();
        await expect(this.rbVoucher).toBeDisplayed();
        // await this.rbVoucher.click();
        // await driver.pause(3000);
        await this.rbVoucher.click();
        await this.btnUseVoucher.click();
        await driver.pause(5000);
    }

    async getAddress () {
        console.log('Address: '+await this.address.getText());
    }

    async addNote ({notes}: {notes:string}) {
        await this.inputNote.setValue(notes);
    }

    //[Promo Percent-Nominal] One Day/Pick Up
    async getTotalOrder1 () {
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Diskon Non Rokok: '+await this.valueDiskonNonRokok.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
    }

    //[Promo Percent-Nominal] Tomorrow
    async getTotalOrder2 () {
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Diskon Non Rokok: '+await this.valueDiskonNonRokok.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
        console.log('Ongkos Pengiriman: '+await this.valueOngkosPengiriman.getText());
        console.log('Grand Total: '+await this.valueGrandTotal.getText());
    }

    //[Promo Shipping] One Day/Pick Up & Order Normal
    async getTotalOrder3 () {
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
    }

    //[Promo Shipping] Tomorrow
    async getTotalOrder4 () {
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
        console.log('Ongkos Pengiriman: '+await this.valueOngkosPengiriman.getText());
        console.log('Diskon Ongkos Pengiriman: '+await this.valueDiskonOngkosPengiriman.getText());
        console.log('Grand Total: '+await this.valueGrandTotal.getText());
    }

    async next () {
        await this.confirmNext.click();
    }

    async OK () {
        await this.btnAlertOk.click();
    }

    async viewVB () {
        await this.selectVoucher.click();
        await expect(this.btnUseVoucher).toBeDisplayed();
    }

    async unselectUsedVoucher () {
        await this.selectVoucher.click();
        await this.rbVoucher.click();
        await this.unselectVoucher.click();
    }

    async ship () {
        await this.btnKirim.click();
    }

    async viewOrderDetail () {
        await expect(this.btnLihatDetailPesanan).toBeDisplayed()
        await this.btnLihatDetailPesanan.click();
    }
}

export default new CheckoutScreen();
