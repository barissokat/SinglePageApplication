var app = angular.module('bookStoreApp', ['ngRoute']);
app.config(function ($routeProvider) {

	$routeProvider.when("/home", {
		controller: "homeController",
		templateUrl: "app/views/home.html"
	});

	$routeProvider.when("/books", {
		controller: "booksController",
		templateUrl: "app/views/books.html"
	});

	$routeProvider.otherwise({ redirectTo: "/home"});

});