const jwt = require('jsonwebtoken');
const tryCatch = require("../utils/tryCatch");
const config = require('../config/config');
const ErrorClass = require('../utils/errorClass');


exports.authentication = tryCatch(async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) return next();
    const decode = await jwt.verify(token, config.jwt_secret);
    req.user = decode;
    return next()
})


exports.authorization = (roles = []) => {
    return function (req, res, next) {
        if (!req.user) return res.redirect('/login');
        const userRoles = Array.isArray(req.user.roles) ? req.user.roles : [req.user.roles];
        const hasAccess = userRoles.some(role => roles.includes(role));
        if (!hasAccess) return next(new ErrorClass(`Unauthorized`,403));
        return next();
    }
}