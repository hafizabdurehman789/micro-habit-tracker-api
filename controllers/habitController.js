const Habit = require('../models/Habit');

// 1. Create habit
exports.createHabit = async (req, res) => {
  try {
    const habit = await Habit.create(req.body);
    res.status(201).json({ success: true, data: habit });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 2. Get all habits
exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json({ success: true, count: habits.length, data: habits });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// 3. Get single habit by ID
exports.getHabitById = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ success: false, error: 'Habit not found' });
    res.status(200).json({ success: true, data: habit });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid ID format' });
  }
};

// 4. Update habit
exports.updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!habit) return res.status(404).json({ success: false, error: 'Habit not found' });
    res.status(200).json({ success: true, data: habit });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 5. Toggle completion
exports.completeHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ success: false, error: 'Habit not found' });

    habit.isCompletedToday = !habit.isCompletedToday;
    if (habit.isCompletedToday) {
      habit.streakCount += 1;
      habit.totalCompletions += 1;
    } else {
      habit.streakCount = Math.max(0, habit.streakCount - 1);
      habit.totalCompletions = Math.max(0, habit.totalCompletions - 1);
    }

    await habit.save();
    res.status(200).json({ success: true, data: habit });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 6. Delete habit
exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) return res.status(404).json({ success: false, error: 'Habit not found' });
    res.status(200).json({ success: true, message: 'Habit deleted' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid ID format' });
  }
};