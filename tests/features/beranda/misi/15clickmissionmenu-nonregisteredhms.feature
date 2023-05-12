Feature: [TOKO] 15. Account Non Registered HMS click mission menu

  Scenario Outline: As a user Non Registered HMS, I can not click mission menu
    Given I am in Home screen <shopname>
    When I click menu 'Misi'
    Then System should be show alert message <messageAlert>
   
   Examples:
        | shopname      | messageAlert |
        | Hanifah Wknd  | Fitur MISI hanya bisa diakses oleh SRC, Non-SRC, IMO, LAMP/HOP dan KA |
