Feature: [TOKO] 92. Submit Planogram Mission

  Scenario Outline: As a user, I can submit planogram mission
    Given I am in Home screen and show shop name
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    Given I am on the Mission List screen
    When I view detail mission and submit form
    Then System should be able to submit data
