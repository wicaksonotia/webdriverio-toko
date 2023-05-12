import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import ListMisiScreen from '../../../screenobjects/beranda/misi/listmisiScreen';
import FormMisiScreen from '../../../screenobjects/beranda/misi/formmisiScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 13. Mission List - Detail (Tab Kadaluarsa)');
    allureReporter.addFeature('13. View mission details of tab Kadaluarsa');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
    await BerandaScreen.getCurrentMyCoin()
    await BerandaScreen.getCurrentMyPoin()
});

When(/^I click menu 'Misi'$/, async () => {
    await BerandaScreen.menuMisi()
});

Then(/^System should be leading to Mission List screen$/, async () => {
    await ListMisiScreen.waitForIsShown(true);
});

When(/^I view tab 'Kadaluarsa'$/, async () => {
    await ListMisiScreen.page()
});

Then(/^System should be able to leading to list misi 'Kadaluarsa'$/, async () => {
    await ListMisiScreen.viewMisiKadaluarsa()
});

When(/^I view a mission$/, async () => {
    await ListMisiScreen.viewAMisi()
});

Then(/^System should be able to leading to detail mission screen$/, async () => {
    await driver.pause(3000);
    await FormMisiScreen.waitForIsShown(true);
    await FormMisiScreen.getDetailsmission()
});
    