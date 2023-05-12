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
    allureReporter.addTestId('[TOKO] 25. GSM - Get GSM Notification (From Menu Notification)');
    allureReporter.addFeature('25. View details new GSM Notification');

Given(/^I am in Home screen$/, async () => {
    await BerandaScreen.waitForIsShown(true)
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
});

When(/^there is a new GSM Notification and I click menu notification$/, async () => {
    // await browser.pause(40000) //untuk add notif from HERO
    await TabBar.openNotifikasi()
    await NotifikasiScreen.waitForIsShown(true)
    await NotifikasiScreen.page()
    await NotifikasiScreen.viewNotif1({titleNotif: dataTest.notif.titleProductRecommend })
});

Then(/^System should be leading to details GSM Notification screen$/, async () => {
    await ShoppingCartScreen.waitForIsShown(true)
    await ShoppingCartScreen.page()
    await ShoppingCartScreen.getDetailProduct()
    await browser.pause(3000)
});
