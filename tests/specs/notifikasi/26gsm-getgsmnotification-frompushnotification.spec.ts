import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../screenobjects/components/TabBar';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import Gestures from '../../helpers/Gestures';
import NotifikasiScreen from '../../screenobjects/notifikasi/notifikasiScreen';
import ShoppingCartScreen from '../../screenobjects/beranda/belanja/shoppingcartScreen';
const dataTest = require('../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 26. GSM - Get GSM Notification (From Push Notification)');
    allureReporter.addFeature('26. View details new GSM Push Notification');

Given(/^I am in Home screen$/, async () => {
    await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
});

When(/^there is a new GSM Notification and I tap GSM push notification$/, async () => {
    await browser.pause(60000) //untuk add notif GSM from HERO
    // await Gestures.swipeDownRefresh()
    await driver.openNotifications()
    await BerandaScreen.tapPushNotif1()
});

Then(/^System should be leading to details GSM Notification, Shopping cart screen$/, async () => {
    await ShoppingCartScreen.waitForIsShown(true);
    await ShoppingCartScreen.page()
    await browser.pause(3000)
    await ShoppingCartScreen.getDetailProduct()
    await browser.pause(3000)
});
