Feature: [TOKO] 90. AYO Super Puter (Spin the Wheel)

  Scenario Outline: As a user, I can order B2B for pick up
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

    Given I am in Order Online screen
    When I search product to order and add quantity then click Shopping Cart
    Then System should be leading to Shopping Cart screen

    Given I am in Shopping Cart screen
    When I click button 'Checkout'
    Then System should be leading to Checkout screen

    Given I am in Checkout screen
    When I choose shipping method 'Diambil' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

    When I click button back
    Then System should be leading back to Order Online screen

    When I click my order history and click button 'BARANG TELAH DITERIMA'
    Then System should be able to update status to 'Pesanan Diterima'

    When I back to Home screen
    Then System should be leading to Home screen

    When I click image director
    Then System should be leading to Spin the Wheel screen

    Examples:
        #| shopname           |
        #| AYAM GORENG LIK RI |
        | shopname     |
        | Hanifah Wknd |
