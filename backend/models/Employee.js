const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const empSchema = new Schema({
    name: { type: String },
    email:{type:String},
    password:{type:String},
    designation: { type: String },
});

module.exports = mongoose.model('Emp', empSchema);