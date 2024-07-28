// sales.js
const express = require('express');
const router = express.Router();

// Dados mockados para exemplo
let sales = [];

// Endpoint para buscar todas as vendas
router.get('/', (req, res) => {
    res.json(sales);
});

// Endpoint para adicionar uma nova venda
router.post('/', (req, res) => {
    const sale = req.body;
    sales.push(sale);
    res.status(201).json(sale);
});

// Endpoint para deletar todas as vendas
router.delete('/', (req, res) => {
    sales = [];
    res.status(204).send();
});

module.exports = router;
