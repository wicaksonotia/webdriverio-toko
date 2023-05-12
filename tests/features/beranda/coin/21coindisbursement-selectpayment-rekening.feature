Feature: [TOKO] 21. Go to coin disbursement Transfer Bank the Ayo SRC Apps

  Scenario Outline: As a user, I can go to coin disbursement Transfer Bank the Ayo SRC Apps
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be leading to Coin screen

    Given I am in Coin screen
    When I click button 'Tukar Koin' then click menu 'Transfer Ke Rekening Bank'
    Then System should be leading to Transfer Bank screen

    Examples:
        | shopname      |
        | Hanifah Wknd  |
