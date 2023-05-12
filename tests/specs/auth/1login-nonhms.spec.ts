import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import TabBar from '../../screenobjects/components/TabBar';
import LandingScreen from '../../screenobjects/auth/landingScreen';
import LoginScreen from '../../screenobjects/auth/loginScreen';
import SecurityCodeScreen from '../../screenobjects/auth/securitycodeScreen';
import OtpScreen from '../../screenobjects/auth/otpScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import Gestures from '../../helpers/Gestures';
const dataTest = require('../../datatest/ayotoko.data.ts');

// use allure API for allure reporter
// allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[TOKO] 01. Login Non Hms');
allureReporter.addFeature('01. Login Non Registered HMS to The Ayo SRC Apps');

Given(/^I am on the landing 1 Ayo SRC Toko$/, async () => {
    await LandingScreen.waitForIsShown(true);
    await LandingScreen.waitForPage1Shown()
    await LandingScreen.landingPage1()
    await LandingScreen.landingPage2()
    await LandingScreen.landingPage3()
});

When(/^I swipe up and system displays landing 2, I click button 'Masuk Sekarang'$/, async () => {
    await Gestures.swipeUpCustom()
    await LandingScreen.waitForPage2Shown()
    await Gestures.swipeUpCustom()
    await LandingScreen.landingDone()
});

Then(/^System should be leading to Login screen Ayo SRC Toko$/, async () => {
    await LoginScreen.waitForIsShown(true);
});

Given(/^I am on the login screen Ayo SRC Toko$/, async () => {
    await LoginScreen.loginTokoPage()
});

When(/^I login with phone number (.*)$/, async (phonenumber) => {
    await LoginScreen.loginToko({ phonenumber: dataTest.account.phonenumberNonHms })
    await LoginScreen.masuk()
});

Then(/^System should be leading to Security Code screen$/, async () => {
    await SecurityCodeScreen.waitForIsShown(true);
});

Given(/^I am on the security code screen Ayo SRC Toko$/, async () => {
    await SecurityCodeScreen.page()
});

When(/^I input security code and submit$/, async () => {
    await SecurityCodeScreen.inputSecurityCode2({sc1:'2',sc2:'5',sc3:'2',sc4:'5',sc5:'2',sc6:'5'})
    // await SecurityCodeScreen.submit()
});

Then(/^System should be leading to 'Access from other devices' screen$/, async () => {
    await OtpScreen.waitForIsShown(true);
    await OtpScreen.page()
});

When(/^I input otp and submit$/, async () => {
    await OtpScreen.inputOtp({otp1:'1',otp2:'2',otp3:'3',otp4:'4',otp5:'5',otp6:'6'})
    // await OtpScreen.submitSmsOtp()
});

Then(/^System should be leading to Home screen (.*)$/, async (shopname) => {
    await BerandaScreen.tutorialNonHMS();
    // await BerandaScreen.waitForIsShown(true);
    // await BerandaScreen.waitForAvatarShown()
    // await TabBar.waitForTabBarShown();
    await BerandaScreen.beranda({ shopname: dataTest.account.shopNameNonHms })
});
