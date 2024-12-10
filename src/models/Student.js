// This file defines the schema for `Student` documents.
// Refer to UML diagram at https:// for more details.

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  cohort: {
    type: Number,
    required: true
  },
  onsite: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('student', studentSchema);