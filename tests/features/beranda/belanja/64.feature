Feature: [TOKO] 64. Order Shipping Tomorrow Confirm Adjust

  Scenario Outline: As a user, I can order B2B for sent tomorrow then confirm amount changes
#   Scenario Outline: As a user, I can go to order online screen
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

    Given I am in Order Online screen
    When I search product to order and add quantity then click Shopping Cart
    Then System should be leading to Shopping Cart screen

    Given I am in Shopping Cart screen
    When I click button 'Checkout'
    Then System should be leading to Checkout screen

#   Scenario Outline: As a user, I can order some of products for delivery tomorrow
    Given I am in Checkout screen
    When I choose shipping method 'Dikirim Besok' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

#   Scenario Outline: As a user, I can adjust amount of product
    When I click button back
    Then System should be leading back to Order Online screen

    When I click my order history and click button 'SETUJU'
    Then System should be able to update status to 'Perubahan Disetujui'

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |