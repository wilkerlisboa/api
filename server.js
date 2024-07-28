const express = require('express');
const cors = require('cors'); // Adicione esta linha
const bodyParser = require('body-parser');
const users = require('./users');
const products = require('./products');
const employees = require('./employees');
const students = require('./students');
const sales = require('./sales'); // Adicione esta linha

const app = express();

// Configuração do CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Substitua pela origem que você deseja permitir
  optionsSuccessStatus: 200 // Algumas versões antigas de navegadores podem precisar disso
};

app.use(cors(corsOptions)); // Adicione esta linha

app.use(bodyParser.json());

app.use('/users', users);
app.use('/products', products);
app.use('/employees', employees);
app.use('/students', students);
app.use('/sales', sales); // Adicione esta linha

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
