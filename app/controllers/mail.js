(function(){

  // process all inbound and outbound emails and route appropriately to mail_inbound.js or mail_smtp.js

  var inbound = require('./controllers/mail_inbound.js')
    , outbound = require('./controllers/mail_smtp.js');

  // Get the email.
  


}());