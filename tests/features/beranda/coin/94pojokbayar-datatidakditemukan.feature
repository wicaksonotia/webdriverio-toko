Feature: [TOKO] 94. Pojok Bayar - Data Tidak Ditemukan

  Scenario Outline: As a user, I can check coin disbursement Saldo Pojok Bayar
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be leading to Coin screen

    Given I am in Coin screen
    When I click button 'Tukar Koin' then click card 'Saldo Pojok Bayar'
    Then System should be show a pop-up

   Examples:
        | shopname      |
        | Hanifah Wknd  |
