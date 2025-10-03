const express = require('express');
const { fetchAllUrls, signup, login, fetchUrls } = require('../controllers/static');
const { authentication, authorization } = require('../middlewares/auth');
const staticRoutes = express.Router();

staticRoutes.get('/', authentication, authorization(['user']), fetchUrls)
staticRoutes.get('/admin', authentication, authorization(['admin']), fetchAllUrls)
staticRoutes.get('/signup', signup)
staticRoutes.get('/login', login)

module.exports = staticRoutes;