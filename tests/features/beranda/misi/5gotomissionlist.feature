Feature: [TOKO] 5. Go To Mission List

  Scenario Outline: As a user, I can go to mission list the Ayo SRC Apps
    Given I am in Home screen <shopName>
    When I click menu 'Misi'
    Then System should be leading to Mission List screen and show total coins
    
    Examples:
        | shopName      |
        | Hanifah Wknd  |
