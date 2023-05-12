import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import OrderOnlineScreen from '../../../screenobjects/beranda/belanja/orderonlineScreen';
import ShoppingCartScreen from '../../../screenobjects/beranda/belanja/shoppingcartScreen';
import CheckoutScreen from '../../../screenobjects/beranda/belanja/checkoutScreen';
import OrderDetailsScreen from '../../../screenobjects/beranda/belanja/orderdetailsScreen';
import SpinTheWheelScreen from '../../../screenobjects/beranda/spinthewheelScreen';
import CoinScreen from '../../../screenobjects/beranda/coin/coinScreen';
import Gestures from '../../../helpers/Gestures';
import PoinScreen from '../../../screenobjects/beranda/poin/poinScreen';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 90. AYO Super Puter (Spin the Wheel)');
    allureReporter.addFeature('90. AYO Super Puter (Spin the Wheel)');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true)
    await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown()
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
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
    await OrderOnlineScreen.searchProduct({product: dataTest.product.name2})
    await OrderOnlineScreen.inpQty({qty: dataTest.product.qtyProduct4})
    await OrderOnlineScreen.gotoShoppingCartpage()
});

Then(/^System should be leading to Shopping Cart screen$/, async () => {
    await ShoppingCartScreen.waitForIsShown(true)
});

Given(/^I am in Shopping Cart screen$/, async () => {
    await ShoppingCartScreen.page()
    await ShoppingCartScreen.getDetailProduct()
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

When(/^I choose shipping method 'Diambil' and click button 'Buat Pesanan'$/, async () => {
    await CheckoutScreen.selectShippingMethod()
    await CheckoutScreen.shippingDiambil()
    await CheckoutScreen.ship()
    await CheckoutScreen.viewOrderDetail()
});

Then(/^System should be leading to Detail Transaksi screen and show order summary$/, async () => {
    await OrderDetailsScreen.waitForIsShown(true);
    await OrderDetailsScreen.page()
    await OrderDetailsScreen.addressDetails()
    await OrderDetailsScreen.getTotalOrder3()
    // await OrderDetailsScreen.viewPaymentMethod()
    await driver.pause(20000)
});

When(/^I click button back$/, async () => {
    await OrderDetailsScreen.back()
    await driver.pause(2000)
    await OrderDetailsScreen.back()
});

Then(/^System should be leading back to Order Online screen$/, async () => {
    await OrderOnlineScreen.waitForIsShown(true)
});

When(/^I click my order history and click button 'BARANG TELAH DITERIMA'$/, async () => {
    await OrderOnlineScreen.getDetailOrder1()
    await OrderOnlineScreen.view1HistoryProdukMitra()
    await OrderDetailsScreen.waitForIsShown(true)
    await OrderDetailsScreen.page()
    // await OrderDetailsScreen.expandStatus()
    await OrderDetailsScreen.confirmOrder()
    await driver.pause(20000)
});

Then(/^System should be able to update status to 'Pesanan Diterima'$/, async () => {
    await OrderOnlineScreen.page()
    await OrderOnlineScreen.view1HistoryProdukMitra()
    await OrderDetailsScreen.page()
    // await OrderDetailsScreen.expandStatus()
    await OrderDetailsScreen.back()
    await driver.pause(5000)
    await OrderOnlineScreen.getDetailOrder1()
});

When(/^I back to Home screen$/, async () => {
    await OrderDetailsScreen.back()
});

Then(/^System should be leading to Home screen$/, async () => {
    await BerandaScreen.waitForIsShown(true)
    await driver.pause(20000)
    await Gestures.refresh()
});

When(/^I click image director$/, async () => {
    await BerandaScreen.spinTheWheel()
});

Then(/^System should be leading to Spin the Wheel screen$/, async () => {
    await SpinTheWheelScreen.waitForIsShown(true)
    await SpinTheWheelScreen.spin()
    await PoinScreen.waitForIsShown(true)
    await PoinScreen.getDetailPoinSaya()
});