Feature: [TOKO] 40. Confirm Order (Selesai)

  Scenario Outline: As a user, I can check that the order is complete
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

    Given I am in Order Online screen
    When I click my order history
    Then System should be leading to Detail Transaksi screen