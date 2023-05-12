Feature: [TOKO] 7. Submit mission 2 from the Red bubble Misi Homepage

  Scenario Outline: As a user, I can submit mission from the Red bubble Misi Homepage
    Given I am in Home screen and show shop name
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    Given I am on the Mission List screen
    When I view detail mission and submit form
    Then System should be able to submit data
    Then System will send a notification that the user gets coins
