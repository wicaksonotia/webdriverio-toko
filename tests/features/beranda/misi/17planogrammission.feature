Feature: [TOKO] 17. Planogram Mission

  Scenario Outline: As a user, I can view Planogram mission details of tab Baru
    Given I am in Home screen
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    Given I am on the Mission List screen
    When I view detail planogram mission
    Then System should be able to leading to detail mission screen
