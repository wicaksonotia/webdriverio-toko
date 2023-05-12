const video = require('wdio-video-reporter');
// const allure = require('allure-commandline');
// const { generate } = require('multiple-cucumber-html-reporter');
// const { removeSync } = require('fs-extra');
// import { After, Status } from '@cucumber/cucumber';

export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or on a remote machine).
    runner: 'local',
    //
    // ============
    // Capabilities
    // ============
    // The capabilities are specified in:
    // - wdio.android.app.conf.ts
    capabilities: [
        // {
        // 'cjson:metadata': {
        //     app: {
        //         name: 'ayotoko-QA-4-11-2021-V.2.23.apk',
        //         version: '2.23',
        //     },
        //     device: 'Lenovo ThinkPad',
        //     platform: {
        //         name: 'Windows 10 Pro',
        //         version: '21H1',
        //     }
        // }}
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'error',
    //     '@wdio/appium-service': 'error'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'https://hms.qa.src.id/',
    // Default timeout for all waitFor* commands.
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
    waitforTimeout: 60000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    //
    // Services are empty here but will be defined in the
    // - wdio.shared.browserstack.conf.ts
    // - wdio.shared.local.appium.conf.ts
    // - wdio.shared.sauce.conf.ts
    // configuration files
    // services: [
    //     [
    //         "appium",
    //         {
    //             args: {
    //                 address: 'localhost',
    //                 port: 4444
    //             },
    //             logPath: './',
    //             command: 'appium'
    //         }
    //     ]
    // ],
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [
        ["spec", {
            symbols: {
                passed: '[PASS]',
                failed: '[FAIL]',
            },
            addConsoleLogs: true,
        }],
        // ['cucumberjs-json', {
        //     jsonFolder: './reports/cucumberjs-json/json',
        //     language: 'en',
        // }],
        // [video, {
        //     outputDir: './reports/video',
        //     saveAllVideos: true,        // If true, also saves videos for successful test cases
        //     videoSlowdownMultiplier: 5, // Higher to get slower videos, lower for faster videos [Value 1-100]
        //     videoRenderTimeout: 300,
        // }],
        // ['allure', {
        //     outputDir: './allure-results',
        //     disableWebdriverStepsReporting: false,
        //     disableWebdriverScreenshotsReporting: false,
        //     useCucumberStepReporter: false,
        //     addConsoleLogs: true,
        // }],
    ],
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        // './tests/features/**/*.feature'
        // './tests/features/login.feature'

        // './tests/features/auth/1login.feature'                                                   //Toko AYAM
        // './tests/features/beranda/coin/94pojokbayar-datatidakditemukan.feature'                     
        // './tests/features/beranda/coin/95pojokbayar-dataditemukantapitidakmatch.feature'
        // './tests/features/beranda/coin/20coindisbursement-selectpayment-pojokbayar.feature'
        // './tests/features/beranda/coin/21coindisbursement-selectpayment-rekening.feature'
        // './tests/features/beranda/coin/22coindisbursement-submission-pojokbayar.feature'         //SecurityCodeScreen: PasscodeInput, passcodeInputTitle
        // './tests/features/beranda/coin/23coindisbursement-submission-rekening.feature'           //SecurityCodeScreen: PasscodeInput, passcodeInputTitle
        // './tests/features/beranda/coin/96transferbank-detailinformasi.feature'
        // './tests/features/beranda/coin/97transferbank-ttl.feature'
        // './tests/features/beranda/coin/98transferbank-bsi.feature'
        // './tests/features/beranda/coin/112undian.feature'

        // './tests/features/auth/1login2.feature'                                                  //Toko Hanifah
        // './tests/features/beranda/coin/2clickcoinonhomepage.feature'
        // './tests/features/beranda/poin/3clickpoinonhomepage.feature'
        // './tests/features/beranda/poin/4clickpoinonhomepagenomitra.feature' //Unmatch agen dulu
        // './tests/features/beranda/misi/5gotomissionlist.feature'
        // './tests/features/beranda/misi/6redbubbleonhomepage-newmission.feature'                  //Add new Misi: 7 Submit Mission    
        // './tests/features/beranda/misi/7redbubbleonhomepage-submitmission.feature'               //Add new Misi: 7 Submit Mission
        // './tests/features/beranda/misi/8newmission.feature'                                      //Add new Misi: 9 Submit Mission
        // './tests/features/beranda/misi/9submitmission.feature'                                   //Add new Misi: 9 Submit Mission
        // './tests/features/beranda/misi/92submitplanogrammission.feature'                         //Add new Misi: 92 Submit Misi Planogram
        // './tests/features/beranda/misi/10missionlist-tabdikerjakan.feature'
        // './tests/features/beranda/misi/11missiondetail-tabdikerjakan.feature'
        // './tests/features/beranda/misi/12missionlist-tabkadaluarsa.feature'
        // './tests/features/beranda/misi/13mission-listdetail-tabkadaluarsa.feature'
        // './tests/features/beranda/misi/17planogrammission.feature'                               //Add new Misi: 17 Misi Planogram
        // './tests/features/beranda/misi/93submitupcmission.feature'                               //Add new Misi: 93 Submit UPC Mission
        // './tests/features/beranda/misi/99tbr-kejawabansingkat.feature'                           //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/100tbr-keparagraf.feature'                                //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/101tbr-kepilganangka.feature'                             //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/102tbr-kepilgansingkat.feature'                           //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/103tbr-kepilganparagraf.feature'                          //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/104tbr-kekotakcentang.feature'                            //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/105tbr-keunggahgambar.feature'                            //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/106tbr-keangka.feature'                                   //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/107tbr-ketanggal.feature'                                 //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/108tbr-kesc.feature'                                      //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/109tbr-kescir.feature'                                    //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/110tbr-keplanogram.feature'                               //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/111tbr-keupc.feature'                                     //Add new Misi: 99-111 Submit Misi TBR
        // './tests/features/beranda/misi/91ayoxp.feature'
        // './tests/features/notifikasi/26gsm-getgsmnotification-frompushnotification.feature'      //Trigger dari Hero
        // './tests/features/notifikasi/25gsm-getgsmnotification-frommenunotification.feature'      //Trigger dari Hero
        // './tests/features/notifikasi/113getspinthewheelpushnotification.feature'

        // './tests/features/auth/1login-nonhms.feature'                                
        // './tests/features/beranda/coin/14clickcoinonhomepage-nonregisteredhms.feature'
        // './tests/features/beranda/misi/15clickmissionmenu-nonregisteredhms.feature'

        //scenario Pak Widya
        // './tests/features/beranda/belanja/31pairingwithmitra.feature' //Unmatch agen dulu
        './tests/features/beranda/belanja/35.feature' //promo nominal
        // './tests/features/beranda/belanja/36.feature' //adjust quantity di mitra dulu
        // './tests/features/beranda/belanja/38.feature'
        // './tests/features/beranda/belanja/39.feature' //proses order di mitra, constructor ~TransactionDetail
        // './tests/features/beranda/belanja/40.feature' //proses order di mitra

        //49 scenario order
        //promo percent
        // './tests/features/beranda/belanja/41.feature'
        // './tests/features/beranda/belanja/44.feature'
        // './tests/features/beranda/belanja/59.feature' //proses order pesanan sebelumnya di mitra dan toko sampai selesai
        // './tests/features/beranda/belanja/47.feature'
        // './tests/features/beranda/belanja/71.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/72.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/73.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/74.feature' //adjust price di mitra
        // './tests/features/beranda/belanja/75.feature' //adjust price di mitra
        // './tests/features/beranda/belanja/76.feature' //adjust price di mitra
        // './tests/features/beranda/belanja/84.feature'
        // './tests/features/beranda/belanja/85.feature'
        // './tests/features/beranda/belanja/86.feature'
        // './tests/features/beranda/belanja/87.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/88.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/89.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/81.feature' //create 1 voucher aja, adjust quantity di mitra
        // './tests/features/beranda/belanja/78.feature' //create 1 voucher aja, batalkan pesanan di mitra
        // --Get Poin--
        // './tests/features/beranda/belanja/50.feature'
        // './tests/features/beranda/belanja/53.feature'

        //promo nominal
        // './tests/features/beranda/belanja/42.feature'
        // './tests/features/beranda/belanja/45.feature'
        // './tests/features/beranda/belanja/60.feature' //proses order pesanan sebelumnya di mitra dan toko sampai selesai
        // './tests/features/beranda/belanja/48.feature'
        // './tests/features/beranda/belanja/82.feature' //create 1 voucher aja, adjust quantity di mitra
        // './tests/features/beranda/belanja/79.feature' //create 1 voucher aja, batalkan pesanan di mitra
        // --Get Poin--
        // './tests/features/beranda/belanja/51.feature'
        // './tests/features/beranda/belanja/54.feature'

        //promo shipping
        // './tests/features/beranda/belanja/43.feature'
        // './tests/features/beranda/belanja/46.feature'
        // './tests/features/beranda/belanja/61.feature' //proses order pesanan sebelumnya di mitra dan toko sampai selesai
        // './tests/features/beranda/belanja/49.feature'
        // './tests/features/beranda/belanja/80.feature' //create 1 voucher aja, batalkan pesanan di mitra
        // './tests/features/beranda/belanja/83.feature' //create 1 voucher aja, adjust quantity di mitra
        // --Get Poin--
        // './tests/features/beranda/belanja/52.feature'
        // './tests/features/beranda/belanja/55.feature'

        // './tests/features/beranda/belanja/27gsm-performb2btransaction-pengirimandiambil.feature' //order B2B GSM di AYO Hero dulu
        // './tests/features/beranda/belanja/57.feature' //proses order pesanan sebelumnya di mitra dan toko sampai selesai
        // './tests/features/beranda/belanja/28gsm-performb2btransaction-pengirimandikirim-besok.feature' //order B2B GSM di AYO Hero dulu
        // './tests/features/beranda/belanja/58.feature' //proses order pesanan sebelumnya di mitra dan toko sampai selesai
        // './tests/features/beranda/belanja/29gsm-performb2btransaction-pengirimandikirim-hariini.feature' //order B2B GSM di AYO Hero dulu
        // './tests/features/beranda/belanja/56.feature' //proses order pesanan sebelumnya di mitra dan toko sampai selesai

        // './tests/features/beranda/belanja/62.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/63.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/64.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/65.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/66.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/67.feature' //adjust quantity di mitra
        // './tests/features/beranda/belanja/68.feature' //batalkan pesanan di mitra
        // './tests/features/beranda/belanja/69.feature' //batalkan pesanan di mitra
        // './tests/features/beranda/belanja/70.feature' //batalkan pesanan di mitra
        // './tests/features/beranda/belanja/77.feature' //set Advokasi Terima Kasih untuk produk Eskulin Splash Clg Blossom Ice 125ml di mitra
        // './tests/features/beranda/belanja/90ayosuperputer-spinthewheel.feature' //proses order di mitra dan toko sampai selesai
    ],
    // Patterns to exclude.
    exclude: [
        // 'test/spec/multibrowser/**',
        // './tests/features/auth/1login.feature'
    ],
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: [
            // './tests/specs/auth/1login.spec.ts'
            // './tests/specs/beranda/coin/94pojokbayar-datatidakditemukan.spec.ts'
            // './tests/specs/beranda/coin/95pojokbayar-dataditemukantapitidakmatch.spec.ts'
            // './tests/specs/beranda/coin/20coindisbursement-selectpayment-pojokbayar.spec.ts'
            // './tests/specs/beranda/coin/21coindisbursement-selectpayment-rekening.spec.ts'
            // './tests/specs/beranda/coin/22coindisbursement-submission-pojokbayar.spec.ts'
            // './tests/specs/beranda/coin/23coindisbursement-submission-rekening.spec.ts'
            // './tests/specs/beranda/coin/96transferbank-detailinformasi.spec.ts'
            // './tests/specs/beranda/coin/97transferbank-ttl.spec.ts'
            // './tests/specs/beranda/coin/98transferbank-bsi.spec.ts'
            // './tests/specs/beranda/coin/112undian.spec.ts'

            // './tests/specs/auth/1login2.spec.ts'
            // './tests/specs/beranda/coin/2clickcoinonhomepage.spec.ts'
            // './tests/specs/beranda/poin/3clickpoinonhomepage.spec.ts'
            // './tests/specs/beranda/poin/4clickpoinonhomepagenomitra.spec.ts'
            // './tests/specs/beranda/misi/5gotomissionlist.spec.ts'
            // './tests/specs/beranda/misi/6redbubbleonhomepage-newmission.spec.ts'
            // './tests/specs/beranda/misi/7redbubbleonhomepage-submitmission.spec.ts'
            // './tests/specs/beranda/misi/8newmission.spec.ts'
            // './tests/specs/beranda/misi/9submitmission.spec.ts'
            // './tests/specs/beranda/misi/92submitplanogrammission.spec.ts'
            // './tests/specs/beranda/misi/10missionlist-tabdikerjakan.spec.ts'
            // './tests/specs/beranda/misi/11missiondetail-tabdikerjakan.spec.ts'
            // './tests/specs/beranda/misi/12missionlist-tabkadaluarsa.spec.ts'
            // './tests/specs/beranda/misi/13mission-listdetail-tabkadaluarsa.spec.ts'
            // './tests/specs/beranda/misi/17planogrammission.spec.ts'
            // './tests/specs/beranda/misi/93submitupcmission.spec.ts'
            // './tests/specs/beranda/misi/99tbr-kejawabansingkat.spec.ts'
            // './tests/specs/beranda/misi/100tbr-keparagraf.spec.ts'
            // './tests/specs/beranda/misi/101tbr-kepilganangka.spec.ts'
            // './tests/specs/beranda/misi/102tbr-kepilgansingkat.spec.ts'
            // './tests/specs/beranda/misi/103tbr-kepilganparagraf.spec.ts'
            // './tests/specs/beranda/misi/104tbr-kekotakcentang.spec.ts'
            // './tests/specs/beranda/misi/105tbr-keunggahgambar.spec.ts'
            // './tests/specs/beranda/misi/106tbr-keangka.spec.ts'
            // './tests/specs/beranda/misi/107tbr-ketanggal.spec.ts'
            // './tests/specs/beranda/misi/108tbr-kesc.spec.ts'
            // './tests/specs/beranda/misi/109tbr-kescir.spec.ts'
            // './tests/specs/beranda/misi/110tbr-keplanogram.spec.ts'
            // './tests/specs/beranda/misi/111tbr-keupc.spec.ts'
            // './tests/specs/beranda/misi/91ayoxp.spec.ts'
            // './tests/specs/notifikasi/26gsm-getgsmnotification-frompushnotification.spec.ts'
            // './tests/specs/notifikasi/25gsm-getgsmnotification-frommenunotification.spec.ts'
            // './tests/specs/notifikasi/113getspinthewheelpushnotification.spec.ts'

            // './tests/specs/auth/1login-nonhms.spec.ts'
            // './tests/specs/beranda/coin/14clickcoinonhomepage-nonregisteredhms.spec.ts'
            // './tests/specs/beranda/misi/15clickmissionmenu-nonregisteredhms.spec.ts'

            //scenario Pak Widya
            // './tests/specs/beranda/belanja/31pairingwithmitra.spec.ts'
            './tests/specs/beranda/belanja/35.spec.ts'
            // './tests/specs/beranda/belanja/36.spec.ts'
            // './tests/specs/beranda/belanja/38.spec.ts'
            // './tests/specs/beranda/belanja/39.spec.ts'
            // './tests/specs/beranda/belanja/40.spec.ts'

            //49 scenario order
            //promo percent
            // './tests/specs/beranda/belanja/41.spec.ts'
            // './tests/specs/beranda/belanja/44.spec.ts'
            // './tests/specs/beranda/belanja/59.spec.ts'
            // './tests/specs/beranda/belanja/47.spec.ts'
            // './tests/specs/beranda/belanja/71.spec.ts'
            // './tests/specs/beranda/belanja/72.spec.ts'
            // './tests/specs/beranda/belanja/73.spec.ts'
            // './tests/specs/beranda/belanja/74.spec.ts'
            // './tests/specs/beranda/belanja/75.spec.ts'
            // './tests/specs/beranda/belanja/76.spec.ts'
            // './tests/specs/beranda/belanja/84.spec.ts'
            // './tests/specs/beranda/belanja/85.spec.ts'
            // './tests/specs/beranda/belanja/86.spec.ts'
            // './tests/specs/beranda/belanja/87.spec.ts'
            // './tests/specs/beranda/belanja/88.spec.ts'
            // './tests/specs/beranda/belanja/89.spec.ts'
            // './tests/specs/beranda/belanja/81.spec.ts'
            // './tests/specs/beranda/belanja/78.spec.ts'
            // --Get Poin--
            // './tests/specs/beranda/belanja/50.spec.ts'
            // './tests/specs/beranda/belanja/53.spec.ts'

            //promo nominal
            // './tests/specs/beranda/belanja/42.spec.ts'
            // './tests/specs/beranda/belanja/45.spec.ts'
            // './tests/specs/beranda/belanja/60.spec.ts'
            // './tests/specs/beranda/belanja/48.spec.ts'
            // './tests/specs/beranda/belanja/82.spec.ts'
            // './tests/specs/beranda/belanja/79.spec.ts'
            // --Get Poin--
            // './tests/specs/beranda/belanja/51.spec.ts'
            // './tests/specs/beranda/belanja/54.spec.ts'

            //promo shipping
            // './tests/specs/beranda/belanja/43.spec.ts'
            // './tests/specs/beranda/belanja/46.spec.ts'
            // './tests/specs/beranda/belanja/61.spec.ts'
            // './tests/specs/beranda/belanja/49.spec.ts'
            // './tests/specs/beranda/belanja/80.spec.ts'
            // './tests/specs/beranda/belanja/83.spec.ts'
            // --Get Poin--
            // './tests/specs/beranda/belanja/52.spec.ts'
            // './tests/specs/beranda/belanja/55.spec.ts'

            // './tests/specs/beranda/belanja/27gsm-performb2btransaction-pengirimandiambil.spec.ts'
            // './tests/specs/beranda/belanja/57.spec.ts'
            // './tests/specs/beranda/belanja/28gsm-performb2btransaction-pengirimandikirim-besok.spec.ts'
            // './tests/specs/beranda/belanja/58.spec.ts'
            // './tests/specs/beranda/belanja/29gsm-performb2btransaction-pengirimandikirim-hariini.spec.ts'
            // './tests/specs/beranda/belanja/56.spec.ts'

            // './tests/specs/beranda/belanja/62.spec.ts'
            // './tests/specs/beranda/belanja/63.spec.ts'
            // './tests/specs/beranda/belanja/64.spec.ts'
            // './tests/specs/beranda/belanja/65.spec.ts'
            // './tests/specs/beranda/belanja/66.spec.ts'
            // './tests/specs/beranda/belanja/67.spec.ts'
            // './tests/specs/beranda/belanja/68.spec.ts'
            // './tests/specs/beranda/belanja/69.spec.ts'
            // './tests/specs/beranda/belanja/70.spec.ts'
            // './tests/specs/beranda/belanja/77.spec.ts'
            // './tests/specs/beranda/belanja/90ayosuperputer-spinthewheel.spec.ts'
        ],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: ['@wdio/types'],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 180000,
        // timeout: 3 * 60 * 1000, // 3min
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false,
        /*failAmbiguousDefinitions: false,
        name: [],
        profile: [],
        snippetSyntax: undefined,
        tagsInTitle: false,
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        scenarioLevelReporter: false // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.*/
        retry: 0
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    // onPrepare: () => {
    //     // Remove the `.tmp/` folder that holds the json and report files
    //     removeSync('./reports/cucumberjs-json/');
    //   },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world world object containing information on pickle and test step
     */
    // beforeScenario: function (world) {
    // },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     */
    // beforeStep: function (step, scenario) {
    // },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {Object}             result   results object containing scenario results
     * @param {boolean}            result.passed   true if scenario has passed
     * @param {string}             result.error    error stack if scenario failed
     * @param {number}             result.duration duration of scenario in milliseconds
     */
    // afterStep: function (step, scenario, result) {
    // },
    // afterStep: function (test, scenario, { error, duration, passed }) {
    //     if (error) {
    //       browser.takeScreenshot();
    //       var date = Date.now();
    //       browser.saveScreenshot('./reports/screenshots/afterstep - '+date+'.png');
    //       // browser.saveScreenshot('./reports/screenshots/'+scenario+'-'+step+'-'+result+'-'+date+'.png');
    //       cucumberJson.attach(browser.takeScreenshot(), 'image/png');
    //     }
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world  world object containing information on pickle and test step
     * @param {Object}                 result results object containing scenario results
     * @param {boolean}                result.passed   true if scenario has passed
     * @param {string}                 result.error    error stack if scenario failed
     * @param {number}                 result.duration duration of scenario in milliseconds
     */
    // afterScenario: function (world, result) {
    // },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // afterFeature: function (uri, feature) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    // after: (function (scenarioResult) {
    //     if (Number(scenarioResult.status) === Status.FAILED) {
    //       // Attach the original state
    //       const screenshot = browser.saveScreenshot();
    //       world.attach(screenshot, 'image/png');
    //     }
    //     return Promise.resolve(scenarioResult.status));
    // }),
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    //     generate({
    //         jsonDir: './reports/cucumberjs-json/json',
    //         reportPath: './reports/cucumberjs-json/html',
    //         openReportInBrowser: true
    //     });
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}


};

