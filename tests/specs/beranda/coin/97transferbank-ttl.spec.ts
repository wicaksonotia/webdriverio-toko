import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import CoinScreen from '../../../screenobjects/beranda/coin/coinScreen';
import TransferBankScreen from '../../../screenobjects/beranda/coin/transferbankScreen';
import PencairanKoinScreen from '../../../screenobjects/beranda/coin/pencairankoinScreen';
import TambahRekeningScreen from '../../../screenobjects/beranda/coin/tambahrekeningScreen';
import SecurityCodeScreen from '../../../screenobjects/beranda/coin/securitycodeScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 97. Transfer Bank - TTL');
    allureReporter.addFeature('97. Transfer Bank - TTL');

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

When(/^I click button 'Tukar Koin' then click menu 'Transfer Ke Rekening Bank'$/, async () => {
    await CoinScreen.tukarKoin()
    await CoinScreen.selectTransferRekeningBank()
});

Then(/^System should be leading to Transfer Bank screen$/, async () => {
    await TransferBankScreen.waitForIsShown(true);
    await TransferBankScreen.page()
});

When(/^I click voucher$/, async () => {
    await TransferBankScreen.redeemTransferBank()
});

Then(/^System should be leading to Coin Disbursement screen$/, async () => {
    await PencairanKoinScreen.waitForIsShown(true);
});

Given(/^I am in Coin Disbursement screen$/, async () => {
    await PencairanKoinScreen.page()
});

When(/^I click button 'Ubah Rekening'$/, async () => {
    await PencairanKoinScreen.ubahRekening()
});

Then(/^System should be leading to Tambah Rekening screen$/, async () => {
    await TambahRekeningScreen.waitForIsShown(true);
});

Given(/^I am in Tambah Rekening screen$/, async () => {
    await TambahRekeningScreen.page()
});

When(/^I fill form and submit$/, async () => {
    await TambahRekeningScreen.tambahRekening({norek: dataTest.coin.noRekening, tl: dataTest.coin.tempatLahir})
    await TambahRekeningScreen.submit()
    await SecurityCodeScreen.waitForIsShown(true)
    await SecurityCodeScreen.page()
    await SecurityCodeScreen.inputSecurityCode({sc1:'0',sc2:'1',sc3:'1',sc4:'1',sc5:'1',sc6:'0'})
});

Then(/^System should be update my place and date of birth$/, async () => {
    await PencairanKoinScreen.waitForIsShown(true);
});