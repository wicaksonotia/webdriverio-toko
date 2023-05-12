Feature: [TOKO] 81. Order shipping Pick Up with promo percent Reject Adjust amount, and vouchers are checked to see if they are available or not

  Scenario Outline: As a user, I can order B2B with promo percent for pick up then reject amount changes
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

#   Scenario Outline: As a user, I can order some of products for pick up
    Given I am in Checkout screen
    When I choose shipping method 'Diambil' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

#   Scenario Outline: As a user, I can adjust amount of product
    When I click button back
    Then System should be leading back to Order Online screen

    When I click my order history and click button 'BATALKAN'
    Then System should be able to update status to 'Pesanan Dibatalkan'

#   Scenario Outline: As a user, I can check the voucher is available or not
    When I search product and add quantity then click Shopping Cart
    Then System should be leading to Shopping Cart screen and show the voucher is available or not

    Examples:
        | shopname           |
        | AYAM GORENG LIK RI |