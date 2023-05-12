Feature: [TOKO] 2. Go to coin screen The Ayo SRC Apps

  Scenario Outline: As a user, I can go to coin screen the Ayo SRC Apps
    Given I am in Home screen <shopname>
    When I click menu 'Coin'
    Then System should be leading to Coin screen and show detail coins
    
    Examples:
        | shopname      | messageAlert |
        | Hanifah Wknd  | Fitur MISI hanya bisa diakses oleh SRC, Non-SRC, IMO, LAMP/HOP dan KA |
