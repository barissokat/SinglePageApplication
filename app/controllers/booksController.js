app.controller('booksController', ['$scope', 'bookService', function ($scope, bookService) {
	bookService.getResponders.then(function (data) {
		$scope.booksList = data;
	});
}]);