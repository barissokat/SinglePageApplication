app.controller('booksController', ['$scope', 'bookService', function ($scope, bookService) {
	bookService.getResponders.then(function (data) {
		$scope.booksList = data;
	});

	$scope.plusOne = function (index) {
		$scope.books[index].likes += 1;
	};

	$scope.minusOne = function (index) {
		$scope.books[index].dislikes += 1;
	};

}]);