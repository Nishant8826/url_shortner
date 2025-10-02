const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
    visitHistory: [
        {
            timestamp: {
                type: Date,
                default: Date.now,
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const urlModel = mongoose.model('Url', urlSchema);
module.exports = urlModel;
