import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';
const path = require('path');
//sub screen containing specific selectors and methods for a specific screen
class FormMisiScreen extends AppScreen {
    constructor () {
        super('~taskListComponent');
    }

    //define selectors using getter methods
    private get btnBack () { return $('~btnBack') }
    private get navbarTitle () { return $('~navbarTitle') }

    private get viewPanduan () { return $('//android.widget.ScrollView[@content-desc="taskListComponent"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView') }
    private get popUpPanduan () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup') }
    private get closePanduan () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView') }
    private get planogramImageTemplate () { return $('~planogramImageTemplate') }
    private get planogramImageTemplate1 () { return $('(//android.view.ViewGroup[@content-desc="planogramImageTemplate"])[1]') }
    private get planogramImageTemplate2 () { return $('(//android.view.ViewGroup[@content-desc="planogramImageTemplate"])[2]') }
    
    private get missionName () { return $('~titleMission') }
    private get expiredDate () { return $('~deadLine') }
    private get taskStatus () { return $('~taskStatus') }
    private get btnSimpanDraft () { return $('~saveDraft') }
    private get btnLanjut () { return $('~lanjutkan') }
    private get btnKirim () { return $('~kirim') }

    private get rbTBR () { return $$('//android.view.ViewGroup[@content-desc="radioButton-0"]') }
    private get rb2xp () { return $('//android.view.ViewGroup[@content-desc="radioButton-1"]/android.view.ViewGroup[2]') }
    private get questionText () { return $('~text') }
    private get questionTextarea () { return $('~textarea') }
    private get questionPilgan () { return $('(//android.view.ViewGroup[@content-desc="radioButton-1"])[2]') }
    private get questionChecklist () { return $('(//android.view.ViewGroup[@content-desc="checkboxSubmission-1-0"])[2]') }
    private get question3 () { return $('~radioButton-2') }
    private get questionSC () { return $('~radioButtonInput0') }
    private get question41 () { return $('(//android.view.ViewGroup[@content-desc="radioButton-3"])[1]') }
    private get question42 () { return $('(//android.view.ViewGroup[@content-desc="radioButton-3"])[2]') }
    private get question51 () { return $('(//android.view.ViewGroup[@content-desc="radioButton-4"])[1]') }
    private get question52 () { return $('(//android.view.ViewGroup[@content-desc="radioButton-4"])[2]') }
    private get question61 () { return $('(//android.view.ViewGroup[@content-desc="radioButton-5"])[1]') }
    private get question62 () { return $('(//android.view.ViewGroup[@content-desc="radioButton-5"])[2]') }
    private get question7 () { return $('(//android.view.ViewGroup[@content-desc="checkboxSubmission-6-0"])[2]/android.widget.TextView[1]') }
    private get questionInputUPC1 () { return $('~textInputUpc-0-0') }
    private get questionInputUPC2 () { return $('~textInputUpc-0-1') }
    private get scanQR () { return $('~scanQr') }
    private get txtTambahKodeLain () { return $('~addAnotherCode') }
    private get questionInputUPC3 () { return $('~textInputUpc-1-0') }
    private get questionImagePicker () { return $('~imagePicker') }
    private get questionImagePickerProduct () { return $('~imagePickerProduct') }
    private get qstImagePicker () { return $$('//android.view.ViewGroup[@content-desc="imagePicker"]') }
    private get takeImage () { return $('//android.view.ViewGroup[@content-desc="guidedCamera"]/android.view.ViewGroup[6]') }
    private get useImage () { return $('//android.view.ViewGroup[@content-desc="renderedPicture"]/android.view.ViewGroup[2]/android.widget.TextView') } //GalaxyA70
    private get questionNumeric () { return $('~numeric') }
    private get calendar () { return $('~datePickerContainer') }
    private get btnOkCalendar () { return $('//*[@resource-id="android:id/button1"]') } // No. 10 select calendar
    private get btnCloseUPC () { return $('//*[@resource-id="android:id/button2"]') } // No. 10 select calendar

    // private get questionradioButtonXpath () { return $$('//android.view.ViewGroup[@content-desc="radioButtonInput0"]') } //No. 4
    // private get question4 () { return $('(//android.view.ViewGroup[@content-desc="radioButtonInput0"])[1]') } //No. 4
    // private get question41 () { return $('(//android.view.ViewGroup[@content-desc="radioButtonInput1"])[1]') } //No. 4
    // private get question42 () { return $$('~numeric') } //No. 4
    // private get questionradioButton () { return $('~radioButtonInput0') } //
    // private get question5 () { return $('(//android.view.ViewGroup[@content-desc="radioButtonInput0"])[2]') } //No. 5
    // private get question51 () { return $('(//android.view.ViewGroup[@content-desc="radioButtonInput1"])[2]') } //No. 5
    // private get question52 () { return $$('~text') } //No. 5
    // private get question6 () { return $('(//android.view.ViewGroup[@content-desc="radioButtonInput0"])[3]') } //No. 6
    // private get question61 () { return $('(//android.view.ViewGroup[@content-desc="radioButtonInput1"])[3]') } //No. 6 Lainnya
    // private get question62 () { return $$('~textarea') } //No. 6 Lainnya
    // private get questionCheckbox () { return $('~checkboxSubmission-6-0') } //No. 7
    // private get question7 () { return $('(//android.view.ViewGroup[@content-desc="checkboxSubmission-6-0"])[2]/android.widget.TextView[1]') }
    // private get questionCheckboxXpath () { return $$('//android.view.ViewGroup[@content-desc="checkboxSubmission-6-0"]') } //No. 7
    // private get questionImagePicker () { return $('~imagePicker') } //No. 8
    // private get btnOkCapturedImage () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.RelativeLayout[1]/android.widget.ImageView[2]') }//No. 8
    // private get btnOkCapturedImage () { return $('~OK') } //GalaxyA70
    // private get questionNumeric () { return $('~numeric') } // No. 9
    // private get calendar () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup') } // No. 10
    // private get calendarXpath () { return $('//android.widget.ScrollView[@content-desc="taskListComponent"]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup') } //Oppo Hms
    // private get calendarXpath () { return $('//android.widget.ScrollView[@content-desc="taskListComponent"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup') } //GalaxyA70
    // private get calendarTbr () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup') } //Calendar Tsb mission 1
    // private get monthCalendar () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[1]/android.widget.EditText') } // No. 10 select calendar month
    // private get dateCalendar () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[2]/android.widget.EditText') } // No. 10 select calendar date
    // private get yearCalendar () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[3]/android.widget.EditText') } // No. 10 select calendar year
    // private get btnOkCalendar () { return $('//*[@resource-id="android:id/button1"]') } // No. 10 select calendar

    //a method to encapsule automation code to interact with the page
    async getDetailsmission () {
        await expect(this.missionName).toBeDisplayed()
        // await expect(this.earnCoin).toBeDisplayed()
        await expect(this.expiredDate).toBeDisplayed()
        console.log('Mission Name: '+await this.missionName.getText())
        // console.log('Earn Coin Misi: '+await this.earnCoin.getText())
        console.log('Deadline Misi: '+await this.expiredDate.getText())
    }

    async getDetailsUPCMission () {
        await expect(this.missionName).toBeDisplayed()
        // await expect(this.earnCoin).toBeDisplayed()
        await expect(this.expiredDate).toBeDisplayed()
        await expect(this.taskStatus).toBeDisplayed()
        console.log('Mission Name: '+await this.missionName.getText())
        // console.log('Earn Coin Misi: '+await this.earnCoin.getText())
        console.log('Deadline Misi: '+await this.expiredDate.getText())
        console.log('Status: '+await this.taskStatus.getText())
    }

    async expectDetailsmission ({nameMission,earnCoinSubmission,expiredDateSubmission}: {nameMission:string; earnCoinSubmission:string; expiredDateSubmission:string;}) {
        await expect(this.missionName).toHaveText(nameMission)
        // await expect(this.earnCoin).toHaveText(earnCoinSubmission)
        await expect(this.expiredDate).toHaveText(expiredDateSubmission)
    }

    async detailPlanogram () {
        await expect(this.popUpPanduan).toBeDisplayed()
        await expect(this.closePanduan).toBeDisplayed()
        await this.closePanduan.click()
        await expect(this.planogramImageTemplate1).toBeDisplayed()
        await expect(this.planogramImageTemplate2).toBeDisplayed()
        await Gestures.swipeUpCustom()
        await expect(this.viewPanduan).toBeDisplayed()
    }

    //task-based response
    async formMissionTSM1({ans1,ans2,ans9}: {ans1:string; ans2:string; ans9:string;}) { //Mission - Hanifah
        await this.questionText.setValue(ans1)
        await this.btnLanjut.click()
        await this.questionTextarea.setValue(ans2)
        await Gestures.swipeUpCustom()
        await this.btnLanjut.click()
        await this.question3.click()
        await this.btnLanjut.click()
        await this.question41.click()
        await this.btnLanjut.click()
        await this.question51.click()
        await this.btnLanjut.click()
        await this.question61.click()
        await this.btnLanjut.click()
        await this.question7.click()
        await this.btnLanjut.click()
        await this.questionImagePicker.click()
        await driver.pause(5000)
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
        await this.btnLanjut.click()
        await this.questionNumeric.setValue(ans9)
        await this.btnLanjut.click()
        await this.calendar.click()
        await this.btnOkCalendar.waitForDisplayed()
        await this.btnOkCalendar.click()
    }

    async formMissionTSM2 ({ans1,ans2,ans4,ans5,ans6,ans9}: {ans1:string; ans2:string; ans4:string; ans5:string; ans6:string; ans9:string;}) { //Mission 02 - Hanifah
        await this.questionText.setValue(ans1)
        await this.btnLanjut.click()
        await this.questionTextarea.setValue(ans2)
        await Gestures.swipeUpCustom()
        await this.btnLanjut.click()
        await this.question3.click()
        await this.btnLanjut.click()
        await this.question42.click()
        await this.questionNumeric.setValue(ans4)
        await this.btnLanjut.click()
        await this.question52.click()
        await this.questionText.setValue(ans5)
        await this.btnLanjut.click()
        await this.question62.click()
        await this.questionTextarea.setValue(ans6)
        await this.btnLanjut.click()
        await this.question7.click()
        await this.btnLanjut.click()
        await this.questionImagePicker.click()
        await driver.pause(5000)
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
        await this.btnLanjut.click()
        await this.questionNumeric.setValue(ans9)
        await this.btnLanjut.click()
        await this.calendar.click()
        await this.btnOkCalendar.waitForDisplayed()
        await this.btnOkCalendar.click()
    }

    async formPlanogramMission () {
        await this.qstImagePicker?.[0]?.waitForDisplayed()
        await this.qstImagePicker?.[0]?.click()
        // await driver.pause(5000)
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
        await Gestures.swipeUpCustom()
        await this.qstImagePicker?.[0]?.waitForDisplayed()
        await this.qstImagePicker?.[0]?.click()
        // await driver.pause(5000)
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
        await Gestures.swipeUpCustom()
        await this.questionImagePicker.waitForDisplayed()
        await this.questionImagePicker.click()
        // await driver.pause(5000)
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
        await Gestures.swipeUpCustom()
        await this.btnKirim.waitForDisplayed()
    }

    //scenario 91
    async formMissionXP ({ans1}:{ans1:string}) {
        await this.questionText.setValue(ans1)
        await this.btnLanjut.click()
        await this.rb2xp.click()
    }

    async formUPCMission ({upc1,upc2}:{upc1:string; upc2:string}) {
        await this.questionInputUPC1.waitForDisplayed()
        await this.scanQR.waitForDisplayed()
        await this.scanQR.click()
        await driver.pause(8000)
        await this.txtTambahKodeLain.click()
        await this.questionInputUPC2.setValue(upc1)
        await this.questionInputUPC3.setValue(upc2)
    }

    async formTBRJawabannSingkat ({ans}:{ans:string}) {
        await this.rbTBR?.[0]?.click()
        await this.btnLanjut.click()
        await this.questionText.setValue(ans)
    }

    async formTBRJawabannParagraf ({ans}:{ans:string}) {
        await this.rbTBR?.[1]?.click()
        await this.btnLanjut.click()
        await this.questionTextarea.setValue(ans)
    }

    async formTBRJawabannPilganAngka ({ans}:{ans:string}) {
        await this.rbTBR?.[2]?.click()
        await this.btnLanjut.click()
        await this.questionPilgan.click()
        await this.questionNumeric.setValue(ans)
    }

    async formTBRJawabannPilganSingkat ({ans}:{ans:string}) {
        await this.rbTBR?.[3]?.click()
        await this.btnLanjut.click()
        await this.questionPilgan.click()
        await this.questionText.setValue(ans)
    }

    async formTBRJawabannPilganParagraf ({ans}:{ans:string}) {
        await this.rbTBR?.[4]?.click()
        await this.btnLanjut.click()
        await this.questionPilgan.click()
        await this.questionTextarea.setValue(ans)
    }

    async formTBRJawabannKotakCentang () {
        await this.rbTBR?.[5]?.click()
        await this.btnLanjut.click()
        await this.questionChecklist.click()
    }

    async formTBRJawabannUnggahGambar () {
        await this.rbTBR?.[6]?.click()
        await this.btnLanjut.click()
        await this.questionImagePicker.waitForDisplayed()
        await this.questionImagePicker.click()
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
    }

    async formTBRJawabannAngka ({ans}:{ans:string}) {
        await this.rbTBR?.[7]?.click()
        await this.btnLanjut.click()
        await this.questionNumeric.setValue(ans)
    }

    async formTBRJawabannTanggal () {
        await this.rbTBR?.[8]?.click()
        await this.btnLanjut.click()
        await this.calendar.click()
        await this.btnOkCalendar.waitForDisplayed()
        await this.btnOkCalendar.click()
    }

    async formTBRJawabannSC () {
        await this.rbTBR?.[9]?.click()
        await this.btnLanjut.click()
        await this.questionSC.click()
    }

    async formTBRJawabannSCIR () {
        await Gestures.swipeUpCustom()
        await this.rbTBR?.[10]?.click()
        await this.btnLanjut.click()
        await this.questionImagePickerProduct.waitForDisplayed()
        await this.questionImagePickerProduct.click()
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
    }

    async formTBRJawabannPlanogram () {
        await Gestures.swipeUpCustom()
        await this.rbTBR?.[11]?.click()
        await this.btnLanjut.click()
        await this.planogramImageTemplate.waitForDisplayed()
        await this.questionImagePicker.waitForDisplayed()
        await this.questionImagePicker.click()
        await this.takeImage.click()
        await driver.pause(5000)
        await this.useImage.click()
        await driver.pause(3000)
    }

    async formTBRJawabannUPC ({upc2}:{upc2:string}) {
        await Gestures.swipeUpCustom()
        await this.rbTBR?.[12]?.click()
        await this.btnLanjut.click()
        await this.questionInputUPC3.setValue(upc2)
    }
    
    async lanjutkan () {
        await this.btnLanjut.click()
    }

    async close () {
        await this.btnCloseUPC.click()
    }

    async saveAsDraft () {
        await this.btnSimpanDraft.click()
    }

    async submitMisi () {
        await this.btnKirim.click()
    }

    async submitMisiUPC () {
        await this.btnKirim.click()
        await this.btnOkCalendar.waitForDisplayed()
        await this.btnOkCalendar.click()
    }
}

export default new FormMisiScreen();
