import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import XPScreen from '../../../screenobjects/beranda/xp/xpScreen';
import ListMisiScreen from '../../../screenobjects/beranda/misi/listmisiScreen';
import FormMisiScreen from '../../../screenobjects/beranda/misi/formmisiScreen';
import NotifikasiScreen from '../../../screenobjects/notifikasi/notifikasiScreen';
import DetailNotifikasiScreen from '../../../screenobjects/notifikasi/detailsnotifikasiScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 91. AYO XP');
    allureReporter.addFeature('91. AYO XP');

Given(/^I am in Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
    await BerandaScreen.getCurrentMyCoin()
    await BerandaScreen.getCurrentMyPoin()
});

When(/^I click XP bar$/, async () => {
    await BerandaScreen.viewXP()
});

Then(/^System should be leading to XP screen and show current XP$/, async () => {
    await XPScreen.waitForIsShown(true);
});

Given(/^I am in XP screen$/, async () => {
    await XPScreen.page()
    await XPScreen.viewTermsConditions()
    await driver.back()
    await XPScreen.viewXPHistory()
});

When(/^I click button 'Ke Halaman Misi'$/, async () => {
    await XPScreen.toMisiScreen()
});

Then(/^System should be leading to Mission List screen$/, async () => {
    await ListMisiScreen.waitForIsShown(true);
});

Given(/^I am on the Mission List screen$/, async () => {
    await ListMisiScreen.page()
});

When(/^I view detail mission and submit form$/, async () => {
    await ListMisiScreen.getXPTitle()
    await ListMisiScreen.viewAMisi()
    await FormMisiScreen.formMissionXP({ans1:dataTest.mission.misi2Ans1})
    await FormMisiScreen.lanjutkan()
    await ListMisiScreen.nantiSaja()
    await driver.openNotifications()
    await BerandaScreen.tapPushNotif1()
    await DetailNotifikasiScreen.page()
    await driver.back()
});

Then(/^System should be able to submit data and XP bar turns full red$/, async () => {
    await ListMisiScreen.page()
    await driver.back()
    await BerandaScreen.waitForIsShown()
    await Gestures.refresh()
    await driver.pause(10000)
    await BerandaScreen.menuMisi()
    await ListMisiScreen.getXPTitle()
    await ListMisiScreen.viewAMisi()
    await FormMisiScreen.waitForIsShown(true);
    await FormMisiScreen.formMissionXP({ans1:dataTest.mission.misi2Ans1})
    await FormMisiScreen.lanjutkan()
    await ListMisiScreen.nantiSaja()
    await driver.openNotifications()
    await BerandaScreen.tapPushNotif1()
    await DetailNotifikasiScreen.page()
    await driver.back()
    await ListMisiScreen.page()
    await driver.back()
    await BerandaScreen.waitForIsShown()
    await Gestures.refresh()
    await driver.pause(10000)
    await BerandaScreen.viewXP()
    await XPScreen.waitForIsShown(true);
    await XPScreen.page()
});
