# E-Commerce Web Application

A responsive e-commerce web application built using React JS, MobX, Context API, and React Router.

The application allows users to browse products, view product details, add products to the cart, manage quantities, and view total cart value.

---

## Features

* Product Listing Page
* Product Detail Page
* Dynamic Routing
* Category-based Product Filtering
* Add to Cart Functionality
* Cart Quantity Management
* Persistent Cart using localStorage
* Responsive UI Design
* Loader Component
* Cart Dropdown in Header
* Footer with Total Items & Total Price
* MobX State Management
* Context API Integration

---

## Tech Stack

* React JS (Create React App)
* React Router DOM
* MobX
* MobX React Lite
* Axios
* Cypress

---

## Installation & Setup

Clone the repository:

```bash id="n9w4tk"
git clone <your-github-repository-link>
```

Move into the project directory:

```bash id="x5q2rm"
cd ecommerce-assignment
```

Install dependencies:

```bash id="v8c1sz"
npm install
```

Start the development server:

```bash id="y7m3la"
npm start
```

Open the application in browser:

```bash id="a2r6np"
http://localhost:3000
```

---

## Available Scripts

### Start Application

```bash id="e4p8zw"
npm start
```

### Build for Production

```bash id="w3n7kd"
npm run build
```

### Run Cypress Tests

```bash id="r5v1qs"
npx cypress open
```

---

## Folder Structure

```bash id="j9x2bh"
src/
 ├── api/
 ├── components/
 ├── context/
 ├── pages/
 ├── store/
 ├── App.js
 └── index.js
```

---

## API Used

Platzi Fake Store API

```bash id="z6q4fw"
https://api.escuelajs.co/api/v1/products
```

---

## Assumptions

* Product data is fetched using external APIs.
* Cart state is stored in localStorage.
* Quantity increases when the same product is added multiple times.

---

## Limitations

* Authentication is not implemented.
* Checkout functionality is not included.
* Backend services are not implemented.

---

## Additional Features Implemented

* Cart dropdown UI
* Quantity increment logic
* Responsive product cards
* Sticky header
* Loading spinner animation

---

## Author

Vedanta Keshri
