import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Paso 5: data/products.js
export const products = [
  { id: "1", name: "Remera", category: "ropa", price: 1000 },
  { id: "2", name: "Pantalón", category: "ropa", price: 1500 },
  { id: "3", name: "Gorra", category: "accesorios", price: 500 },
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });

export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === id));
    }, 1000);
  });