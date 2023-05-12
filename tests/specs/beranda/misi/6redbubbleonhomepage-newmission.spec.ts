import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

// use allure API for allure reporter
// allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[TOKO] 06. Red bubble on homepage (new mission)');
allureReporter.addFeature('06. Read New Mission on the Red Bubble Misi Homepage');

Given(/^I am in Home screen and show shop name and existing new misi$/, async () => {
    await BerandaScreen.waitForIsShown(true)
    // await BerandaScreen.waitForAvatarShown()
    // await TabBar.waitForTabBarShown()
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameTia })
    await BerandaScreen.getCounterRedbubbleMisi()
});

When(/^there is a new mission and I refresh the home screen$/, async () => {
    await browser.pause(60000) //untuk run [PRINCIPAL] 05. Create TSM without Pin Up Mission
    await Gestures.refresh()
    await browser.pause(10000)
});

Then(/^System should be display the number addition of a new mission on the red bubble menu misi$/, async () => {
    await BerandaScreen.getCounterRedbubbleMisi()
    await BerandaScreen.getCurrentMyCoin()
    await BerandaScreen.getCurrentMyPoin()
});
