import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class OrderDetailsScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup');
        // super('~transactionDetail');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get orderId () { return $('~invoiceNumber') }
    private get btnExpandStatus () { return $('//android.view.ViewGroup[@content-desc="TransactionDetail"]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView') }
    private get btnExpandStatus2 () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView') }
    private get status () { return $('~') }
    
    private get btnSetuju () { return $('//android.view.ViewGroup[@content-desc="perubahan-disetujui"]') }
    private get btnBatalkan () { return $('~pesanan-dibatalkan') }
    private get btnBarangTelahDiterima () { return $('~pesanan-diterima') }
    
    private get shippingMethod () { return $('(//android.view.ViewGroup[@content-desc="list-promo"])[1]') }
    private get address () { return $('~alamat') }
    private get nameProduct () { return $('~productName-0') }
    private get priceProduct () { return $('~price-0') }
    private get qtyProduct () { return $('~amount-0') }
    private get note () { return $('~notes') }

    private get btnExpandSubtotal () { return $('~Subtotal-expand') }
    private get valueSubtotal () { return $('~Subtotal') }
    private get valueSubtotalTotalRokok () { return $('~TotalRokok') }
    private get valueSubtotalTotalNonRokok () { return $('~TotalNonRokok') }
    private get valueDiskonNonRokok () { return $('~DiskonNonRokok') }
    private get valueTotalOrder () { return $('~TotalPesanan') }
    private get valueOngkosPengiriman () { return $('~OngkosPengiriman') }
    private get valueDiskonOngkosPengiriman () { return $('~DiskonOngkosPengiriman') }
    private get valueGrandTotal () { return $('~GrandTotal') }
    private get valueTotalPoin () { return $('~TotalPoin') }
    private get paymentMethod () { return $('(//android.view.ViewGroup[@content-desc="list-promo"])[2]/android.widget.TextView[2]') }
    private get valueAdvocacy () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView') }

    private get btnReorder () { return $('~pesanLagi')}

    //a method to encapsule automation code to interact with the page
    async page () {
        // await this.navbarTitle.waitForDisplayed()
        // await expect(this.navbarTitle).toBeDisplayed()
        await driver.pause(5000)
        await expect(this.orderId).toBeDisplayed()
        await expect(this.shippingMethod).toBeDisplayed()
    }

    async statusOrder ({orderstatus}: {orderstatus:string}) {
        await expect(this.status).toHaveText(orderstatus)
    }

    async expandStatus () {
        await this.btnExpandStatus.click();
    }

    async expandStatus2 () {
        await this.btnExpandStatus2.click();
    }

    async confirmChanges () {
        await this.btnSetuju.click();
    }

    async rejectChanges () {
        await this.btnBatalkan.click();
    }

    async confirmOrder () {
        await this.btnBarangTelahDiterima.click();
    }

    async addressDetails () {
        console.log('Address: '+await this.address.getText());
    }

    //[Promo Percent-Nominal] One Day/Pick Up
    async getTotalOrder1 () {
        await this.btnExpandSubtotal.click();
        await Gestures.swipeUpCustom();
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Total Rokok: '+await this.valueSubtotalTotalRokok.getText());
        console.log('Total Non Rokok: '+await this.valueSubtotalTotalNonRokok.getText());
        console.log('Diskon Non Rokok: '+await this.valueDiskonNonRokok.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
    }

    //[Promo Percent-Nominal] Tomorrow
    async getTotalOrder2 () {
        await this.btnExpandSubtotal.click();
        await Gestures.swipeUpCustom();
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Total Rokok: '+await this.valueSubtotalTotalRokok.getText());
        console.log('Total Non Rokok: '+await this.valueSubtotalTotalNonRokok.getText());
        console.log('Diskon Non Rokok: '+await this.valueDiskonNonRokok.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
        console.log('Ongkos Pengiriman: '+await this.valueOngkosPengiriman.getText());
        console.log('Grand Total: '+await this.valueGrandTotal.getText());
    }

    //[Promo Shipping] One Day/Pick Up & Order Normal
    async getTotalOrder3 () {
        await this.btnExpandSubtotal.click();
        await Gestures.swipeUpCustom();
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Total Rokok: '+await this.valueSubtotalTotalRokok.getText());
        console.log('Total Non Rokok: '+await this.valueSubtotalTotalNonRokok.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
    }

    //[Promo Shipping] Tomorrow
    async getTotalOrder4 () {
        await this.btnExpandSubtotal.click();
        await Gestures.swipeUpCustom();
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Total Rokok: '+await this.valueSubtotalTotalRokok.getText());
        console.log('Total Non Rokok: '+await this.valueSubtotalTotalNonRokok.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
        console.log('Ongkos Pengiriman: '+await this.valueOngkosPengiriman.getText());
        console.log('Diskon Ongkos Pengiriman: '+await this.valueDiskonOngkosPengiriman.getText());
        console.log('Grand Total: '+await this.valueGrandTotal.getText());
    }

    //Order Normal Tomorrow
    async getTotalOrder5 () {
        await this.btnExpandSubtotal.click();
        await Gestures.swipeUpCustom();
        console.log('Subtotal: '+await this.valueSubtotal.getText());
        console.log('Total Rokok: '+await this.valueSubtotalTotalRokok.getText());
        console.log('Total Non Rokok: '+await this.valueSubtotalTotalNonRokok.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
        console.log('Total Order: '+await this.valueTotalOrder.getText());
        console.log('Ongkos Pengiriman: '+await this.valueOngkosPengiriman.getText());
        console.log('Grand Total: '+await this.valueGrandTotal.getText());
    }

    async getTotalPoin () {
        console.log('Total Poin: '+await this.valueTotalPoin.getText());
    }

    async viewPaymentMethod () {
        await Gestures.swipeUpCustom();
        await expect(this.navbarTitle).toBeDisplayed();
    }

    async getAdvocacy () {
        await Gestures.swipeUpCustom();
        console.log(await this.valueAdvocacy.getText());
    }

    async reorder () {
        await this.btnReorder.click();
        await driver.pause(3000)
    }

    async back () {
        await this.btnBack.click();
    }
}

export default new OrderDetailsScreen();
