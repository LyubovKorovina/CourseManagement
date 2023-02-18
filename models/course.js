const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ID: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Course', courseSchema);