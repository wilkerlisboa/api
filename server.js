const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = require('./routes/users');
const products = require('./routes/products');
const employees = require('./routes/employees');
const students = require('./routes/students');
const sales = require('./routes/sales'); // Adiciona esta linha

app.use(bodyParser.json());

app.use('/users', users);
app.use('/products', products);
app.use('/employees', employees);
app.use('/students', students);
app.use('/sales', sales); // Adiciona esta linha

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
