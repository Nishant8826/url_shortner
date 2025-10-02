const express = require('express');
const { fetchAllUrls } = require('../controllers/static');
const staticRoutes = express.Router();

staticRoutes.get('/', fetchAllUrls)

module.exports = staticRoutes;