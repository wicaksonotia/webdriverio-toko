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
    allureReporter.addTestId('[TOKO] 60. Reorder Shipping Pick Up With Promo Nominal');
    allureReporter.addFeature('60. Reorder Shipping Pick Up With Promo Nominal');

//Scenario Outline: As a user, I can reorder B2B with promo nominal for pick up
//Scenario Outline: As a user, I can go to order online screen
Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown();
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

When(/^I click card history Produk Mitra with status Selesai$/, async () => {
    await driver.pause(5000)
    await OrderOnlineScreen.getDetailOrder1()
    await OrderOnlineScreen.view1HistoryProdukMitra()
});

Then(/^System should be leading to Detail Transaksi screen and show order summary history$/, async () => {
    await OrderDetailsScreen.waitForIsShown(true);
    await OrderDetailsScreen.page()
    await OrderDetailsScreen.getTotalOrder3()
});

//Scenario Outline: As a user, I can reorder some of products with promo nominal
When(/^I click button Pesan Lagi$/, async () => {
    await Gestures.swipeUpCustom()
    await OrderDetailsScreen.reorder()
    await driver.back()
    await driver.pause(2000)
});

Then(/^System should be leading back to Order Online screen$/, async () => {
    await OrderOnlineScreen.page()
});

When(/^I click Shopping Cart$/, async () => {
    await OrderOnlineScreen.gotoShoppingCartpage()
});

Then(/^System should be leading to Shopping Cart screen$/, async () => {
    await ShoppingCartScreen.waitForIsShown(true)
});

Given(/^I am in Shopping Cart screen and select voucher$/, async () => {
    await ShoppingCartScreen.page()
    await ShoppingCartScreen.getProductList()
    // await ShoppingCartScreen.selectVoucherBelanja()
    await driver.pause(5000)
});

When(/^I click button 'Checkout'$/, async () => {
    await ShoppingCartScreen.ship()
});

Then(/^System should be leading to Checkout screen$/, async () => {
    await CheckoutScreen.waitForIsShown(true)
});

//Scenario Outline: As a user, I can order some of products for pick up
Given(/^I am in Checkout screen$/, async () => {
    await CheckoutScreen.page()
    await driver.pause(3000)
});

When(/^I choose shipping method 'Diambil' and click button 'Buat Pesanan'$/, async () => {
    await CheckoutScreen.selectVoucherBelanja()
    await driver.pause(5000)
    await CheckoutScreen.selectShippingMethod()
    await CheckoutScreen.shippingDiambil()
    await CheckoutScreen.ship()
    await CheckoutScreen.viewOrderDetail()
});

Then(/^System should be leading to Detail Transaksi screen and show order summary$/, async () => {
    await OrderDetailsScreen.waitForIsShown(true)
    await OrderDetailsScreen.page()
    await OrderDetailsScreen.addressDetails()
    await OrderDetailsScreen.getTotalOrder3()
    // await OrderDetailsScreen.viewPaymentMethod()
});