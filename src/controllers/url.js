const { nanoid } = require("nanoid");
const urlModel = require("../modals/url");
const ErrorClass = require("../utils/errorClass");
const tryCatch = require("../utils/tryCatch");


exports.createUrl = tryCatch(async (req, res, next) => {
    const { longUrl } = req.body;
    if (!longUrl) return next(new ErrorClass(`url is required`, 400));

    const shortId = nanoid(8);

    const newUrl = await urlModel.create({
        shortId,
        longUrl,
        visitHistory: [],
    });

    res.status(201).json({ success: true, shortId: newUrl.shortId, shortUrl: `${req.protocol}://${req.get('host')}/url/fetch/${shortId}` });
});

exports.redirectUrl = tryCatch(async (req, res, next) => {
    const { shortId } = req.params;

    const entry = await urlModel.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true }
    );

    res.redirect(entry.longUrl);
});

