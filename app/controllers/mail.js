(function(){

  // process all inbound and outbound emails and route appropriately to mail_inbound.js or mail_smtp.js

  var inbound = require('./mail_inbound.js')
    , outbound = require('./mail_smtp.js');

  // Get the email.
  
  module.exports.incomingEmail = function(body) {
    console.log(body);
  };

}());