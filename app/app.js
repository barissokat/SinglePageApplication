var app = angular.module('bookStoreApp', ['ngRoute']);
app.config(function ($routeProvider) {

	$routeProvider.when("/books", {
		controller: "booksController",
		templateUrl: "app/views/books.html"
	});

	$routeProvider.otherwise({ redirectTo: "/books"});

});