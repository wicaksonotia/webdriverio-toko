import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class ListMisiScreen extends AppScreen {
    constructor () {
        super('~myMission')
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') } //Daftar Misi
    private get myCoin () { return $('~myCointInCurrency') }
    private get xpTitle () { return $('~xpTitle_in_missionList') }

    private get tabBaru () { return $('~tabBaru') }
    private get amountTabBaru () { return $('//android.view.ViewGroup[@content-desc="tabBaru"]/android.widget.TextView') }
    private get listBaru () { return $$('~missionCard-4329') }

    private get tabDikerjakan () { return $('~tabDikerjakan') }
    private get listDikerjakan () { return $('~') }

    private get tabKadaluarsa () { return $('~tabKadaluarsa') }
    private get listKadaluarsa () { return $('~') }

    private get emptyStateList () { return $('~emptyMission')} //Tidak ada misi yang harus dikerjakan, Tidak ada misi yang kadaluarsa
    private get cardListMisi () { return $$('//android.view.ViewGroup[@content-desc="missionCard"]') }
    private get coinMission () { return $$('//android.widget.TextView[@content-desc="missionCardCoin"]') }
    private get titleMission () { return $$('//android.widget.TextView[@content-desc="missionCardTitle"]') }
    private get dlMission () { return $$('//android.widget.TextView[@content-desc="missionDeadline"]') }
    
    private get btnNantiSaja () { return $('//android.view.ViewGroup[@content-desc="Nanti Saja"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
        // await this.myCoin.waitForDisplayed()
        // await expect(this.myCoin).toBeDisplayed()
        await expect(this.tabBaru).toBeDisplayed()
        // await expect(this.tabBaru).toBeClickable()
        await expect(this.tabDikerjakan).toBeDisplayed()
        // await expect(this.tabDikerjakan).toBeClickable()
        // await expect(this.tabKadaluarsa).toBeDisplayed()
        // await expect(this.tabKadaluarsa).toBeClickable()
    }

    async getXPTitle () {
        console.log(await this.xpTitle.getText());
    }

    async viewMisiBaru () {
        await this.tabBaru.click();
    }

    async viewAmountMisiBaru () {
        console.log(await this.amountTabBaru.getText());
    }

    async viewMisiDikerjakan () {
        await this.tabDikerjakan.click();
    }

    async viewMisiKadaluarsa () {
        await this.tabKadaluarsa.click();
    }

    async viewAMisi () {
    // async viewAMisi ({missionName}: {missionName:string}) {
    //     await expect(this.cardListMisi).toBeDisplayed()
    //     console.log('Mission List: ')
    //     const missionTittle = await this.titleMission
    //     missionTittle.forEach(element => {
    //         const missions = element.getText()
    //         missions.then(function(result) {
    //             console.log(result)
    //             if (String(result) == missionName) {
    //                 element.click()
    //             }
    //             else {
    //                 console.log('Misi yang dicari tidak ada')
    //             }
    //         })
    //     })
        await driver.pause(3000)
        await this.cardListMisi?.[1]?.waitForDisplayed()
        console.log(await this.titleMission?.[1]?.getText());
        console.log(await this.coinMission?.[1]?.getText());
        console.log(await this.dlMission?.[1]?.getText());
        await this.cardListMisi?.[1]?.click();
    }

    async viewZMisi () {
        await driver.pause(3000)
        await this.cardListMisi?.[0]?.waitForDisplayed()
        // async viewAMisi ({missionName}: {missionName:string}) {
        //     await expect(this.cardListMisi).toBeDisplayed()
        //     console.log('Mission List: ')
        //     const missionTittle = await this.titleMission
        //     missionTittle.forEach(element => {
        //         const missions = element.getText()
        //         missions.then(function(result) {
        //             console.log(result)
        //             if (String(result) == missionName) {
        //                 element.click()
        //             }
        //             else {
        //                 console.log('Misi yang dicari tidak ada')
        //             }
        //         })
        //     })tom()
        // await Gestures.swipeUpCustom()
        // await Gestures.swipeUpCustom()
        await Gestures.swipeUpCustom()
        await driver.pause(3000)
        await this.cardListMisi?.[1]?.waitForDisplayed()
        console.log(await this.titleMission?.[1]?.getText());
        console.log(await this.coinMission?.[1]?.getText());
        console.log(await this.dlMission?.[1]?.getText());
        await this.cardListMisi?.[1]?.click();
    }

    async getListMisi () {
        await driver.pause(3000)
        await this.cardListMisi?.[0]?.waitForDisplayed()
        // const missionCard = await this.cardListMisi
        //     if (missionCard.length > 0) {
        //         console.log('Mission List: ')
        //         const missionTittle = await this.titleMission
        //         missionTittle.forEach(element => {
        //             const missions = element.getText()
        //             missions.then(function(result) {
        //                 console.log(result)
        //             })
        //         })
        //     }
        //     else {
        //         console.log(await this.emptyStateList.getText());
        //     }
        // await Gestures.swipeUpCustom()
        // await Gestures.swipeUpCustom()
        // await Gestures.swipeUpCustom()
        // await Gestures.swipeUpCustom()
        // await driver.pause(3000)
        // await this.cardListMisi?.[0]?.waitForDisplayed()
        console.log(await this.titleMission?.[0]?.getText());
        console.log(await this.coinMission?.[0]?.getText());
        console.log(await this.dlMission?.[0]?.getText());
        // await Gestures.checkIfDisplayedWithSwipeUp(await this.cardListMisi, 10);
    }

    async nantiSaja () {
        await this.btnNantiSaja.click();
    }

    async backScreen () {
        await this.btnBack.click();
    }
}

export default new ListMisiScreen();
