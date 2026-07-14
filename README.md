E-Commerce Test Automation
End-to-end test automation suite for e-commerce user journey built with Playwright and Page Object Model.
Tech Stack
Playwright, JavaScript, Page Object Model
Project Structure
pages/homePage.js — Home page actions
pages/productDetailPage.js — Product page actions
pages/cartPage.js — Cart page actions
pages/checkoutPage.js — Checkout page actions
tests/shopFlow.spec.js — End-to-end test
Test Cases
End-to-end purchase flow — product selection, add to cart, checkout, order placement
How to Run
npm install
npx playwright test
