Feature: [TOKO] 28. Perform B2B Transaction - Pengiriman Dikirim - Besok

  Scenario Outline: As a user, I can order B2B for delivery sent tomorrow
#   Scenario Outline: As a user, I can go to order online screen
    Given I am in Home screen <shopname>
    When I click menu 'Notifikasi', there is a new GSM Notification and I click on that notification
    Then System should be leading to details GSM Notification screen

    When I click button 'Checkout'
    Then System should be leading to Checkout screen

#   Scenario Outline: As a user, I can order some of products for delivery sent tomorrow
    Given I am in Checkout screen
    When I choose shipping method 'Dikirim Besok' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |
