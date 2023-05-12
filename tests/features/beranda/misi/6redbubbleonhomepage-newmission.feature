Feature: [TOKO] 6. Read new mission one the Red bubble Misi Homepage

  Scenario Outline: As a user, I can read new mission one the Red bubble Misi Homepage
    Given I am in Home screen and show shop name and existing new misi
    When there is a new mission and I refresh the home screen
    Then System should be display the number addition of a new mission on the red bubble menu misi
    
    Examples:
        | shopName      |
        | Hanifah Wknd  |
