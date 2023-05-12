Feature: [TOKO] 113. Get Spin the Wheel Push Notification

  Scenario Outline: As a user, I can view details new Spin the Wheel Push Notification
    Given I am in Home screen
    When there is a new Spin the Wheel notification and I tap Spin the Wheel push notification
    Then System should be leading to details Spin the Wheel notification

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |