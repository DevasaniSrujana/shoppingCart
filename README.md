# ShoppingCart Project

## Live Link
(https://bespoke-halva-9f792e.netlify.app/)

## Description
ShoppingCart is a simple e-commerce web application built using **React**, **Redux**, **TypeScript**, and **TailwindCSS**. The app allows users to browse products, add items to the cart, update quantities, and remove items from the cart.

## Features
- Display list of products with name, description, price, and image
- Add products to the cart
- Increase or decrease product quantity
- Remove products from the cart
- Display cart items with total price calculation
- Persistent cart state using Redux
- Navigation between Home and Cart pages using React Router

## Technologies Used
- React
- TypeScript
- Redux Toolkit
- React Router DOM
- TailwindCSS
- React Icons

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DevasaniSrujana/shoppingCart.git
   cd shoppingCart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.


## How to Use
1. Browse products on the home page.
2. Click **Add to Cart** to add products to the cart.
3. Go to the cart page by clicking on the cart icon in the navbar.
4. Increase or decrease quantity, or remove items from the cart.
5. Navigate back to the home page to add more products.

## License
This project is licensed under the MIT License.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
