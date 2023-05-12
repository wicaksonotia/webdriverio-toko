import AppScreen from '../../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class DetailTokoScreen extends AppScreen {
    constructor () {
        super('~wsSaya');
    }

    //define selectors using getter methods
    private get tabDetailToko () { return $('~detailToko') }
    private get namaToko () { return $('~wsName') }
    private get alamatToko () { return $('~wsAddress') }
    
    private get tabPoinSaya () { return $('~poinSaya') }
    private get jumlahPoin () { return $('~currentPoin') }
    private get expiredDatePoin () { return $('~expiredDatePoin') }
    private get btnUnmatch () { return $('~btnUnmatch') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.tabDetailToko.waitForDisplayed()
        await this.namaToko.waitForDisplayed()
        await this.alamatToko.waitForDisplayed()
        await this.tabPoinSaya.waitForDisplayed()
        await this.btnUnmatch.waitForDisplayed()
    }
}

export default new DetailTokoScreen();