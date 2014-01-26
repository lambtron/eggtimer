'use strict';

eggTimer.controller('mainController', ['$scope', '$http', 
	function($scope, $http)
{
  var user = $scope.user = {
    first_name: '',
    email_address: '',
    zip_code: '',
    reminders: []
  };

}]); 