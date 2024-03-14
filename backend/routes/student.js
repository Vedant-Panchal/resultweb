// routes/student.js
import express from 'express';
import Student from '../models/students.cjs';

const router = express.Router();

router.post('/getResult', async (req, res) => {
  const { enrollmentNo, seatNo, semester } = req.body;

  try {
    const result = await Student.findOne({
      enrollmentNo,
      seatNo,
      semester,
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'No result found for the provided details.' });
    }
  } catch (error) {
    console.error('Error fetching result:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

export default router;
