// This document defines the API endpoints for student-related operations.

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET request: get all students
router.get('/students', async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({   
   error: err.message   
   });
    }
  });


// POST request: create a new student
router.post('/students',   
 async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message   
 });
  }
});

// PUT requests

// DELETE requests