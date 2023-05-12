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
allureReporter.addTestId('[TOKO] 09. Mission Menu - submit mission');
allureReporter.addFeature('09. Mission Menu - submit mission');

Given(/^I am in Home screen and show shop name$/, async () => {
    await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameTia })
    await BerandaScreen.getCurrentMyCoin()
    await BerandaScreen.getCurrentMyPoin()
});

When(/^I click menu 'Misi'$/, async () => {
    await BerandaScreen.menuMisi()
});

Then(/^System should be leading to Mission List screen$/, async () => {
    await ListMisiScreen.waitForIsShown(true);
});

Given(/^I am on the Mission List screen$/, async () => {
    await ListMisiScreen.page()
    await ListMisiScreen.viewAmountMisiBaru()
});

When(/^I view detail mission and submit form$/, async () => {
    await driver.pause(5000)
    await ListMisiScreen.viewZMisi()
    await FormMisiScreen.waitForIsShown(true);
    // await FormMisiScreen.getDetailsmission()
    await FormMisiScreen.formMissionTSM2({ ans1: dataTest.mission.misi2Ans1, ans2: dataTest.mission.misi2Ans2, ans4: dataTest.mission.misi2Ans4, ans5: dataTest.mission.misi2Ans5, ans6: dataTest.mission.misi2Ans6, ans9: dataTest.mission.misi2Ans9 })
    await FormMisiScreen.lanjutkan()
});

Then(/^System should be able to submit data$/, async () => {
    await ListMisiScreen.waitForIsShown(true)
    await ListMisiScreen.page()
    await Gestures.refresh()
    await ListMisiScreen.viewAmountMisiBaru()
});

