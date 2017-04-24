app.controller('booksController', ['$scope', function ($scope) {
	$scope.books = [
		{
			cover: 'content/images/books.jpg',
			title: 'Hackers & Painters',
			author: 'Paul Graham',
			price: '10',
			year: '2007',
      		likes: 0,
      		dislikes: 0
		},
		{
			cover: 'content/images/books.jpg',
			title: 'The Art Of Intrusion',
			author: 'Kevin D. Mitnick',
			price: '12',
			year: '2005',
      		likes: 0,
      		dislikes: 0
		},
		{
			cover: 'content/images/books.jpg',
			title: 'Waltzing with Bears',
			author: 'Tom DeMarco',
			price: '15',
			year: '2003',
      		likes: 0,
      		dislikes: 0
		},
		{
			cover: 'content/images/books.jpg',
			title: 'Dreaming in Code',
			author: 'Scott Rosenberg',
			price: '17',
			year: '2008',
      		likes: 0,
      		dislikes: 0
		}
	];

	$scope.plusOne = function (index) {
		$scope.books[index].likes += 1;
	};

	$scope.minusOne = function (index) {
		$scope.books[index].dislikes += 1;
	};

}]);