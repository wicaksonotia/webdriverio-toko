Feature: [TOKO] 25. View details new GSM Notification

  Scenario Outline: As a user, I can view details new GSM Notification
    Given I am in Home screen
    When there is a new GSM Notification and I click menu notification
    Then System should be leading to details GSM Notification screen

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |