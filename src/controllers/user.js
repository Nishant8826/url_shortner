const userModal = require("../modals/user");
const ErrorClass = require("../utils/errorClass");
const tryCatch = require("../utils/tryCatch");


exports.signup = tryCatch(async (req, res, next) => {
    const { email, password, userName } = req.body;
    if (!email || !password || !userName) return next(new ErrorClass(`Invalid field`, 400));

    const user = await userModal.create({ userName, email, password });
    return res.status(201).json({ user });
});

exports.signup = tryCatch(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return next(new ErrorClass(`Invalid field`, 400));

    const user = await userModal.findOne({ email, password });
    if (!user) return next(new ErrorClass('user not found', 404));
    return res.status(201).json({ user });
});

