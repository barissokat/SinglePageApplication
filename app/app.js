var app = angular.module('bookStoreApp', ['ngRoute']);
app.config(['$locationProvider', function($locationProvider) {
  	$locationProvider.hashPrefix('');
}]);
app.config(function ($routeProvider) {

	$routeProvider
	.when("/home", {
		controller: "homeController",
		templateUrl: "app/views/home.html"
	})

	.when("/books", {
		controller: "booksController",
		templateUrl: "app/views/books.html"
	})

	.otherwise({ redirectTo: "/home"});

	// configure html5 to get links working on jsfiddle
  	// $locationProvider.html5Mode(true);
});