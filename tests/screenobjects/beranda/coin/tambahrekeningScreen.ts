import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class TambahRekeningScreen extends AppScreen {
    constructor () {
        super('~accountBankComponent');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get namaBank () { return $('//android.widget.ScrollView[@content-desc="accountBankComponent"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[2]') }
    private get searchBank () { return $('//android.view.ViewGroup[@content-desc="searchBankName"]/android.widget.EditText') }
    private get selectBank () { return $$('//android.view.ViewGroup[@content-desc="selectBank"]') }
    private get selectBankBSI () { return $('//android.view.ViewGroup[@content-desc="searchBankName"]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup') }
    private get idNumber () { return $('~idNumber') }
    private get checkNoRek () { return $('~checkNoRek') }
    private get birthOfDateCity () { return $('~birthOfDateCity') }
    private get selectCityDateOfBirth () { return $$('//android.view.ViewGroup[@content-desc="selectCityDateOfBirth"]') }
    private get dateOfBirth () { return $('//android.widget.ScrollView[@content-desc="accountBankComponent"]/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup') }
    private get selectDateOfBirth () { return $('//*[@resource-id="android:id/button1"]') }
    private get btnSimpan () { return $('~buttonSIMPANLabel') }

    //a method to encapsule automation code to interact with the page
    async page () {
        // await expect(this.namaBank).toBeDisplayed()
        await expect(this.idNumber).toBeDisplayed()
        await expect(this.birthOfDateCity).toBeDisplayed()
        // await expect(this.dateOfBirth).toBeDisplayed()
    }

    async tambahRekening ({norek, tl} : {norek:string; tl:string;}) {
        await this.dateOfBirth.click()
        await this.selectDateOfBirth.click()
        await this.namaBank.click();
        await driver.pause(1500)
        await this.selectBank?.[0]?.click();
        await this.idNumber.setValue(norek)
        await this.checkNoRek.click();
        await this.birthOfDateCity.setValue(tl)
        await this.selectCityDateOfBirth?.[0]?.click();
    }

    async tambahRekeningBSI ({bank1, bank2, bank3, bank4} : {bank1:string; bank2:string; bank3:string; bank4:string}) {
        await this.namaBank.click();
        await driver.pause(1500)
        await this.searchBank.click();
        await this.searchBank.setValue(bank1);
        await driver.pause(1500)
        await this.searchBank.clearValue();
        await driver.pause(1500)
        await this.searchBank.setValue(bank2);
        await driver.pause(1500)
        await this.searchBank.clearValue();
        await driver.pause(1500)
        await this.searchBank.setValue(bank3);
        await driver.pause(1500)
        await this.searchBank.clearValue();
        await driver.pause(1500)
        await this.searchBank.setValue(bank4);
        await driver.pause(3000)
        await this.selectBankBSI.click();
    }

    async submit () {
        await this.btnSimpan.click();
    }
}

export default new TambahRekeningScreen();
