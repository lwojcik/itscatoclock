const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Image', imageSchema);