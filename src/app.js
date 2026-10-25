const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.route');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// root route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// user routes
app.use('/api/users', userRoutes);

module.exports = app;