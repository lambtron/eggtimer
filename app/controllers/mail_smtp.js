(function(){

  var nodemailer = require('nodemailer')
    , apiKey = '3GorsOvXFLULcTZXqBMzoQ'
    , fs = require('fs');

  // paths for e-mail templates
  var template_paths = {
    'registration': './app/templates/registration_confirmation'
  }

  // opens smtp connection pool
  var smtpTransport = nodemailer.createTransport("SMTP",{
    'host': 'smtp.mandrillapp.com',
    'port': 587,
    'auth': { 'user': 'app21598665@heroku.com', 'pass': apiKey }
  });

  module.exports.sendRegistrationConfirmation = function(opts) {

    // opts should be:
    // name: String, email: String, reminders: []

    fs.readFile(template_paths['registration'], 'utf8', function(err, html){
      var mailOptions = {
        from: "Dr. Egg Timer, II <eggtimer@gmail.com>",
        to: "andyjiang@gmail.com, lunchbag@gmail.com",
        subject: "Thank you for registering!",
        html: html
      }

      smtpTransport.sendMail(mailOptions, function(error, response){
        if(error) {
          console.log(error);
        } else {
          console.log("Message sent: " + response.message);
        }
      });
    });
  }

}());