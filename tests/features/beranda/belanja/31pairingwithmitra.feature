Feature: [TOKO] 31. Pairing with Mitra

  Scenario Outline: As a user, I can pair with mitra so I can shop
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Select Agen screen

    Given I am in Select Agen screen
    When I select agen to pairing and go back to Home screen
    Then System should be leading to Home screen

    Examples:
    | shopname      |
    | Hanifah Wknd  |