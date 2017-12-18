/**
 *   @author toto
 *   @createdDate    2017-12-16 11:36 AM
 *   @email  toto6321@qq.com
 */

angular.module('loc8r', ['ngRoute'])

// controller myController
/**
 *
 * @param $scope  locations array obtaining from database will be stored in $scope.data.locations
 * @param getLocations  service getLocations is to get locations from database
 * @param getCurrentLocation  service getCurrentLocation is to user's location from the browser
 */


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

// add config to angular SPA
const config = ($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '/home/home.view.html',
      controller: homeController
    })
    .otherwise({redirectTo: '/'})
}

angular
  .module('loc8r')
  .config(['$routeProvider', config])
/* .controller('myController', )
 .directive('ratingStar', ratingStar)
 .service('getLocations', getLocations)
 .service('getCurrentLocation', getCurrentLocation)
*/