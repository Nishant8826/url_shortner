const logger = require("../logger");

const errorHandler = (err, req, res, next) => {
    logger.error(`${req.method} ${req.originalUrl} - ${err.message}\nSTACK: ${err.stack}`);

    err.message = err.message || 'Internal Server Error';
    err.code = err.code || 500;
    return res.status(err.code).json({ success: false, message: err.message });
};

module.exports = errorHandler;
