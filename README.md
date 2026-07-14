**E-Commerce Test Automation**

A Playwright + JavaScript end-to-end test automation project for e-commerce user journey using Page Object Model.

Tech Stack:
- Playwright
- JavaScript
- Page Object Model

Project Structure:
- pages/homePage.js — Home page actions
- pages/productDetailPage.js — Product detail page actions
- pages/cartPage.js — Cart page actions
- pages/checkoutPage.js — Checkout page actions
- tests/shopFlow.spec.js — End-to-end test suite

Prerequisites:
- Node.js
- npm

How to Run: npx playwright test

What's Tested:
- End-to-end purchase flow covering product selection, add to cart, checkout, and order placement
