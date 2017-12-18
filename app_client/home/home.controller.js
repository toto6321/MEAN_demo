/**
 *   @author toto
 *   @createdDate    2017-12-19 01:47 AM
 *   @email  toto6321@qq.com
 */

const homeController = ($scope) => {
  $scope.pageHeader = {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
  };
  $scope.sidebar = {
    content: "Looking for wifi and a seat etc etc"
  };

}

angular
  .module('loc8r')
  .controller('homeController', homeController)


/*

const homeController = function ($scope, getLocations, getCurrentLocation) {
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
      $scope.message = 'error'
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
*/
