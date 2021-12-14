const mongoose = require('mongoose');

const LadiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    schoolAttended: {
        type: String,
        required: true
    },
    currentCareer: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        type: String
    }
});

module.exports = Ladies = mongoose.model('ladies', LadiesSchema);