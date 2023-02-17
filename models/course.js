const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Author', courseSchema);