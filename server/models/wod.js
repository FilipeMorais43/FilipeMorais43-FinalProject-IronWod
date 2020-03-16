'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  wod: {
    type: String,
    trim: true
  },
  score: {
    type: String,
    trim: true
  },
  tips: {
    tips: String,
    trim: true
  }
});

module.exports = mongoose.model('Wod', schema);
