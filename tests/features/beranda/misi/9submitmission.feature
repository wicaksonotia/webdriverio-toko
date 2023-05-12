Feature: [TOKO] 9. Submit mission 1

  Scenario Outline: As a user, I can submit mission 1
    Given I am in Home screen and show shop name
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    Given I am on the Mission List screen
    When I view detail mission and submit form
    Then System should be able to submit data
