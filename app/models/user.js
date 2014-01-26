'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Message Schema
 */
var UserSchema = new Schema({
  created_on: {
    type: Date,
    default: Date.now
  },
  email_address: {
    type: String,
    default: '',
    trim: true
  },
  first_name: {
    type: String,
    default: '',
    trim: true
  },
  zip_code: {
    type: String,
    default: '',
    trim: true
  },
  reminders: []
  // Reminders will be an array of objects with the following properties:
  // - start date
  // - frequency (annual, 6 months, quarterly, monthly, N weeks, weekly, daily, hourly
  // - reminder name/id?
});



/**
 * Statics
 */
UserSchema.statics = {
    
}

mongoose.model('User', UserSchema);