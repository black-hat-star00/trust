const express = require('express');
const router = express.Router();
const db = require('../db');

// Middleware to check for authentication
const isAuthenticated = (req, res, next) => {
  // In a real application, you'd verify a JWT or session here
  // For now, we'll simulate an authenticated user
  req.user = { id: 1 }; // Assuming user with ID 1 is logged in
  next();
};

// Get all medications for a user
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM medications WHERE user_id = $1', [req.user.id]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching medications');
  }
});

// Add a new medication
router.post('/', isAuthenticated, async (req, res) => {
  const { name, dosage, units, frequency, reminders } = req.body;

  try {
    const medicationResult = await db.query(
      'INSERT INTO medications (user_id, name, dosage, units, frequency) VALUES ($1, $2, $3, $4, $5) RETURNING medication_id',
      [req.user.id, name, dosage, units, frequency]
    );
    const medicationId = medicationResult.rows[0].medication_id;

    if (reminders && reminders.length > 0) {
      for (const time of reminders) {
        await db.query(
          'INSERT INTO reminders (medication_id, reminder_time) VALUES ($1, $2)',
          [medicationId, time]
        );
      }
    }

    res.status(201).json({ medicationId });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding new medication');
  }
});

module.exports = router;
