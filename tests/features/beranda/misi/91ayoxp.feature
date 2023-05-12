Feature: [TOKO] 91. AYO XP

  Scenario Outline: As a user, I can submit mission to collect xp
    Given I am in Home screen <shopName>
    When I click XP bar
    Then System should be leading to XP screen and show current XP

    Given I am in XP screen
    When I click button 'Ke Halaman Misi'
    Then System should be leading to Mission List screen

    Given I am on the Mission List screen
    When I view detail mission and submit form
    Then System should be able to submit data and XP bar turns full red
    
    Examples:
        | shopName      |
        | Hanifah Wknd  |
