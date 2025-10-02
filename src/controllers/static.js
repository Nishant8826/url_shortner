const urlModel = require("../modals/url");
const tryCatch = require("../utils/tryCatch");


exports.fetchAllUrls = tryCatch(async (req, res, next) => {
    const urls = await urlModel.find({}).lean();;
    const urlsWithAnalytics = urls.map(url => ({
        ...url,
        clicks: url.visitHistory ? url.visitHistory.length : 0
    }));
    return res.render('home', {
        urls: urlsWithAnalytics
    });
})