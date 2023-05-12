export default class TabBar {
    static async openBeranda() {
        await $('~Beranda').click();
    }

    static async openBantuan() {
        await $('~Bantuan').click();
    }

    static async openNotifikasi() {
        await $('~Notifikasi').click();
    }

    static async openBerita() {
        await $('~Berita').click();
    }

    static async openAkunSaya() {
        await $('~AkunSaya').click();
    }

    static async waitForTabBarShown(): Promise<boolean | void> {
        // return $('~Beranda').waitForDisplayed({
        //     timeout: 120000,
        // });
    }
}
