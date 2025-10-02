const express = require('express');
const path = require('path');
const mongoDBConnect = require('./config/db');
const config = require('./config/config');
const errorHandler = require('./middlewares/error');
const staticRoutes = require('./routes/staticRoutes');
const urlRoutes = require('./routes/url');
const userRoutes = require('./routes/user');
const app = express();

mongoDBConnect(config.mongoUri);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));


app.use('/', staticRoutes);
app.use('/url', urlRoutes);
app.use('/user', userRoutes);

app.use(errorHandler);

module.exports = app;