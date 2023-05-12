import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class SpinTheWheelScreen extends AppScreen {
    constructor () {
        super('~SpinTheWheelComponent');
    }

    //define selectors using getter methods
    private get btnPuter0 () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.ImageView') }
    private get btnPuter () { return $('//android.view.ViewGroup[@content-desc="SpinTheWheelComponent"]/android.view.ViewGroup[5]/android.view.ViewGroup') }
    private get buttonShowHistory () { return $('~buttonShowHistory') }

    //a method to encapsule automation code to interact with the page
    async spin (){
        await driver.pause(3000)
        // await this.btnPuter0.click();
        await this.btnPuter.click();
        await this.buttonShowHistory.waitForDisplayed();
        await this.buttonShowHistory.click();
    }
}
export default new SpinTheWheelScreen();