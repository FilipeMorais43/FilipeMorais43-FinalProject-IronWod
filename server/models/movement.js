'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  setup: {
    type: String,
    trim: true
  },
  protip: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Movement', schema);
