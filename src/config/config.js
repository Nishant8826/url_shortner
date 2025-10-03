require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || 'development',
    mongoUri: process.env.MONGO_URI,
    jwt_secret: process.env.JWT_SECRET,
};

module.exports = config;

