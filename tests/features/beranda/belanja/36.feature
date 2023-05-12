Feature: [TOKO] 36. Confirm Order (Konfirmasi Perubahan)

  Scenario Outline: As a user, I can confirm amount changes
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

    Given I am in Order Online screen
    When I click my order history
    Then System should be leading to Detail Transaksi screen

    Given I am in Detail Transaksi screen
    When I click button 'SETUJU'
    Then System should be able to update status to 'Perubahan Disetujui'