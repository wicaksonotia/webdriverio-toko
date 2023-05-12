import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import CoinScreen from '../../../screenobjects/beranda/coin/coinScreen';
import UndianScreen from '../../../screenobjects/beranda/coin/undianScreen';
import DetailUndianScreen from '../../../screenobjects/beranda/coin/detailundianScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 112. Undian');
    allureReporter.addFeature('112. Kupon Undian');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true);
    // await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
    await BerandaScreen.getCurrentMyCoin()
});

When(/^I click menu 'Coin'$/, async () => {
    await BerandaScreen.menuCoin()
});

Then(/^System should be leading to Coin screen$/, async () => {
    await CoinScreen.waitForIsShown(true);
    await driver.pause(3000)
});

Given(/^I am in Coin screen$/, async () => {
    await CoinScreen.page()
    // await CoinScreen.getExpDateCoin()
});

When(/^I click button 'Tukar Koin' then click menu 'Kupon Undian'$/, async () => {
    await CoinScreen.tukarKoin()
    await CoinScreen.selectUndian()
});

Then(/^System should be leading to Undian screen$/, async () => {
    await UndianScreen.waitForIsShown(true);
});

When(/^I click program kupon undian$/, async () => {
    await UndianScreen.ikutUndian()
});

Then(/^System should be leading to Detail Kupon Undian screen$/, async () => {
    await DetailUndianScreen.waitForIsShown(true);
});

Given(/^I am in Detail Kupon Undian screen$/, async () => {
    await DetailUndianScreen.page()
});

When(/^I input amount of undian i want to get$/, async () => {
    await DetailUndianScreen.ikutUndian()
});

Then(/^System should be leading back to Detail Kupon Undian screen$/, async () => {
    await DetailUndianScreen.page()
    await DetailUndianScreen.cekKuponUndian()
});

When(/^I click button back two times then refresh page$/, async () => {
    await DetailUndianScreen.back()
    await UndianScreen.back()
});

Then(/^System should be leading to Detail Pembayaran Koin screen and show history$/, async () => {
    await CoinScreen.waitForIsShown(true)
    await CoinScreen.page()
    await CoinScreen.back()
    await BerandaScreen.waitForIsShown(true)
    await BerandaScreen.menuCoin()
    await driver.pause(5000)
    await CoinScreen.getDetailHistory1()
    await CoinScreen.clickDetailHistory1()
    await CoinScreen.page()
    await CoinScreen.tukarKoin()
    await CoinScreen.selectUndian()
    await UndianScreen.waitForIsShown(true);
    await UndianScreen.ikutUndian()
    await DetailUndianScreen.waitForIsShown(true);
    await DetailUndianScreen.page()
    await DetailUndianScreen.cekPemenang()
});
