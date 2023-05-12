Feature: [TOKO] 8. Read new mission one the List Mission screen

  Scenario Outline: As a user, I can read new mission one the List Mission screen
    Given I am in Home screen and show shop name
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    Given I am on the Mission List screen
    When there is a new mission and I click 'Tab Tersedia'
    Then system should be display an increase in the number of missions

    Examples:
        | shopName      |
        | Hanifah Wknd  |
