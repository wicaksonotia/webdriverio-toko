Feature: [TOKO] 23. Redeem coins Transfer Bank the Ayo SRC Apps

  Scenario Outline: As a user, I can redeem coin Transfer Bank the Ayo SRC Apps
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be leading to Coin screen

    Given I am in Coin screen
    When I click button 'Tukar Koin' then click menu 'Transfer Ke Rekening Bank'
    Then System should be leading to Transfer Bank screen

    When I click voucher
    Then System should be leading to Coin Disbursement screen

    Given I am in Coin Disbursement screen
    When I submit coin disbursement with data exchanged coins then input the security code
    Then System should be leading back to Coin Disbursement screen

  Scenario Outline: As a user, I can view history redeem coins Transfer Bank the Ayo SRC Apps
    When I click button back two times then refresh page
    Then System should be leading to Detail Pembayaran Koin screen and show history redeem coins

    Examples:
        | shopname      |
        | Hanifah Wknd  |
