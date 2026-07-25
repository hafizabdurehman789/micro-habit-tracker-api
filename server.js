const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const habitRoutes = require('./routes/habitRoutes'); // 1. Import routes

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 2. Mount API Routes with '/api' prefix
app.use('/api', habitRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Micro-Habit API is running smoothly!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});