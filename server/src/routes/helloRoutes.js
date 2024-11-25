// File: src/routes/helloRoutes.js
const express = require('express');
const router = express.Router();
const helloController = require('../controllers/helloController');

// Define routes
router.get('/', helloController.sayHello);

module.exports = router;
