import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import OrderOnlineScreen from '../../../screenobjects/beranda/belanja/orderonlineScreen';
import OrderDetailsScreen from '../../../screenobjects/beranda/belanja/orderdetailsScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 39. Confirm Order (Barang Telah Diterima)');
    allureReporter.addFeature('39. Confirm Order (Barang Telah Diterima)');

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

When(/^I click my order history$/, async () => {
    await OrderOnlineScreen.getDetailOrder1()
    await OrderOnlineScreen.view1HistoryProdukMitra()
});

Then(/^System should be leading to Detail Transaksi screen$/, async () => {
    await OrderDetailsScreen.waitForIsShown(true)
});

Given(/^I am in Detail Transaksi screen$/, async () => {
    await OrderDetailsScreen.page()
});

When(/^I click button 'BARANG TELAH DITERIMA'$/, async () => {
    // await OrderDetailsScreen.expandStatus()
    await OrderDetailsScreen.confirmOrder()
    await driver.pause(5000)
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