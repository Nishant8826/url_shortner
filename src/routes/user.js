const express = require('express');
const { signup } = require('../controllers/user');
const userRoutes = express.Router();

userRoutes.post('/signup', signup);

module.exports = userRoutes;