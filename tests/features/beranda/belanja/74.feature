Feature: [TOKO] 74. Order Shipping One Day With Promo Percent Confirm Adjust Price

  Scenario Outline: As a user, I can order B2B with promo percent for sent today then confirm price changes
#   Scenario Outline: As a user, I can go to order online screen
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

#   Scenario Outline: As a user, I can order some of products with promo percent
    Given I am in Order Online screen
    When I search product to order and add quantity then click Shopping Cart
    Then System should be leading to Shopping Cart screen

    Given I am in Shopping Cart screen and select voucher
    When I click button 'Checkout'
    Then System should be leading to Checkout screen

#   Scenario Outline: As a user, I can order some of products for delivery sent today
    Given I am in Checkout screen
    When I choose shipping method 'Dikirim Hari Ini' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

#   Scenario Outline: As a user, I can adjust price of product
    When I click button back
    Then System should be leading back to Order Online screen

    When I click my order history and click button 'SETUJU'
    Then System should be able to update status to 'Perubahan Disetujui'

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |