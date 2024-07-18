const express = require('express');
const router = express.Router();

// Mock database
let students = [];

// GET all students
router.get('/', (req, res) => {
  res.json(students);
});

// GET a student by ID
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');
  res.json(student);
});

// POST a new student
router.post('/', (req, res) => {
  const { name, cpf, rg, number, email, value, date } = req.body;
  const student = {
    id: students.length + 1,
    name,
    cpf,
    rg,
    number,
    email,
    value,
    date: date || new Date().toISOString()
  };
  students.push(student);
  res.status(201).json(student);
});

// PUT (update) a student
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');

  const { name, cpf, rg, number, email, value, date } = req.body;
  student.name = name || student.name;
  student.cpf = cpf || student.cpf;
  student.rg = rg || student.rg;
  student.number = number || student.number;
  student.email = email || student.email;
  student.value = value || student.value;
  student.date = date || student.date;

  res.json(student);
});

// DELETE a student
router.delete('/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex === -1) return res.status(404).send('Student not found');

  const deletedStudent = students.splice(studentIndex, 1);
  res.json(deletedStudent);
});

module.exports = router;
