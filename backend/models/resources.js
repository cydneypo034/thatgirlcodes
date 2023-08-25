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
    bookOrSubjectTitle: {
        type: String,
        required: true
    },
    reviewAndRating: {
        type: String,
        required: true
    },
});

module.exports = Resources = mongoose.model('resources', ResourcesSchema);