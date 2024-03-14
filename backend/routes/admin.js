import express from 'express';
import multer from 'multer';
import xlsx from 'xlsx';
import Student from '../models/students.cjs';

// rest of your code

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/uploadFile', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

    await Student.insertMany(jsonData);

    res.json({ message: 'Data imported successfully.' });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ message: 'Error processing file.' });
  }
});

export default router;