const config = require("../config/config");
const userModal = require("../modals/user");
const ErrorClass = require("../utils/errorClass");
const tryCatch = require("../utils/tryCatch");
const jwt = require('jsonwebtoken');

exports.signup = tryCatch(async (req, res, next) => {
    const { email, password, userName } = req.body;
    if (!email || !password || !userName) return next(new ErrorClass(`Invalid field`, 400));
    await userModal.create({ userName, email, password });
    return res.redirect('/login');
});

exports.login = tryCatch(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return next(new ErrorClass(`Invalid field`, 400));
    const user = await userModal.findOne({ email });
    if (!user) return next(new ErrorClass('Email not found', 404));
    if (user.password != password) return next(new ErrorClass('Password is incorrect', 400));
    const token = await jwt.sign(user.toObject(), config.jwt_secret, { expiresIn: '1h' })
    res.cookie('token', token);
    return res.redirect('/');
});

