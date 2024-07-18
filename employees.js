const express = require('express');
const router = express.Router();

// Mock database
let employees = [];

// GET all employees
router.get('/', (req, res) => {
  res.json(employees);
});

// GET an employee by ID
router.get('/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

// POST a new employee
router.post('/', (req, res) => {
  const { name, cpf, rg, salary, email, password, dateInserted } = req.body;
  const employee = {
    id: employees.length + 1,
    name,
    cpf,
    rg,
    salary,
    email,
    password,
    dateInserted: dateInserted || new Date().toISOString()
  };
  employees.push(employee);
  res.status(201).json(employee);
});

// PUT (update) an employee
router.put('/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');

  const { name, cpf, rg, salary, email, password, dateInserted } = req.body;
  employee.name = name || employee.name;
  employee.cpf = cpf || employee.cpf;
  employee.rg = rg || employee.rg;
  employee.salary = salary || employee.salary;
  employee.email = email || employee.email;
  employee.password = password || employee.password;
  employee.dateInserted = dateInserted || employee.dateInserted;

  res.json(employee);
});

// DELETE an employee
router.delete('/:id', (req, res) => {
  const employeeIndex = employees.findIndex(e => e.id === parseInt(req.params.id));
  if (employeeIndex === -1) return res.status(404).send('Employee not found');

  const deletedEmployee = employees.splice(employeeIndex, 1);
  res.json(deletedEmployee);
});

module.exports = router;
