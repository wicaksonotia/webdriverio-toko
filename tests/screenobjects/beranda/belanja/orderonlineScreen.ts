import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class OrderOnlineScreen extends AppScreen {
    constructor() {
        super('(//android.view.ViewGroup[@content-desc="belanjaDashboard"])[1]');
    }

    //define selectors using getter methods
    //Order Online
    private get btnBack() { return $('~btnBack') }
    private get navbarTitle() { return $('~navbarTitle') }
    private get totalMyPoin() { return $('(//android.view.ViewGroup[@content-desc="myPoint"])[1]/android.widget.TextView[2]') }

    private get inputSearchProduct() { return $('//android.widget.EditText[@content-desc="search"]') }
    private get inputQty() { return $('//android.view.ViewGroup[@content-desc="searchProductComponent"]/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.EditText') }
    private get shoppingCart() { return $('~cart') }

    private get menuRekomendasiBelanja() { return $('~shoppingRecommendation') }
    private get banner() { return $('~') }
    private get btnAddQtyPromoToday() { return $('~') }
    private get btnReduceQtyPromoToday() { return $('~') }
    private get btnViewAllPromoToday() { return $('~') }

    private get menuRokok() { return $('~ROKOK') }
    private get menuMakanan() { return $('~MAKANAN') }
    private get menuMinuman() { return $('~MINUMAN') }
    private get menuPerawatan() { return $('~PERAWATAN') }
    private get menuLainLain() { return $('~LAINLAIN') }

    private get menuProdukMitra() { return $('~//android.view.ViewGroup[@content-desc="buttonProduk MitraLabel"]') }
    private get viewAllProdukMitra() { return $$('//android.view.ViewGroup[@content-desc="ViewAllHistoryOrder"]') }
    private get cardHistoryProdukMitra() { return $$('//android.view.ViewGroup[@content-desc="cardOrderHistory"]') }
    private get orderStatus() { return $$('//android.widget.TextView[@content-desc="orderStatus"]') }
    private get orderId() { return $$('//android.widget.TextView[@content-desc="orderId"]') }
    private get totalPriceOrder() { return $$('//android.widget.TextView[@content-desc="totalPriceOrder"]') }
    private get orderDate() { return $$('//android.widget.TextView[@content-desc="orderDate"]') }
    private get messageEmptyHistory() { return $('~messageEmptyHistory') }

    //a method to encapsule automation code to interact with the page
    async page() {
        await expect(this.navbarTitle).toBeDisplayed()
        await expect(this.inputSearchProduct).toBeDisplayed()
        // await expect(this.menuRokok).toBeDisplayed()
        // await expect(this.menuMakanan).toBeDisplayed()
        // await expect(this.menuMinuman).toBeDisplayed()
        // await expect(this.menuPerawatan).toBeDisplayed()
        // await expect(this.menuLainLain).toBeDisplayed()
    }

    async currentMyPoin() { //{totalMyPoin}: {totalMyPoin:string}
        console.log('Current Poin: ' + await this.totalMyPoin.getText())
        // await expect(this.totalMyPoin).toHaveText(totalMyPoin)
    }

    //Search
    async searchProduct({ product }: { product: string }) {
        await this.inputSearchProduct.click();
        await this.inputSearchProduct.click();
        await this.inputSearchProduct.setValue(product);
    }

    //Input Quantity
    async inpQty({ qty }: { qty: string }) {
        await this.inputQty.click();
        await this.inputQty.setValue(qty);
        await browser.hideKeyboard();
    }

    async gotoShoppingCartpage() {
        await this.shoppingCart.click()
    }

    //Rekomendasi Belanja
    async viewProductListRecommendation() {
        await this.menuRekomendasiBelanja.click();
    }

    //Banner
    async viewBanner() {
        await this.banner.click();
    }

    //Promosi Hari Ini
    async addQtyPromoToday() {
        await this.btnAddQtyPromoToday.click();
    }
    async reduceQtyPromoToday() {
        await this.btnReduceQtyPromoToday.click();
    }
    async viewAllProductListPromoToday() {
        await this.btnViewAllPromoToday.click();
    }

    //Menu
    async viewProductListRokok() {
        await this.menuRokok.click();
    }

    async viewProductListMakanan() {
        await this.menuMakanan.click();
    }

    async viewProductListMinuman() {
        await this.menuMinuman.click();
    }

    async viewProductListPerawatan() {
        await this.menuPerawatan.click();
    }

    async viewProductListLainLain() {
        await this.menuLainLain.click();
    }

    //Order History Produk Mitra
    async viewAllHistoryProdukMitra() {
        await this.viewAllProdukMitra?.[2]?.click();
    }

    async view1HistoryProdukMitra() {
        await this.cardHistoryProdukMitra?.[0]?.click();
    }

    async getDetailOrder1() {
        console.log('Status Pesanan: ' + await this.orderStatus?.[0]?.getText())
        console.log('Id Pesanan: ' + await this.orderId?.[0]?.getText())
        console.log('Total Biaya Pesanan: ' + await this.totalPriceOrder?.[0]?.getText())
        console.log('Tanggal Pesanan: ' + await this.orderDate?.[0]?.getText())
    }

    async emptyHistory() {
        await expect(this.messageEmptyHistory).toHaveText('Belum ada Riwayat Pesanan');
    }

    async getOrderList() {
        const titleOrder = await this.orderId
        titleOrder.forEach(element => {
            const missions = element.getText()
            // console.log(missions)       //output: Promise { <pending> }
            missions.then(function (result) {
                console.log('Order List: ')
                console.log(result)         //output: Product list
            })
        })
    }

    async viewAOrder({ orderId }: { orderId: string }) {
        const titleCardMisi = await this.orderId
        titleCardMisi.forEach(element => {
            const missions = element.getText()
            // console.log(missions)       //output: Promise { <pending> }
            missions.then(function (result) {
                console.log('Order Id List: ')
                console.log(result)         //output: Order list
                if (String(result) == orderId) {
                    element.click()
                } else {
                    console.log('Order Id yang dicari tidak ada')
                }
            })
        })
    }
}

export default new OrderOnlineScreen();
