Feature: [TOKO] 27. Perform B2B Transaction - Pengiriman Diambil

  Scenario Outline: As a user, I can order B2B for pick up
#   Scenario Outline: As a user, I can go to order online screen
    Given I am in Home screen <shopname>
    When I click menu 'Notifikasi', there is a new GSM Notification and I click on that notification
    Then System should be leading to details GSM Notification screen

    When I click button 'Checkout'
    Then System should be leading to Checkout screen

#   Scenario Outline: As a user, I can order some of products for pick up
    Given I am in Checkout screen
    When I choose shipping method 'Diambil' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |
