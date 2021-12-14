const mongoose = require('mongoose');

const ResourcesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
});

module.exports = Resources = mongoose.model('resources', ResourcesSchema);