/**
 *   @author toto
 *   @createdDate    2017-12-16 11:36 AM
 *   @email  toto6321@qq.com
 */


angular.module('loc8r', [])

// controller myController
/**
 *
 * @param $scope  locations array obtaining from database will be stored in $scope.data.locations
 * @param getLocations  service getLocations is to get locations from database
 * @param getCurrentLocation  service getCurrentLocation is to user's location from the browser
 */
const myController = function ($scope, getLocations, getCurrentLocation) {
	$scope.message = 'searching'
	$scope.succeedToGetCurrentPosition = function (position) {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude
		console.log({latitude: latitude, longitude: longitude})
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

	$scope.errorHandler = function (error) {
		$scope.$apply(function (error) {
			$scope.message = error
			console.log('error in getting position: ', error)
		})
	}

	$scope.notAllowedToGetPosition = function () {
		$scope.$apply(function () {
				$scope.message = 'Please allow us to get the position'
				console.log('being not allowed to get position')
			}
		)
	}

	getCurrentLocation.getMyPosition($scope.succeedToGetCurrentPosition, $scope.errorHandler, $scope.notAllowedToGetPosition)
}

// directive ratingStar (rating-star)
const ratingStar = () => {
	return {
		scope: {
			thisRating: '=rating'
		},
		templateUrl: '/angularDirectiveHtml/ratingHtml.html'
	}
}

// service getLocations
const getLocations = function ($http) {
	return $http.get('http://localhost:3333/api/locations')
}

// service getCurrentLocation
const getCurrentLocation = function () {
	const getPosition = (success, err, notAllowedToGetPosition) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, err)
		} else {
			// users don't allow the app to get location
			notAllowedToGetPosition()
		}
	}
	return {
		getMyPosition: getPosition
	}
}

angular
	.module('loc8r')
	.controller('myController', myController)
	.directive('ratingStar', ratingStar)
	.service('getLocations', getLocations)
	.service('getCurrentLocation', getCurrentLocation)