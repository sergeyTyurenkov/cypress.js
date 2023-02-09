describe('Тестируем покупку', function () {
    it('Позитивный тест на успешную покупку', function () {
         cy.visit('https://testqastudio.me');
         cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('#cart-modal > div.cart-panel-content.panel-content > div.modal-header > a > span > svg').click({timeout: 13000});
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.checkout').click({timeout: 13000});
         cy.get('#billing_first_name').type('serg');
         cy.get('#billing_last_name').type('merk');
         cy.get('#billing_address_1').type('45, Bolonskaya st.');
         cy.get('#billing_city').type('St.-Petersburg');
         cy.get('#billing_state').type('St.-Petersburg');
         cy.get('#billing_postcode').type('111222');
         cy.get('#billing_phone').type(89876543210);
         cy.get('#billing_email').type('test@test.ru');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');
    })  
})