import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Negative Case');
    allureReporter.addTestId('[TOKO] 15. Click mission menu (Non Registered HMS)');
    allureReporter.addFeature('15. Account Non Registered HMS click mission menu');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    // await BerandaScreen.waitForIsShown(true);
    // await BerandaScreen.waitForAvatarShown()
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameNonHms })
    await BerandaScreen.getCurrentMyCoin()
    await BerandaScreen.getCurrentMyPoin()
});

When(/^I click menu 'Misi'$/, async () => {
    await BerandaScreen.menuMisi()
});

Then(/^System should be show alert message (.*)$/, async (messageAlert) => {
    await BerandaScreen.popUpAlert({messageAlert: dataTest.mission.alertMessageNonHms})
    await BerandaScreen.closePopUpAlert()
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameNonHms })
});
