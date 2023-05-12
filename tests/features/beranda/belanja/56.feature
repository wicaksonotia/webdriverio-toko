Feature: [TOKO] 56. Reorder Shipping One Day

  Scenario Outline: As a user, I can reorder B2B for delivery sent today
#   Scenario Outline: As a user, I can go to order online screen
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

    Given I am in Order Online screen
    When I click card history Produk Mitra with status Selesai
    Then System should be leading to Detail Transaksi screen and show order summary history

    When I click button Pesan Lagi
    Then System should be leading back to Order Online screen

    When I click Shopping Cart
    Then System should be leading to Shopping Cart screen

#   Scenario Outline: As a user, I can order some of products for delivery sent today
    Given I am in Shopping Cart screen
    When I click button 'Checkout'
    Then System should be leading to Checkout screen

    Given I am in Checkout screen
    When I choose shipping method 'Dikirim Hari Ini' and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary

    Examples:
        | shopname           |
        | AYAM GORENG LIK RI |