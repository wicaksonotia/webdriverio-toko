import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import ListMisiScreen from '../../../screenobjects/beranda/misi/listmisiScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 08. Mission Menu - new mission');
    allureReporter.addFeature('08. read new mission one the List Mission screen');

Given(/^I am in Home screen and show shop name$/, async () => {
    await BerandaScreen.waitForIsShown(true)
    await TabBar.waitForTabBarShown()
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
    await BerandaScreen.getCounterRedbubbleMisi()
});

When(/^I click menu 'Misi'$/, async () => {
    await BerandaScreen.menuMisi()
});

Then(/^System should be leading to Mission List screen$/, async () => {
    await ListMisiScreen.waitForIsShown(true)
});

Given(/^I am on the Mission List screen$/, async () => {
    await ListMisiScreen.page()
    await ListMisiScreen.viewAmountMisiBaru()
});

When(/^there is a new mission and I click 'Tab Tersedia'/, async () => {
    await browser.pause(20000) //untuk run [PRINCIPAL] 05. Create TSM without Pin Up Mission
    await ListMisiScreen.viewMisiBaru()
    await browser.pause(10000)
});

Then(/^system should be display an increase in the number of missions$/, async () => {
    await ListMisiScreen.viewAmountMisiBaru()
    await driver.back()
    await browser.pause(3000)
    await Gestures.refresh()
    await BerandaScreen.getCounterRedbubbleMisi()
    await BerandaScreen.getCurrentMyCoin()
    await BerandaScreen.getCurrentMyPoin()
});
