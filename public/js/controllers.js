'use strict';

eggTimer.controller('mainController', ['$scope', '$http', 
	function($scope, $http)
{
  var user = $scope.user = {
    first_name: '',
    email_address: '',
    zip_code: '',
    reminders: [
    	{
    		reminder: 'General health check up',
    		start_date: '01/01/14',
    		frequency: 'Annually'
    	},
    	{
    		reminder: 'Dentist cleaning',
    		start_date: '01/01/14',
    		frequency: 'Biannually'
    	},
    	{
    		reminder: 'Rent',
    		start_date: '01/01/14',
    		frequency: 'Monthly'
    	}
    ]
  };

  var frequencies = $scope.frequencies = [
  	'Annually',
  	'Biannually',
  	'Quarterly',
  	'Monthly',
  	'Weekly',
  	'Daily'
  ];

  var addReminder = $scope.addReminder = function() {
  	var obj = {};
  	obj.reminder = 'New reminder';
  	obj.start_date = '01/01/14';
  	obj.frequency = 'Annually';
  	user.reminders.push(obj);
  };

  var removeReminder = $scope.removeReminder = function(index) {
  	user.reminders.splice(index,1);
  };

  var submit = $scope.submit = function() {
  	// Submit user to server.
  	$http.post('/api/user', user)
		.success(function(data) {
			console.log('Success: ' + data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
  };

}]); 