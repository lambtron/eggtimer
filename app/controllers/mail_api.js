// deprecate?

(function(){

  var apiKey = '3GorsOvXFLULcTZXqBMzoQ'
    , host = 'mandrillapp.com'
    , basePath = '/api/1.0/'
    , https = require('https');

  var templates = {
    'registration': 'registration-confirmation'
  }

  sendHttpsPostRequest = function(path, data, cb) {
    var options = {
      host: host,
      path: basePath + path,
      method: 'POST'
    };

    var response_handler = function(res) {
      var str = ''
      res.on('data', function (chunk) {
        str += chunk;
      });

      res.on('end', function () {
        str = JSON.parse(str);
        cb(str);
      });
    };

    var req = https.request(options, response_handler);

    req.write(JSON.stringify(data));
    req.end();
  }

  module.exports.pingMandrill = function() {
    sendHttpsPostRequest(
      'users/ping.json',
      { key: apiKey },
      function(res) {
        console.log("derp!")
        console.log(res)
      }
    );
  }

  module.exports.getMessageInfo = function(id) {
    sendHttpsPostRequest(
      'messages/info.json',
      { key: apiKey, id: id },
      function(res) {
        console.log(res);
      })
  }

  module.exports.sendConfirmationEmail = function() {
    // NOTE: This gets sent straight to the spam folder.

    var data = {
      'key': apiKey,
      'template_name': templates['registration'],
      'template_content': [],
      'message': {
        'from_name': 'Dr. Egg Timer, II',
        'from_email': 'lunchbag@gmail.com',
        'to': [
          {
            'email': 'lunchbag@gmail.com',
            'name': 'jen',
            'type': 'to'
          }
        ],
        'headers': {
          'Reply-To': 'lunchbag@gmail.com'
        },
        'important': false,
        'track_opens': null,
        'global_merge_vars': [
          {
            'name': "var1",
            'content': "Global Value 1"
          }
        ],
        'tag': [
          'registration-confirmation',
          'template'
        ]
      },
      'ip_pool': "Main Pool"
    }

    sendHttpsPostRequest(
      '/messages/send.json',
      data,
      function(res) {
        console.log('wao');
        console.log(res);
      }
    );
  }
}());