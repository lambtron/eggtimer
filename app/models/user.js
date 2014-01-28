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
    var query = { _id: this._id };
    var update = { $push: { reminders: reminderObj } };
    this.constructor.update(query, update, cb);
  },
  updateReminder: function (reminderObj, cb) {
    var query = { _id: this._id, 'reminders.reminder': reminderObj.reminder };
    var update = { $set: { 'reminders.$.start_date': reminderObj.start_date,
      'reminders.$.frequency': reminderObj.frequency } };
    this.constructor.update(query, update, cb);
  },
  deleteReminder: function (reminderObj, cb) {
    var query = { _id: this._id };
    var update = { $pull: { 'reminders': { reminder: reminderObj.reminder } } };
    this.constructor.update(query, update, cb);
  }
}

mongoose.model('User', UserSchema);