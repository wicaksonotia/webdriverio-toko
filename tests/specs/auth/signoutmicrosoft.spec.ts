import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';

import LoginMicrosoftPage from '../../pageobjects/login/microsoft.page';

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addFeature('Success sign out from microsoft account');

Given(/^I am on the microsoft screen$/, async () => {
    await LoginMicrosoftPage.open()
    await LoginMicrosoftPage.microsoftPage()
    await browser.pause(8000)
});

When(/^I sign out account$/, async () => {
    await LoginMicrosoftPage.signOutMicrosoft()
    await browser.pause(8000)
});

Then(/^System will leading to home screen office$/, async () => {
    await LoginMicrosoftPage.officeSignoutPage()
    await browser.pause(5000)
});
