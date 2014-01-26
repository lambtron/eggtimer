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
	, mongoose = require('mongoose')
	, User = mongoose.model('User');

// Public functions. ===============================================================================
module.exports = function(app) {

	// Database stuff. ===============================================================================

	// * POST, add new user to mongodb.
	app.post('/api/user', function(req, res) {
		var first_name = req.body.firstName
		  , last_name = req.body.lastName;
	});

	// + GET all users and messages.
	app.get('/api/users', function(req, res) {
		User.find(function(err, users) {
			if (err) {
				res.send(err, 400);
			};
			res.json(users);
		});
	});

	// Delete a User.
	app.delete('/api/users/:user_id', function(req, res) {
		User.remove({
			_id : req.params.user_id
		}, function(err, user) {
			if (err) {
				res.send(err, 400);
			};

			// Get and return all of the messages after the message is deleted.
			User.find(function(err, users) {
				if (err) {
					res.send(err, 400);
				};
				res.json(users);
			});
		});
	});

	// Application route =============================================================================
	app.get('*', function(req, res) {
		// Load the single view file (Angular will handle the page changes).
		res.sendfile('index.html', {'root': './public/views/'});
	});
};

// Private functions. ==============================================================================

}());