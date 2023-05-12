import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import PoinScreen from '../../../screenobjects/beranda/poin/poinScreen';
import SelectAgenScreen from '../../../screenobjects/beranda/poin/selectagenScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 04. Click poin on homepage (no mitra)');
    allureReporter.addFeature('04. Go to poin screen for account no mitra');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
    await BerandaScreen.getCurrentMyPoin()
});

When(/^I click menu 'Poin'$/, async () => {
    await BerandaScreen.menuPoin()
});

Then(/^System should be leading to Select Agen screen$/, async () => {
    await SelectAgenScreen.waitForIsShown(true);
});

Given(/^I am in Select Agen screen$/, async () => {
    await SelectAgenScreen.page()
});

When(/^I select agen to pairing and go back to Home screen$/, async () => {
    await SelectAgenScreen.searchAgen({kodeAgen: 'BOT00152093'})
    await SelectAgenScreen.selectAgen()
    await SelectAgenScreen.confirmPairing()
    await BerandaScreen.waitForIsShown(true);
});

When(/^I click menu 'Poin' to view details Mitra$/, async () => {
    await BerandaScreen.menuPoin()
});

Then(/^System should be leading to Poin screen$/, async () => {
    await PoinScreen.waitForIsShown(true);
    await PoinScreen.page()
    await PoinScreen.getDetailToko()
    await PoinScreen.poinKamu()
    await PoinScreen.getDetailPoinSaya()
    await PoinScreen.viewTabRiwayat()
});
