Feature: [TOKO] 35. Order with Kode Promo

  Scenario Outline: As a user, I can order B2B with promo
    Given I am in Home screen <shopname>
    When I click menu 'Belanja'
    Then System should be leading to Order Online screen

    Given I am in Order Online screen
    When I search product to order and add quantity then click Shopping Cart
    Then System should be leading to Shopping Cart screen

    Given I am in Shopping Cart screen and select voucher
    When I click button 'Checkout'
    Then System should be leading to Checkout screen

    Given I am in Checkout screen
    When I choose shipping method and click button 'Buat Pesanan'
    Then System should be leading to Detail Transaksi screen and show order summary