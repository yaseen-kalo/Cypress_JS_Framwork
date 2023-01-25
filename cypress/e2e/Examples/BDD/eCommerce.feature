Feature: e2e Testing of ecommerce Product Page

    Adding products to card and verify its cost and then order.
    Scenario: Order Product from e-commerce application
    Given Open Ecommerce product page
    When Add product to shopping cart
    And Validate price of all product with total amount
    Then select Peuchase button and verify successfull order placed message