// backend/models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  enrollmentNo: { type: String, required: true },
  seatNo: { type: String, required: true },
  semester: { type: Number, required: true },
  // Add other fields as needed
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
