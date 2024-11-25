// File: src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const helloRoutes = require('./routes/helloRoutes');

// Base API routes
app.use('/api/hello', helloRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Backend Server!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
