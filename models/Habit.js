const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a habit title'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    category: {
      type: String,
      enum: ['Physical', 'Mental', 'Productivity', 'Mindfulness', 'General'],
      default: 'Mental',
    },
    wellnessImpact: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },
    estimatedMinutes: {
      type: Number,
      default: 10,
    },
    streakCount: {
      type: Number,
      default: 0,
    },
    totalCompletions: {
      type: Number,
      default: 0,
    },
    isCompletedToday: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// ⚠️ MAKE SURE THIS EXACT LINE IS AT THE VERY BOTTOM:
module.exports = mongoose.model('Habit', habitSchema);