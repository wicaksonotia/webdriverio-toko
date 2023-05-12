import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import NotifikasiScreen from '../../../screenobjects/notifikasi/notifikasiScreen';
import ShoppingCartScreen from '../../../screenobjects/beranda/belanja/shoppingcartScreen';
import CheckoutScreen from '../../../screenobjects/beranda/belanja/checkoutScreen';
import OrderDetailsScreen from '../../../screenobjects/beranda/belanja/orderdetailsScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('PositiveCase');
    allureReporter.addTestId('[TOKO] 27. GSM - Perform B2B Transaction (Pengiriman Diambil)');
    allureReporter.addFeature('27. Perform B2B Transaction (Pengiriman Diambil)');

//Scenario Outline: As a user, As a user, I can order B2B for pick up
//Scenario Outline: As a user, I can go to order online screen
Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
});

When(/^I click menu 'Notifikasi', there is a new GSM Notification and I click on that notification$/, async () => {
    await browser.pause(10000) //wait notif from HERO
    await TabBar.openNotifikasi()
    await NotifikasiScreen.waitForIsShown(true);
    await NotifikasiScreen.page()
    await NotifikasiScreen.viewNotif1({titleNotif: dataTest.notif.titleProductRecommend })
});

Then(/^System should be leading to details GSM Notification screen$/, async () => {
    await ShoppingCartScreen.waitForIsShown(true)
    await ShoppingCartScreen.getDetailProduct()
});

When(/^I click button 'Checkout'$/, async () => {
    await ShoppingCartScreen.ship()
});

Then(/^System should be leading to Checkout screen$/, async () => {
    await CheckoutScreen.waitForIsShown(true);
});

//Scenario Outline: As a user, I can order some of products for pick up
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
});