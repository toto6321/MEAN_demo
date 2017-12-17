/**
 *   @author toto
 *   @createdDate    2017-12-16 11:36 AM
 *   @email  toto6321@qq.com
 */


angular.module('loc8r', [])
const myController = function ($scope, getLocations) {
	$scope.message = 'searching'
	getLocations
		.then(function (res) {
			$scope.data = {
				locations: res.data
			}
			$scope.message = 'success'
		}, function (err) {
			$scope.$apply(function () {
				$scope.message = 'error'
				$scope.data = {
					location: []
				}
			})
		})
}

const ratingStar = () => {
	return {
		scope: {
			thisRating: '=rating'
		},
		templateUrl: '/angularDirectiveHtml/ratingHtml.html'
	}
}

const getLocations = function ($http) {
	return $http.get('http://localhost:3333/api/locations')
}

angular
	.module('loc8r')
	.controller('myController', myController)
	.directive('ratingStar', ratingStar)
	.service('getLocations', getLocations)