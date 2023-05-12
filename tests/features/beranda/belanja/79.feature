Feature: [TOKO] 79. Orders Pick Up with promo nominal are rejected by WS, and vouchers are checked to see if they are available or not

  Scenario Outline: As a user, I can order B2B with promo nominal for pick up
#   Scenario Outline: As a user, I can go to order online screen
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

#   Scenario Outline: As a user, I can order some of products with promo nominal
    Given I am in Order Online screen
    When I search product to order and add quantity then click Shopping Cart
    Then System should be leading to Shopping Cart screen

    Given I am in Shopping Cart screen and select voucher
    When I click button 'Checkout'
    Then System should be leading to Checkout screen

#   Scenario Outline: As a user, I can order some of products for pick up
    Given I am in Checkout screen
    When I choose shipping method 'Diambil' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

#   Scenario Outline: As a user, I can check the voucher is available or not
    When I click button back
    Then System should be leading back to Order Online screen

    When I click my order history
    Then System should be leading to Order detail screen

#   Scenario Outline: As a user, I can check the voucher is available or not
    When I search product and add quantity then click Shopping Cart
    Then System should be leading to Shopping Cart screen and show the voucher is available or not

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |