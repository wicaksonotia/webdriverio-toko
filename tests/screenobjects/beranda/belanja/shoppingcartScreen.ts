import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class ShoppingCartScreen extends AppScreen {
    constructor () {
        super('~cartComponent');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get imageProduct () { return $$('//android.widget.ImageView[@content-desc="imageProduct"]') }
    private get nameProduct () { return $$('//android.widget.TextView[@content-desc="cartProductName"]') }
    private get typeProduct () { return $$('//android.widget.TextView[@content-desc="typeProduct"]') }
    private get priceProduct () { return $$('//android.widget.TextView[@content-desc="cartProductPrice"]') }
    private get btnReduceQty () { return $$('//android.view.ViewGroup[@content-desc="removeBtn"]') }
    private get qtyProduct () { return $$('//android.widget.EditText[@content-desc="qtyProduct"]') }
    private get btnAddQty () { return $$('//android.view.ViewGroup[@content-desc="addBtn"]') }
    private get clearProduct () { return $$('//android.view.ViewGroup[@content-desc="clearBtn"]') }
    private get yesClearProduct () { return $('~buttonYaLabel') }
    private get noClearProduct () { return $('~buttonTidakLabel') }

    private get selectVoucher () { return $('~list-promo') }
    private get closeVoucher () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]') }
    private get rbVoucher () { return $('~buttonundefinedLabel') }
    private get btnUseVoucher () { return $('//android.view.ViewGroup[@content-desc="buttonGunakan VoucherLabel"]') }

    private get btnKirim () { return $('~btnCartKirim') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.navbarTitle.waitForDisplayed()
        await this.nameProduct?.[0]?.waitForDisplayed()
    }

    async getProductList () {
        const nameProduct = await this.nameProduct
        nameProduct.forEach(element => {
            const product = element.getText()
                // console.log(missions)       //output: Promise { <pending> }
                product.then(function(result) {
                console.log('Product List: ')
                console.log(result)            //output: Product list
            })
        })
    }

    async getDetailProduct () {
        console.log(await this.nameProduct?.[0]?.getText());
        console.log(await this.priceProduct?.[0]?.getText());
        console.log(await this.qtyProduct?.[0]?.getText());
    }

    async reduceQty () {
        await this.btnReduceQty?.[0]?.click();
    }

    async addQty () {
        await this.btnAddQty?.[0]?.click();
    }

    async removeProduct () {
        await this.clearProduct?.[0]?.click();
    }

    async yesRemoveProduct () {
        await this.yesClearProduct.click();
    }

    async noRemoveProduct () {
        await this.noClearProduct.click();
    }

    async selectVB () {
        await this.selectVoucher.click();
        await expect(this.rbVoucher).toBeDisplayed();
    }

    async viewVB () {
        await this.selectVoucher.click();
        await expect(this.btnUseVoucher).toBeDisplayed();
    }

    async selectVoucherBelanja () {
        await this.selectVoucher.click();
        await expect(this.rbVoucher).toBeDisplayed();
        await this.rbVoucher.click();
        await driver.pause(3000);
        await this.rbVoucher.click();
        await this.btnUseVoucher.click();
    }
    
    async closeVoucherBelanja () {
        await this.closeVoucher.click();
    }

    async ship () {
        await this.btnKirim.click();
    }
}

export default new ShoppingCartScreen();
