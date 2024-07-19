const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./users');
const products = require('./products');
const employees = require('./employees');
const students = require('./students');

const app = express();
const port = 3000;

// Configuração do CORS
app.use(cors({
  origin: '*', // Permite qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite os métodos HTTP que você precisa
  allowedHeaders: ['Content-Type'], // Permite o cabeçalho Content-Type
}));

// Middleware para parsing de JSON
app.use(bodyParser.json());

// Rotas
app.use('/users', users);
app.use('/products', products);
app.use('/employees', employees);
app.use('/students', students);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
