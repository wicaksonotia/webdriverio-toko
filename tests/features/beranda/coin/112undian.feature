Feature: [TOKO] 112. Undian

  Scenario Outline: As a user, I can get kupon undian
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be leading to Coin screen

    Given I am in Coin screen
    When I click button 'Tukar Koin' then click menu 'Kupon Undian'
    Then System should be leading to Undian screen

    When I click program kupon undian
    Then System should be leading to Detail Kupon Undian screen

    Given I am in Detail Kupon Undian screen
    When I input amount of undian i want to get
    Then System should be leading back to Detail Kupon Undian screen

    When I click button back two times then refresh page
    Then System should be leading to Detail Pembayaran Koin screen and show history

    Examples:
        | shopname      |
        | Hanifah Wknd  |
