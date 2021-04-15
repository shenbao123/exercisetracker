const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//or do const {Schema} = require('mongoose');

const exerciseSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  duration: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    require: true
  }
}, {
  timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise; 