app.directive('bookInfo', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'app/directives/bookInfo.html'
	};
});