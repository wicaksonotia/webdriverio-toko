Feature: [TOKO] 14. Account Non Registered HMS click coin menu

  Scenario Outline: As a user Non Registered HMS, I can not click coin menu
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be show alert message
    
    Examples:
        | shopname      | messageAlert |
        | Hanifah Wknd  | Fitur MISI hanya bisa diakses oleh SRC, Non-SRC, IMO, LAMP/HOP dan KA |