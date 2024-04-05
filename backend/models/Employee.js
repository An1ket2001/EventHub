const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const empSchema = new Schema({
    name: { type: String },
    designation: { type: String },
});

module.exports = mongoose.model('emp', empSchema);