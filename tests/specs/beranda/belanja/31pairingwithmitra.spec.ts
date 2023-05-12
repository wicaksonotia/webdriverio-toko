import { Given, When, Then } from '@cucumber/cucumber';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import SelectAgenScreen from '../../../screenobjects/beranda/poin/selectagenScreen';
const dataTest = require('../../../datatest/ayotoko.data.ts');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true)
    await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown()
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameTia })
});

When(/^I click menu 'Belanja'$/, async () => {
    await BerandaScreen.menuBelanja()
});

Then(/^System should be leading to Select Agen screen$/, async () => {
    await SelectAgenScreen.waitForIsShown(true);
});

Given(/^I am in Select Agen screen$/, async () => {
    // await SelectAgenScreen.page()
});

When(/^I select agen to pairing and go back to Home screen$/, async () => {
    await SelectAgenScreen.searchAgen({ kodeAgen: 'MITRAWIRATANI12' })
    await SelectAgenScreen.selectAgen()
    await SelectAgenScreen.confirmPairing()
});

Then(/^System should be leading to Home screen$/, async () => {
    await BerandaScreen.waitForIsShown(true);
});