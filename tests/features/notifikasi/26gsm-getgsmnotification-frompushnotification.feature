Feature: [TOKO] 26. View details new GSM Push Notification

  Scenario Outline: As a user, I can view details new GSM Push Notification
    Given I am in Home screen
    When there is a new GSM Notification and I tap GSM push notification
    Then System should be leading to details GSM Notification, Shopping cart screen

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |