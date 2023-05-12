Feature: [TOKO] 96. Transfer Bank - Detail Informasi

  Scenario Outline: As a user, I can complete detail account number information
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be leading to Coin screen

    Given I am in Coin screen
    When I click button 'Tukar Koin' then click menu 'Transfer Ke Rekening Bank'
    Then System should be leading to Transfer Bank screen

    When I click voucher
    Then System should be leading to Coin Disbursement screen
    
    Given I am in Coin Disbursement screen
    When I click button 'Ubah Rekening'
    Then System should be leading to Tambah Rekening screen

    Given I am in Tambah Rekening screen
    When I fill form and submit
    Then System should be update account number information

    Examples:
        | shopname      |
        | Hanifah Wknd  |