import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 14. Click coin on homepage (Non Registered HMS)');
    allureReporter.addFeature('14. Account Non Registered HMS click coin menu');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    // await BerandaScreen.waitForIsShown(true);
    // await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameNonHms })
    await BerandaScreen.getCurrentMyCoin()
});

When(/^I click menu 'Coin'$/, async () => {
    await BerandaScreen.menuCoin()
});

Then(/^System should be show alert message$/, async () => {
    await BerandaScreen.popUpAlert({messageAlert: dataTest.mission.alertMessageNonHms})
    await BerandaScreen.closePopUpAlert()
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameNonHms })
});
