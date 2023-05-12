Feature: [TOKO] 12. View tab 'Kadaluarsa' on Mission List screen

  Scenario Outline: As a user, I can view tab 'Kadaluarsa' on Mission List screen
    Given I am in Home screen <shopName>
    When I click menu 'Misi'
    Then System should be leading to Mission List screen

    When I view tab 'Kadaluarsa'
    Then System should be able to leading to list misi 'Kadaluarsa'

    Examples:
        | shopName      |
        | Hanifah Wknd  |

