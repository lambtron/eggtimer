'use strict';

$(document).ready(function() {	
	$(".dropdown-menu li a").click(function(){
		console.log(this);
		var a = $(this).closest("form-group").find(".selection");
		console.log(a);
	  $(this).closest(".form-group").find(".selection").text($(this).text());
	  $(this).closest(".form-group").find(".selection").val($(this).text());
	});
});