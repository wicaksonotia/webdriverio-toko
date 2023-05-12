Feature: [TOKO] 10. View tab 'Dikerjakan' on Mission List screen

  Scenario Outline: As a user, I can view tab 'Dikerjakan' on Mission List screen
    Given I am in Home screen <shopName>
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    When I view tab 'Menunggu Verifikasi'
    Then System should be able to leading to list misi 'Menunggu Verifikasi'

    Examples:
        | shopName      |
        | Hanifah Wknd  |
