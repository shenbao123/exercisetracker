const mongoose = require("mongoose");
const Schema = mongoose.Schema

//or do const {Schema} = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true, //remove whitespaces in the end
    minLength: 3
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User; 