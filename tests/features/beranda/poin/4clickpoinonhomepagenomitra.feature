Feature: [TOKO] 4. Go to poin screen for account no mitra

  Scenario Outline: As a user no mitra, I can go to Poin screen from selected agen
    Given I am in Home screen <shopname>
    When I click menu 'Poin'
    Then System should be leading to Select Agen screen

    Given I am in Select Agen screen
    When I select agen to pairing and go back to Home screen
    When I click menu 'Poin' to view details Mitra
    Then System should be leading to Poin screen

    Examples:
        | shopname      |
        | Hanifah Wknd  |
