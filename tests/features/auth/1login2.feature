Feature: [TOKO] 1. Login to The Ayo SRC Apps

  #Background:
  Scenario Outline: As a user, I can sign in into the Ayo SRC Apps

    Given I am on the landing 1 Ayo SRC Toko
    When I swipe up and system displays landing 2, I click button 'Masuk Sekarang'
    Then System should be leading to Login screen Ayo SRC Toko

    Given I am on the login screen Ayo SRC Toko
    When I login with phone number <phonenumber>
    Then System should be leading to Security Code screen

    Given I am on the security code screen Ayo SRC Toko
    When I input security code and submit
    Then System should be leading to 'Access from other devices' screen

    When I input otp and submit
    Then System should be leading to Home screen <shopname>

    Examples:
      | shopname     | phonenumber  | securitycode | otp1 | otp2 | otp3 | otp4 | otp5 | otp6 |
      | Hanifah Wknd | 800072882558 | 252525       | 1    | 2    | 3    | 4    | 5    | 6    |
