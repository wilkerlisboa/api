// routes/users.js
const express = require('express');
const router = express.Router();

// Defina suas rotas aqui
router.get('/', (req, res) => {
  res.send('Rota de Usuários');
});

module.exports = router;
