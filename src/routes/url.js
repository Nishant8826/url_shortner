const express = require('express');
const { createUrl, redirectUrl } = require('../controllers/url');
const urlRoutes = express.Router();

urlRoutes.post('/shorten', createUrl);
urlRoutes.get('/fetch/:shortId', redirectUrl);

module.exports = urlRoutes;