(function(){

	var app=angular.module("mainApp",['ngRouter']);

	app.config(function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl:"main.html"
	     })
	.when('/newins',{
		templateUrl: "View.html"
	     })
	.when('/modify',{
		templateUrl:"Modify.html"
	     })
	.when('/existing',{
		templateUrl: "Detail.html"
	});
	});
});


