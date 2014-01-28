'use strict';

// Initialize server ===============================================================================
var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , mongoose = require('mongoose')
  , database = require('./config/database')
  , $ = require('jquery')
  // , io = require('socket.io').listen(server)
  , port = process.env.PORT || 3000
  , mail = require('./app/controllers/mail')
  //, mail = require('./app/controllers/mail_smtp') // comment this out later
  , fs = require('fs');

// Set environmental variables.
// require('./config/config');

// Configuration ===================================================================================
mongoose.connect(database.url);

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.bodyParser());

// Routes ==========================================================================================
require('./config/routes.js')(app);

// Application route =============================================================================
app.get('*', function(req, res) {
	// Load the single view file (Angular will handle the page changes).
	res.sendfile('index.html', {'root': './public/views/'});
});

app.post('/email/inbound', function(req, res) {
  if (res.headers) { res.send(200) }
  //res.send(200);
  console.log('hi');
  console.log(req.body.mandrill_events);
  
});

// Listen (start app with node server.js) ==========================================================
server.listen(port, function() {
	console.log("App is now listening on port " + port)
  // mail.sendRegistrationConfirmation();
});