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
    allureReporter.addTestId('[TOKO] 93. Submit UPC Mission');
    allureReporter.addFeature('93. Submit UPC Mission');
    
Given(/^I am in Home screen$/, async () => {
    await BerandaScreen.waitForIsShown(true);
    await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopName2 })
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
});

When(/^I view detail mission and submit form$/, async () => {
    await ListMisiScreen.viewZMisi()
    await FormMisiScreen.waitForIsShown(true);
    await FormMisiScreen.formUPCMission({upc1:dataTest.mission.inpupc1,upc2:dataTest.mission.inpupc2})
    await FormMisiScreen.submitMisiUPC()
});

Then(/^System should be able to submit data$/, async () => {
    await FormMisiScreen.waitForIsShown(true)
    await FormMisiScreen.getDetailsUPCMission()
});

