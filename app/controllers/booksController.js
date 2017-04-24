app.controller('booksController', ['$scope', function ($scope) {
	$scope.books = [
		{
			image: 'img',
			title: 'Hackers & Painters',
			author: 'Paul Graham',
			price: '10',
			year: '2007'
		},
		{
			image: 'img',
			title: 'The Art Of Intrusion',
			author: 'Kevin D. Mitnick',
			price: '12',
			year: '2005'
		},
		{
			image: 'img',
			title: 'Waltzing with Bears',
			author: 'Tom DeMarco',
			price: '15',
			year: '2003'
		},
		{
			image: 'img',
			title: 'Dreaming in Code',
			author: 'Scott Rosenberg',
			price: '17',
			year: '2008'
		}
	];
}]);