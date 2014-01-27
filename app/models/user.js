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

/**
 * Methods
 * Available to all User instances.
 */
UserSchema.methods = {
  addReminder: function (reminderObj, cb) {
    // reminderObj.reminder = reminder;
    // reminderObj.start_date = start_date;
    // reminderObj.frequency = frequency;

    // Push reminderObj.

    this.save(cb);
  },
  updateReminder: function (reminderObj, cb) {
    // Find reminderObj and update it.
    this.save(cb);
  },
  deleteReminder: function (reminderObj, cb) {
    // Find reminderObj and delete it.
    this.save(cb);
  }
}

mongoose.model('User', UserSchema);