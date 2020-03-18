'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required:true
  },
  setup: {
    type: String,
    trim: true
  },
  protip: {
    type: String,
    trim: true
  },
  description:{
    type: String,
    trim: true
  },
  execution:{
    type:String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('Movement', schema);
