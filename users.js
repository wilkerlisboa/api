const express = require('express');
const router = express.Router();

// Mock database
let users = [];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET a user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// POST a new user
router.post('/', (req, res) => {
  const { name, email, cpf, rg, password } = req.body; // Include rg
  const user = {
    id: users.length + 1,
    name,
    email,
    cpf,
    rg,  // Include rg
    password
  };
  users.push(user);
  res.status(201).json(user);
});

// PUT (update) a user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  const { name, email, cpf, rg, password } = req.body; // Include rg
  user.name = name || user.name;
  user.email = email || user.email;
  user.cpf = cpf || user.cpf;
  user.rg = rg || user.rg; // Update rg
  user.password = password || user.password;

  res.json(user);
});

// DELETE a user
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser);
});

module.exports = router;
