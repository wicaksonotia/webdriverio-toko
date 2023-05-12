import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class VoucherBelanjaScreen extends AppScreen {
    constructor () {
        super('~voucherBelanjaComponent');
    }

    //define selectors using getter methods
    private get cointAmountDetail () { return $('~cointAmountDetail') }
    private get emptyStateVoucherKonsumen () { return $('~emptyStateVoucherKonsumen') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.cointAmountDetail.waitForDisplayed()
    }
}

export default new VoucherBelanjaScreen();