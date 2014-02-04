'use strict';

(function() {

/**
 * Import all models ===============================================================================
 */
require('../app/models/user');

/**
 * Module dependencies =============================================================================
 */
var _ = require('underscore')
	, mail = require('./app/controllers/mail')
	// , fs = require('fs')
	, mongoose = require('mongoose')
	, User = mongoose.model('User');

// Public functions. ===============================================================================
module.exports = function(app) {

	// Add new user to MongoDB.
	app.post('/api/user', function(req, res) {
		var user = {};
  	user.first_name = req.body.first_name
  	  , user.email_address = req.body.email_address
  	  , user.zip_code = req.body.zip_code
  	  , user.reminders = req.body.reminders;

  	// Create new user object in MongoDB.
  	User.create(user, function(err, data) {
			if (err) {
				res.send(err, 400);
			};

			// Return success.
			res.json(data);
		});
	});

	// Endpoint for receiving inbound email.
	app.post('/email/inbound', function(req, res) {

		// Inbound email logic.

		// Get user (based on email address).

		// Parse email.

		// Then perform right database operations based on email.

		// Respond with confirmation or clarification email.

		var events = JSON.parse(req.body.mandrill_events);

		for (var i=0; i<events.length; i++) {
      mail.incomingEmail({
        'from': events[i].msg.from_email,
        'text': events[i].msg.text
      });
      res.send(200);
		}
	});


	// Application route =============================================================================
	app.get('*', function(req, res) {
		// Load the single view file (Angular will handle the page changes).
		res.sendfile('index.html', {'root': './public/views/'});
	});
};

// Private functions. ==============================================================================

}());