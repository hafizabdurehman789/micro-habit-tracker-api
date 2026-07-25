const express = require('express');
const router = express.Router();

// Import controller functions
const {
  createHabit,
  getAllHabits,
  getHabitById,
  updateHabit,
  completeHabit,
  deleteHabit,
} = require('../controllers/habitController');

// Map URL routes to controller functions
router.route('/habits')
  .post(createHabit)     // POST /api/habits  -> Creates a habit
  .get(getAllHabits);    // GET /api/habits   -> Gets all habits

router.route('/habits/:id')
  .get(getHabitById)     // GET /api/habits/:id    -> Gets a single habit
  .put(updateHabit)      // PUT /api/habits/:id    -> Updates a habit
  .delete(deleteHabit);  // DELETE /api/habits/:id -> Deletes a habit

// Special route to toggle completion/streak
router.patch('/habits/:id/complete', completeHabit);

module.exports = router;