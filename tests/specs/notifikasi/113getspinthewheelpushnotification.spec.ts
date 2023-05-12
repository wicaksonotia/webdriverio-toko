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
allureReporter.addTestId('[TOKO] 113. Get Spin the Wheel Push Notification');
allureReporter.addFeature('26. View details new Spin the Wheel Push Push Notification');

Given(/^I am in Home screen$/, async () => {
    // await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
});

When(/^there is a new Spin the Wheel notification and I tap Spin the Wheel push notification$/, async () => {
    await browser.pause(120000) //untuk nunggu notifnya masuk
    await driver.openNotifications()
});

Then(/^System should be leading to details Spin the Wheel notification$/, async () => {
    await BerandaScreen.tapPushNotif()
});
