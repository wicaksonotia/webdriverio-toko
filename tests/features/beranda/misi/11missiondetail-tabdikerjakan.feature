Feature: [TOKO] 11. View mission details of tab Dikerjakan

  Scenario Outline: As a user, I can view mission details of tab Dikerjakan
    Given I am in Home screen and show shop name
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    When I view tab 'Menunggu Verifikasi'
    Then System should be able to leading to list misi 'Menunggu Verifikasi'

    When I view a mission
    Then System should be able to leading to detail mission screen

     Examples:
        | shopName      |
        | Hanifah Wknd  |