const mongoose = require('mongoose');

const ResourcesSchema = new mongoose.Schema({
    subjectTaught: {
        type: String,
        required: true
    },
    bookOrWebsite: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
});

module.exports = Resources = mongoose.model('resources', ResourcesSchema);