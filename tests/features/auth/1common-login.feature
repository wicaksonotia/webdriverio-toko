Feature: Success go to mission list The Ayo SRC Apps

  Background:
    Given I am on the landing screen Ayo SRC Toko and I swipe to the left
    When I login with <phonenumber>, input security code <securitycode>, and input otp <otp1><otp2><otp3><otp4><otp5><otp6>
    Then System should be leading to Home screen and show shop name <shopName>
    Examples:
      | phonenumber | securitycode | otp1 | otp2 | otp3 | otp4 | otp5 | otp6 | shopName |
      | 82372882557 | 252525       | 1    | 2    | 3    | 4    | 5    | 6    | Toko Hanifah |

      #dicoba background dengan data
