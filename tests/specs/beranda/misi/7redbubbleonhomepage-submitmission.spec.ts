import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../../screenobjects/components/TabBar';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import ListMisiScreen from '../../../screenobjects/beranda/misi/listmisiScreen';
import FormMisiScreen from '../../../screenobjects/beranda/misi/formmisiScreen';
import NotifikasiScreen from '../../../screenobjects/notifikasi/notifikasiScreen';
import Gestures from '../../../helpers/Gestures';
const dataTest = require('../../../datatest/ayotoko.data.ts');

    // use allure API for allure reporter
    // allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[TOKO] 07. Red bubble on homepage (submit mission)');
    allureReporter.addFeature('07. Submit mission from the Red bubble Misi Homepage');

Given(/^I am in Home screen and show shop name$/, async () => {
    await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
    await BerandaScreen.getCounterRedbubbleMisi()
});

When(/^I click menu 'Misi'$/, async () => {
    await BerandaScreen.menuMisi()
});

Then(/^System should be leading to Mission List screen$/, async () => {
    await ListMisiScreen.waitForIsShown(true);
});

Given(/^I am on the Mission List screen$/, async () => {
    await ListMisiScreen.page()
});

When(/^I view detail mission and submit form$/, async () => {
    await ListMisiScreen.viewZMisi()
    await FormMisiScreen.waitForIsShown(true);
    // await FormMisiScreen.getDetailsmission()
    await FormMisiScreen.formMissionTSM1({ans1:dataTest.mission.misi1Ans1,ans2:dataTest.mission.misi1Ans2,ans9:dataTest.mission.misi1Ans9})
    await FormMisiScreen.lanjutkan()
});

Then(/^System should be able to submit data$/, async () => {
    await ListMisiScreen.waitForIsShown(true)
    await ListMisiScreen.page()
});

Then(/^System will send a notification that the user gets coins$/, async () => {
    await driver.pause(5000)
    await driver.back();
    await BerandaScreen.waitForIsShown(true);
    await TabBar.openNotifikasi()
    await NotifikasiScreen.waitForIsShown(true)
    await NotifikasiScreen.viewTabMisi()
    await NotifikasiScreen.viewNotif1({titleNotif: dataTest.notif.titleEarnCoin})
    await NotifikasiScreen.scrollDetailNotifSC7()
    await driver.pause(5000)
    await driver.back();
    await TabBar.openBeranda()
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.getCounterRedbubbleMisi()
    await BerandaScreen.getCurrentMyCoin()
    await BerandaScreen.getCurrentMyPoin()
});
