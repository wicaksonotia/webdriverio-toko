import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class MainmenuPage extends Page {
    
    //define selectors using getter methods
    get titleDashboard () { return $('#dashboard-title') }
    get accountName () { return $('#account-name') }
    get btnAccount () { return $('button.user-button.mat-button') }
    get btnSignOut () { return $('#cdk-overlay-0 > div > div > button:nth-child(2)') }

    //Section DTE menu
    get templateTugasMenu () { return $('#menu-29') }
    get groupTradeMenu () { return $('#menu-73') }
    get tradeProgramMenu () { return $('#menu-30') }
    get pengaturJadwalProgramMenu () { return $('#menu-31') }
    get approvalCoinAdjustmentMenu () { return $('#menu-129') }
    get audienceMenu () { return $('#menu-32') }
    get dteAutomationMenu () { return $('#menu-51') }
    get taskVerificationMenu () { return $('#menu-103') }
    get taskSequencingMenu () { return $('#menu-116') }
    get pengaturanAttributeMisiMenu () { return $('#menu-105') }
    get coinDisbursementMenu () { return $('#menu-131') }


    //a method to encapsule automation code to interact with the page
    async dashboard ({ accountname }: {accountname:string}) {
        await this.titleDashboard.waitForDisplayed();
        await expect(this.titleDashboard).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('dashboard')
        await expect(this.accountName).toBeDisplayed()
        await expect(this.accountName).toHaveText(accountname)
        await browser.pause(10000)
    }
    
    async signOut () {
        await this.btnAccount.click();
        await this.btnSignOut.click();
    }

    async templateTugas () {
        await this.templateTugasMenu.click();
    }

    async groupTrade () {
        await this.groupTradeMenu.click();
    }

    async tradeProgram () {
        await this.tradeProgramMenu.click();
    }

    async pengaturJadwalProgram () {
        await this.pengaturJadwalProgramMenu.click();
    }

    async approvalCoinAdjustment () {
        await this.approvalCoinAdjustmentMenu.click();
    }

    async audience () {
        await this.audienceMenu.click();
    }

    async dteAutomation () {
        await this.dteAutomationMenu.click();
    }

    async taskVerification () {
        await this.taskVerificationMenu.click();
    }

    async taskSequencing () {
        await this.taskSequencingMenu.click();
    }

    async pengaturanAttributeMisi () {
        await this.pengaturanAttributeMisiMenu.click();
    }

    async coinDisbursement () {
        await this.coinDisbursementMenu.click();
    }
    
    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new MainmenuPage();