// src/app.js
const express = require('express');
const app = express();

// JSON body parsing
app.use(express.json());

// Routes
const userRoutes = require('./routes/user.route');
app.use('/api/users', userRoutes);

// Optional: 404 handler (for undefined routes under /api/users as well)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

module.exports = app;