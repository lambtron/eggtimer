'use strict';

// Server is going to retrieve database.url.

// var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
  'mongodb://localhost/eggtimer';

module.exports = {
	// The database url to connect.
	url : mongoUri
}

