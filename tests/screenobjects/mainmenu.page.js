import Page from './page';

//sub page containing specific selectors and methods for a specific page
class MainMenuPage extends Page {
    
    //define selectors using getter methods
    get beranda () { return $('~Beranda') }
    get bantuan () { return $('~Bantuan') }
    get notifikasi () { return $('~Notifikasi') }
    get berita () { return $('~Berita') }
    get akunSaya () { return $('~AkunSaya') }

    //a method to encapsule automation code to interact with the page
    async mainMenuApps () {
        await this.beranda.waitForDisplayed()
        await expect(this.beranda).toBeDisplayed()
        await expect(this.beranda).toBeExisting()
        await expect(this.beranda).toBeClickable()
        await expect(this.bantuan).toBeExisting()
        await expect(this.bantuan).toBeClickable()
        await expect(this.notifikasi).toBeExisting()
        await expect(this.notifikasi).toBeClickable()
        await expect(this.berita).toBeExisting()
        await expect(this.berita).toBeClickable()
        await expect(this.akunSaya).toBeExisting()
        await expect(this.akunSaya).toBeClickable()
    }

    async menuBeranda () {
        await this.beranda.click();
    }

    async menuBantuan () {
        await this.bantuan.click();
    }

    async menuNotifikasi () {
        await this.notifikasi.click();
    }

    async menuBerita () {
        await this.berita.click();
    }

    async menuAkunSaya () {
        await this.akunSaya.click();
    }
        
    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new MainMenuPage();