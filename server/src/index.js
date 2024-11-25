require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

const app = express();

// Connect to MongoDB
connectDB();

// CORS Options
const whitelist = ['http://104.250.155.51', 'http://localhost:3001']; // Add allowed origins
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true); // Allow request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny request
    }
  },
  credentials: true, // Allow cookies or credentials if needed
};

// Middleware
app.use(cors(corsOptions)); // Enable CORS
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
