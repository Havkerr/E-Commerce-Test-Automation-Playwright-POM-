const {test, expect} = require('@playwright/test');
const homePage = require('../pages/homePage');
const checkoutPage = require('../pages/checkoutPage');
const productDetailPage = require('../pages/productDetailPage');
const cartPage = require('../pages/cartPage');

test('Ecomerse testing framework', async({page}) => {
    const HomePage = new homePage(page);
    const CheckoutPage = new checkoutPage(page);
    const CartPage = new cartPage(page);
    const ProductDetailPage = new productDetailPage(page);
    await HomePage.navigate();  
    await HomePage.selectProduct();
    await ProductDetailPage.addToCart();
    await ProductDetailPage.handlePopUp();
    await ProductDetailPage.goToCart();
    await CartPage.placeOrder();
    await CheckoutPage.fillForm('Jack','usa','ny','4681354','jan','2026');
    await CheckoutPage.clickPurchase();
});

