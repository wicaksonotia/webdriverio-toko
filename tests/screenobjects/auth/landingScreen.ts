import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class LandingScreen extends AppScreen {
    constructor () {
        super('~page-1');
    }

    //define selectors using getter methods
    private get page1 () { return $('~page-1'); }
      private get slide1 () { return $('~slide-1'); }
      private get slide2 () { return $('~slide-2'); }
      private get slide3 () { return $('~slide-3'); }
    private get page2 () { return $('~page-2'); }
    private get btnToLogin () { return $('~btnToLogin'); }

    //a method to encapsule automation code to interact with the page
    async waitForPage1Shown ():Promise<boolean|void> {
        return this.page1.waitForDisplayed({
            timeout: 40000,
            timeoutMsg: 'expected page1 not existing after 40s'
        });
    }

    async landingPage1 () {
        await browser.waitUntil(
            async () => (await (this.slide1).isExisting()),
            {
                timeout: 30000,
                timeoutMsg: 'expected landing1 not existing after 30s'
            }
        )
    }

    async landingPage2 () {
        await browser.waitUntil(
            async () => (await (this.slide2).isExisting()),
            {
                timeout: 30000,
                timeoutMsg: 'expected landing2 not existing after 30s'
            }
        )
    }

    async landingPage3 () {
        await browser.waitUntil(
            async () => (await (this.slide3).isExisting()),
            {
                timeout: 30000,
                timeoutMsg: 'expected landing3 not existing after 30s'
            }
        )
    }

    async waitForPage2Shown ():Promise<boolean|void> {
        return this.page2.waitForDisplayed({
            timeout: 40000,
            timeoutMsg: 'expected page2 not existing after 40s'
        });
    }

    async landingDone () {
        // await expect(this.btnToLogin).toBeClickable()
        await this.btnToLogin.click()
    }
    //right to left
    async swipeHorizontalLeft () {
        //
        // const anchorPercentage = 50
        // const startPointPercentage = 90
        // const endPointPercentage = 10

        // const {height, width} = driver.getWindowSize()
        // const anchor = height * anchorPercentage / 100
        // const startPoint = width * startPointPercentage / 100
        // const endPoint = width * endPointPercentage / 100

        for (let swipeTime = 0; swipeTime < 5; swipeTime++){
            driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: 950, // startPoint  600
                        y: 1400 //anchor      780
                    }
                },
                {
                    action: 'wait',
                    options: {ms: 1000}
                },
                {
                    action: 'moveTo',
                    options: {
                        x: 150, // endPoint    100
                        y: 1400 //anchor  780
                    }
                },
                {
                    action: 'release',
                    options: {}
                }
            ])
        }
    }

    async done () {
        await this.btnToLogin.click();
    }
}

export default new LandingScreen();
