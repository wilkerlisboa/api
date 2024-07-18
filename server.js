const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users');
const products = require('./products');
const employees = require('./employees');
const students = require('./students');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', users);
app.use('/products', products);
app.use('/employees', employees);
app.use('/students', students);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
