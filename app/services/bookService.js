app.factory('bookService', ['$http', function ($http) {
	return{
		getResponders: (function (response) {
			return $http.get('app/data/books.json').then(function (response) {
				return response.data;
			});
		})()
	};
}]);