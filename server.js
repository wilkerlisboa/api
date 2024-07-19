const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./users');
const products = require('./products');
const employees = require('./employees');
const students = require('./students');

const app = express();
const port = 3000;

// Configuração do CORS com opções mais detalhadas
app.use(cors({
  origin: 'http://localhost:5173', // Permitir apenas seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir os métodos HTTP necessários
  allowedHeaders: ['Content-Type', 'Authorization'], // Permitir cabeçalhos necessários
}));

// Middleware para parsing de JSON
app.use(bodyParser.json());

// Rotas
app.use('/users', users);
app.use('/products', products);
app.use('/employees', employees);
app.use('/students', students);

// Habilitar CORS para todas as rotas para requisições OPTIONS
app.options('*', cors());

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
