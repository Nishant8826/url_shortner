const mongoose = require('mongoose');
const logger = require('../logger');

const mongoDBConnect = (uri) => {
    mongoose.connect(uri).then(() => {
        console.log('MongoDB connected successfully')
    }).catch((err) => {
        console.log('Error while connecting mongoDB', err);
        logger.error('Error while connecting mongoDB', err)
    })
}

module.exports = mongoDBConnect;