Feature: [TOKO] 3. Go to poin screen

  Scenario Outline: As a user, I can go to Poin screen
    Given I am in Home screen <shopname>
    When I click menu 'Poin' to view details Mitra
    Then System should be leading to Poin screen

    Examples:
        | shopname      |
        | Hanifah Wknd  |