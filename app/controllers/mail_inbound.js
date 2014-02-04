(function() {

  module.exports.parseEmail = function(body) {
		// Create an array of database operations.
		var reminderOperations = [];
		// 'add', 'reminder', 'start_date', 'frequency'

		// Go through each line.
		var emailLines = body.split('\n+');

    console.log(emailLines);

		// emailLines is an array of lines in the email.
		// Look for 'add', 'remove', 'change' at the beginning of each.
		for(var i = 0; i < emailLines.length; i++) {
			reminderOperations.push(parseLineToOperation(emailLines[i]));
		}
  };

  // Private functions.
  function standardizeDate(d) {
  	// Month: 1, 01
  	// Day: 1, 01
  	// Year: 14, 2014

  	// Output should be moment date.
  	return new_d;
  }

  function standardizeFrequency(f) {
  	// 
  	
  	// Output should be one in the below list.
	  // var frequencies = $scope.frequencies = [
	  // 	'Annually',
	  // 	'Biannually',
	  // 	'Quarterly',
	  // 	'Monthly',
	  // 	'Weekly',
	  // 	'Daily'
	  // ];

  	return new_f;
  }

  function parseLineToOperation(l) {
  	// Argument is a line (String). Return the proper operation, including
  	// the reminder, start date, and frequency.

  	var lineSections = l.split(',');

  	var operation = {};
		operation.action = 'add';
		// operation.reminder = '';
		// operation.start_date = '';
		// operation.frequency = '';

  	// Action.
		if ( ~lineSections[0].indexOf('remove') ) {
			// Remove.
			operation.action = 'remove';
			lineSections[0] = lineSections[0].substring(
				lineSections[0].indexOf('remove') + 6);
		} else if ( ~lineSections[0].indexOf('change') ) {
			// Change.
			operation.action = 'change';
			lineSections[0] = lineSections[0].substring(
				lineSections[0].indexOf('change') + 6);
		} else if ( ~lineSections[0].indexOf('add') ) {
			// Add.
			lineSections[0] = lineSections[0].substring(
				lineSections[0].indexOf('add') + 3);
		};

		// Reminder.
		operation.reminder = lineSections[0].trim();

		// Start_date.
		operation.start_date = standardizeDate(lineSections[1]);

		// Frequency.
		operation.frequency = standardizeFrequency(lineSections[2]);

  	return operation;
  }

}());