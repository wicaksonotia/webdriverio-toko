Feature: [TOKO] 51. Order Shipping One Day With Promo Nominal Get Poin

  Scenario Outline: As a user, I can order B2B with promo nominal for sent today and get poin
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

#   Scenario Outline: As a user, I can order some of products for delivery sent today
    Given I am in Checkout screen
    When I choose shipping method 'Dikirim Hari Ini' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |