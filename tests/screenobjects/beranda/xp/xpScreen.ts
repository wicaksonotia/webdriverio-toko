import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class XPScreen extends AppScreen {
    constructor () {
        super('~xpHistoryList');
    }

    //define selectors using getter methods
    private get xpBanner () { return $('~xpBanner') }
    private get currentXp () { return $('~currentXp') }
    private get xpProgramDueDate () { return $('~xpProgramDueDate') }
    private get xpTncHyperLink () { return $('~xpTncHyperLink') }
      private get privacyPolicyXpTnC () { return $('~privacyPolicyXpTnC') }
    private get buttonXp () { return $('~buttonXp') }
    private get wrapperTextFilterXp () { return $('~wrapperTextFilterXp') }
      private get buttonTerapkanLabel () { return $('~buttonTerapkanLabel') }

    private get btnBack () { return $('~btnBack') }   

    //a method to encapsule automation code to interact with the page
    async page (){
        await expect(this.xpBanner).toBeDisplayed()
        // await expect(this.currentXp).toBeDisplayed()
        console.log('Current XP: '+await this.currentXp.getText());
        // await expect(this.xpProgramDueDate).toBeDisplayed()
        console.log(await this.xpProgramDueDate.getText());
    }

    async viewTermsConditions(){
        await this.xpTncHyperLink.click();
        // await expect(this.privacyPolicyXpTnC).toBeDisplayed()
        // await this.btnBack.click();
    }

    async viewXPHistory(){
        await this.wrapperTextFilterXp.click();
        await this.buttonTerapkanLabel.click();
    }

    async toMisiScreen(){
        await this.buttonXp.click();
    }

    async back () {
        await this.btnBack.click();
    }
}
export default new XPScreen();
