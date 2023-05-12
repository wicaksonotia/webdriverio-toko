Feature: [TOKO] 99. Submit Misi TBR (ke Jawaban Singkat)

  Scenario Outline: As a user, I can submit TBR Mission - ke Jawaban Singkat
    Given I am in Home screen
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    Given I am on the Mission List screen
    When I view detail mission and submit form
    Then System should be able to submit data
