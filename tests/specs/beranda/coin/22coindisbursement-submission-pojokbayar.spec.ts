import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import CoinScreen from '../../../screenobjects/beranda/coin/coinScreen';
import SaldoPojokBayarScreen from '../../../screenobjects/beranda/coin/saldopojokbayarScreen';
import PencairanKoinScreen from '../../../screenobjects/beranda/coin/pencairankoinScreen';
import SecurityCodeScreen from '../../../screenobjects/beranda/coin/securitycodeScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 22. Coin Disbursement - Submission (Pojok Bayar)');
    allureReporter.addFeature('22. Redeem coins Saldo Pojok Bayar the Ayo SRC Apps');

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
});

When(/^I click voucher$/, async () => {
    await SaldoPojokBayarScreen.redeemSaldoPojokBayar()
});

Then(/^System should be leading to Coin Disbursement screen$/, async () => {
    await PencairanKoinScreen.waitForIsShown(true);
});

Given(/^I am in Coin Disbursement screen$/, async () => {
    await PencairanKoinScreen.page()
});

When(/^I submit coin disbursement with data exchanged coins then input the security code$/, async () => {
    await PencairanKoinScreen.redeemCoinPB({koinToRedeem: dataTest.coin.koinToRedeemPB})
    await PencairanKoinScreen.submitRedeem()
    await SecurityCodeScreen.waitForIsShown(true)
    await SecurityCodeScreen.page()
    await SecurityCodeScreen.inputSecurityCode({sc1:'0',sc2:'1',sc3:'1',sc4:'1',sc5:'1',sc6:'0'})
});

Then(/^System should be leading back to Coin Disbursement screen$/, async () => {
    await PencairanKoinScreen.popUpAlertSuccessRedeemPB()
    await PencairanKoinScreen.page()
});

// Scenario Outline: As a user, I can view history redeem coins Saldo Pojok Bayar the Ayo SRC Apps
When(/^I click button back two times then refresh page$/, async () => {
    await PencairanKoinScreen.back()
    await PencairanKoinScreen.back()
});

Then(/^System should be leading to Detail Pembayaran Koin screen and show history redeem coins$/, async () => {
    await CoinScreen.waitForIsShown(true)
    await Gestures.refreshcd()
    await CoinScreen.page()
    await driver.pause(3000)
    await CoinScreen.getDetailHistory1()
});
