import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import CoinScreen from '../../../screenobjects/beranda/coin/coinScreen';
import SaldoPojokBayarScreen from '../../../screenobjects/beranda/coin/saldopojokbayarScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 20. Coin Disbursement - Select Payment (Pojok Bayar)');
    allureReporter.addFeature('20. Go to coin disbursement Saldo Pojok Bayar the Ayo SRC Apps');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true);
    // await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName4 })
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

When(/^I click button 'Tukar Koin' then click card 'Saldo Pojok Bayar'$/, async () => {
    await CoinScreen.tukarKoin()
    await CoinScreen.selectSaldoPojokBayar()
});

Then(/^System should be leading to Saldo Pojok Bayar screen$/, async () => {
    await SaldoPojokBayarScreen.waitForIsShown(true);
    await SaldoPojokBayarScreen.page()
});
