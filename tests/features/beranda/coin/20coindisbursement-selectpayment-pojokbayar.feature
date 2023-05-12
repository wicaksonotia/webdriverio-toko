Feature: [TOKO] 20. Go to coin disbursement Saldo Pojok Bayar the Ayo SRC Apps

  Scenario Outline: As a user, I can go to coin disbursement Saldo Pojok Bayar the Ayo SRC Apps
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be leading to Coin screen

    Given I am in Coin screen
    When I click button 'Tukar Koin' then click card 'Saldo Pojok Bayar'
    Then System should be leading to Saldo Pojok Bayar screen

   Examples:
        | shopname      |
        | Hanifah Wknd  |
