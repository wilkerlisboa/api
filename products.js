const express = require('express');
const router = express.Router();

// Mock database
let products = [];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET a product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// POST a new product
router.post('/', (req, res) => {
  const { name, quantity, price } = req.body;
  const product = {
    id: products.length + 1,
    name,
    quantity,
    price
  };
  products.push(product);
  res.status(201).json(product);
});

// PUT (update) a product
router.put('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');

  const { name, quantity, price } = req.body;
  product.name = name || product.name;
  product.quantity = quantity || product.quantity;
  product.price = price || product.price;

  res.json(product);
});

// DELETE a product
router.delete('/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Product not found');

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});

module.exports = router;
