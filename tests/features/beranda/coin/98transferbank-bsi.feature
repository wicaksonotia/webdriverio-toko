Feature: [TOKO] 98. Transfer Bank - BSI

  Scenario Outline: As a user, I can choose Bank Syariah Indonesia (BSI)
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
    When I search for Bank Syariah Indonesia
    Then System should be show Bank Syariah Indonesia

    Examples:
        | shopname      |
        | Hanifah Wknd  |