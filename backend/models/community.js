const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
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
    }
});

module.exports = Users = mongoose.model('users', UsersSchema);