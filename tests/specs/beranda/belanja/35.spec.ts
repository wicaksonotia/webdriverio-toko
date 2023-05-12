import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import OrderOnlineScreen from '../../../screenobjects/beranda/belanja/orderonlineScreen';
import ShoppingCartScreen from '../../../screenobjects/beranda/belanja/shoppingcartScreen';
import CheckoutScreen from '../../../screenobjects/beranda/belanja/checkoutScreen';
import OrderDetailsScreen from '../../../screenobjects/beranda/belanja/orderdetailsScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

// use allure API for allure reporter
// allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[TOKO] 35. Order with Kode Promo');
allureReporter.addFeature('35. Order with Kode Promo');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true)
    await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown()
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameTia })
});

When(/^I click menu 'Belanja'$/, async () => {
    await BerandaScreen.menuBelanja()
});

Then(/^System should be leading to Order Online screen$/, async () => {
    await OrderOnlineScreen.waitForIsShown(true)
});

Given(/^I am in Order Online screen$/, async () => {
    await OrderOnlineScreen.page()
});

When(/^I search product to order and add quantity then click Shopping Cart$/, async () => {
    await OrderOnlineScreen.searchProduct({ product: dataTest.product.nameTia })
    await OrderOnlineScreen.inpQty({ qty: dataTest.product.qtyProductTia })
    await OrderOnlineScreen.gotoShoppingCartpage()
});

Then(/^System should be leading to Shopping Cart screen$/, async () => {
    await ShoppingCartScreen.waitForIsShown(true)
});

Given(/^I am in Shopping Cart screen and select voucher$/, async () => {
    await ShoppingCartScreen.page()
    await ShoppingCartScreen.getDetailProduct()
    // await ShoppingCartScreen.selectVoucherBelanja()
    await driver.pause(5000)
});

When(/^I click button 'Checkout'$/, async () => {
    await ShoppingCartScreen.ship()
});

Then(/^System should be leading to Checkout screen$/, async () => {
    await CheckoutScreen.waitForIsShown(true);
});

Given(/^I am in Checkout screen$/, async () => {
    await CheckoutScreen.page()
    await driver.pause(3000)
});

When(/^I choose shipping method and click button 'Buat Pesanan'$/, async () => {
    await CheckoutScreen.selectVoucherBelanja()
    await CheckoutScreen.selectShippingMethod()
    await CheckoutScreen.shippingDikirim()
    await CheckoutScreen.kirimHariIni()
    await CheckoutScreen.chooseDeliveryServiceHariIni()
    await CheckoutScreen.ship()
    await CheckoutScreen.viewOrderDetail()
});

Then(/^System should be leading to Detail Transaksi screen and show order summary$/, async () => {
    await OrderDetailsScreen.waitForIsShown(true);
    await OrderDetailsScreen.page()
    await OrderDetailsScreen.addressDetails()
    await OrderDetailsScreen.getTotalOrder1()
    // await OrderDetailsScreen.viewPaymentMethod()
});