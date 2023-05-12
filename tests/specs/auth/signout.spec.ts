import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';

import LoginPage from '../../pageobjects/login/login.page';
import VerifikasiPerangkatPage from '../../pageobjects/login/verifaccount.page';
import LoginMicrosoftPage from '../../pageobjects/login/microsoft.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[TOKO] 01a');
allureReporter.addFeature('Sign out from The Ayo Toko app');

Given(/^I am on the principal Ayo SRC$/, async (account_name) => {
    await LoginPage.open()
    await MainmenuPage.dashboard(account_name)
    // await browser.deleteAllCookies()
    // await browser.deleteSession()
    await LoginPage.acceptCookie()
    await browser.pause(5000)
});

When(/^I sign out from The Principal Ayo Src website$/, async () => {
    await MainmenuPage.signOut()
});

Then(/^System should be leading to Home screen Ayo Src$/, async () => {
    await LoginPage.welcome()
});
