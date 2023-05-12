import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class DetailNotifikasiScreen extends AppScreen {
    constructor () {
        super('~taskListComponent');
    }
    
    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') } //Nama Misi
    private get titleMisi () { return $('~titleMission') }
    private get descMisi () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]') }
    private get statusMisi () { return $('~taskStatus') }
    private get earnCoinMisi () { return $('~coin') }
    private get expDateMisi () { return $('~deadLine') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.titleMisi.waitForDisplayed()
        await expect(this.titleMisi).toBeDisplayed()
    }

    async detailsNotif ({titleNotif,statusMisi,earnCoinMisi,expDateMisi}: {titleNotif:string; statusMisi:string; earnCoinMisi:string; expDateMisi:string;}) {
        await expect(this.titleMisi).toHaveText(titleNotif)
        // await expect(this.descMisi).toHaveText(descMisi)
        await expect(this.statusMisi).toHaveText(statusMisi)
        await expect(this.earnCoinMisi).toHaveText(earnCoinMisi)
        await expect(this.expDateMisi).toHaveText(expDateMisi)
    }

    async back () {
        await (await this.btnBack).click()
    }
}

export default new DetailNotifikasiScreen();