module.exports = {
    account: {
        otp1: '1',
        otp2: '2',
        otp3: '3',
        otp4: '4',
        otp5: '5',
        otp6: '6',
        phonenumber1: '82372882557',           //khusus Misi
        // shopName1: 'Toko Hanifah HMS Mitra', //khusus Misi Toko Hanifah HMS Mitra
        shopName1: 'Toko Hani',                 //prod

        phonenumber2: '800072882558',          //khusus order
        shopName2: 'Hanifah Wknd',              //Shabrina khusus order Toko Hanifah 25

        phonenumber3: '81220576559',           //Akun Mutiara
        shopName3: 'Toko Weekend 1',            //Akun Mutiara

        phonenumberNonHms: '800072882553',
        shopNameNonHms: 'Hanifah Wknd', //TOKO HANIFAH NON HMS NON MITRA

        phonenumber4: '8113600488',
        shopName4: 'TIA WICAKSONO',
        shopNameTia: 'TIA WICAKSONO',
    },
    coin: {
        expiredcoin: '',
        totalMyCoin: '455',
        koinTerkumpul: '',
        koinDitukarkan: '',
        earnCoinSubmission: '',
        earnCoinVerification: '',

        redeemNameVB: 'PK - Voucher Belanja',

        messageAlertPB: '',
        koinToRedeemPB: '100',
        redeemNamePB: 'Hwknd-TBSPB-4422',
        popUpAlertFailedRedeemPB: '',
        PembayaranPojokBayar: '',
        emptyStatelistPB: 'Data tidak tersedia',

        messageAlertTB: '',
        redeemNameTB: 'Hwknd-TBSPB-4422',
        koinToRedeemTB: '100',
        popUpAlertFailedRedeemTB: 'Penukaran coin tidak dapat dilakukan. Minimal 100 coin.',
        PembayaranTransferBank: '',

        noRekening: '2941014056',
        tempatLahir: 'BANDAR LAMPUNG',
        bankMandiri: 'Bank Syariah Mandiri',
        bankNI: 'BNI Syariah',
        bankRI: 'BRI Syariah',
        bankSI: 'Bank Syariah Indonesia (BSI)',
    },
    mission: {
        existCounterRedbubble: '',
        counterRedbubble: '',
        qtyMissionBefore: '',
        qtyMissionAfter: '',

        misi1: 'Mission - Hanifah',
        misi1Coin: '8',
        misi1Ans1: 'No. 1',
        misi1Ans2: 'Jawaban No. 2',
        misi1Ans9: '9',

        misi2: 'Mission 02 - Hanifah',
        misi2Coin: '8',
        misi2Ans1: 'No. 1',
        misi2Ans2: 'Jawaban No. 2',
        misi2Ans4: '4',
        misi2Ans5: 'No. 5',
        misi2Ans6: 'Jawaban No. 6',
        misi2Ans9: '9',

        misiPlanogram: 'Test IR Non Cigarette - Planogram Hanifah Wknd', //'Template Planogram Stock Check IR Hanifah Wknd', Mission Planogram - Hanifah',
        misiPlanogramCoin: '8',
        misiPlanogramAns1: 'No. 1',
        misiPlanogramAns2: 'Jawaban No. 2',
        misiPlanogramAns9: '9',

        inpupc1: '8F8-XS4-WLW',
        inpupc2: 'TES-TSI-SDA',

        misiDikerjakan: 'HWKND-Mission1TokoDikerjakan',
        misi1DikerjakanExpDate: '10 Nov 2021',  //Scenario 11
        misiExp: 'ExpiredWknd',
        misi1DeadlineExpDate: '31 Des 2021',


        emptyStateListBaru: 'Tidak ada misi baru',
        emptyStateListDikerjakan: 'Tidak ada misi yang harus dikerjakan',
        emptyStateListKadaluarsa: 'Tidak ada misi yang kadaluarsa',

        alertMessageNonHms: 'Fitur MISI hanya bisa diakses oleh SRC, Non-SRC, IMO, LAMP/HOP dan KA',
    },
    poin: {
        totalMyPoin: '',
    },
    product: {
        price: '',
        name1: 'Indomie', //untuk revise quantity
        name2: 'Dettol',
        name3: 'Eskulin',
        nameTia: 'aaa',
        qtyProduct1: '5', //indomie
        qtyProduct2: '1',
        qtyProduct3: '2',
        qtyProduct4: '3',
        qtyProductTia: '1',
        totalQtyCart: '',
        totalPriceCart: '',
    },
    cart: {
        nameRokok1: 'Avolution 20',
        priceProduct1: 'Rp 24.200',
        qtyProduct1: '1',

        nameRokok2: '',
        priceProduct2: '',
        qtyProduct2: '',

        nameNonRokok3: '',
        priceProduct3: '',
        qtyProduct3: '',

        nameNonRokok4: '',
        priceProduct4: '',
        qtyProduct4: '',

        totalQtyProduct: '',
        totalPriceCart: '',

        messageAlertPromo: 'Promo tidak bisa digunakan karena tidak ada ongkos kirim',
        notes: 'Jangan pakai plastik',
    },
    order: {
        orderId: '',
        orderdate: '',
        orderstatus: '',
        product: '',
        name: '',
        unit: '',
        price: '',
        qty: '',
        shippingaddress: '',
        notes: '',
        subtotal: '',
        totalRokok: '',
        totalNonRokok: '',
        totalorder: '',
    },
    notif: {
        emptyStateList: 'Belum ada Notifikasi',

        titleUnmatch: 'Pemutusan kerjasama oleh Retailer',
        descUnmatch: 'Anda telah terputus dari ',

        titleSubmitMisi: 'Yuk segera selesaikan misimu!',
        descSubmitMisi: 'Hai Sahabat SRC ' + 'account.shopName' + ', segera selesaikan misi ' + 'mission.misi1' + ' sebelum masa aktif misi berakhir',

        titleNewMisi: 'Penerimaan misi',
        descNewMisi: 'Anda mendapatkan ' + 'mission.misi1Coin' + ' coin dari' + 'mission.misi1',

        titleEarnCoin: 'Coin Pengiriman Misi',
        descEarnCoin: 'Anda mendapatkan ' + 'mission.misi1Coin' + ' coin dari ' + 'mission.misi1',

        statusMisiDone: 'Misi Telah Dikerjakan',
        statusMisiExpired: 'Misi Telah Kadaluarsa',

        titleCart: 'Sepertinya ada yang Anda lupakan?',
        descCart: 'Halo Sahabat ' + 'account.shopName' + ', Anda masih memiliki proses pesanan yang belum diselesaikan. Ayo segera selesaikan pesanan Anda',

        titleProductRecommend: 'Ada produk yang direkomendasikan', //25, 26
        descProductRecommend: 'Klik disini untuk melihat detail produk yang direkomendasikan ', //25, 26

        dateUnmatch: '',
        dateSubmitMisi: '',
        dateNewMisi: '',
        dateEarnCoin: '',
        dateOrder: '',
    },
    alert: {
        messageAlert: '',
    },
    agen: {
        inpKodeAgen: 'BOT00152093',
    }
};
