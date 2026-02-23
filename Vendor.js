const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['food', 'craft', 'entertainment'],
        required: true,
    },
    description: String,
    image: String,
    contact: String,
    hours: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Vendor', vendorSchema);
