const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "The 42nd Annual Apple Harvest Festival"
    },
    year: {
        type: Number,
        required: true,
        default: 2024
    },
    location: {
        address: String,
        city: String,
        state: String,
    },
    dates: [{
        day: String,
        startTime: String,
        endTime: String,
    }],
    description: String,
    logo: String,
    about: String,
    history: String,
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Festival', festivalSchema);
