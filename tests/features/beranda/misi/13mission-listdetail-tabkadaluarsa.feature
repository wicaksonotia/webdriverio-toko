Feature: [TOKO] 13. View mission details of tab Kadaluarsa

  Scenario Outline: As a user, I can view mission details of tab Kadaluarsa
    Given I am in Home screen and show shop name
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    When I view tab 'Kadaluarsa'
    Then System should be able to leading to list misi 'Kadaluarsa'

    When I view a mission
    Then System should be able to leading to detail mission screen

     Examples:
        | shopName      |
        | Hanifah Wknd  |
