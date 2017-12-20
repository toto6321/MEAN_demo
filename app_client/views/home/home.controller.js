/**
 *   @author toto
 *   @createdDate    2017-12-19 01:47 AM
 *   @email  toto6321@qq.com
 */

// controller myController
/**
 *
 * @param $scope  locations array obtaining from database will be stored in $scope.vm.data.locations
 * @param getLocations  service getLocations is to get locations from database
 * @param getCurrentLocation  service getCurrentLocation is to user's location from the browser
 */
const homeController = function ($scope, locationApi, getCurrentLocation) {
  const vm = this
  vm.pageHeader = {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
  };
  vm.sidebar = {
    content: "Looking for wifi and a seat"
  };


  // to get location list
  vm.message = 'searching'
  locationApi
    .getAllLocations()
    .then(function (res) {
      vm.message = 'success'
      vm.data = {
        locations: res.data
      }
    })
    .catch(function (err) {
      console.log(err)
      vm.$apply(function () {
        vm.message = 'error'
        vm.data = {
          location: []
        }
      })
    })

  // to get current location
  vm.message1 = 'locating'
  vm.succeedToGetCurrentPosition = function (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    vm.message1 = "succeed to get location"
    console.log({latitude: latitude, longitude: longitude})
  }

  vm.errorHandler = function (error) {
    $scope.$apply(function (error) {
      vm.message1 = 'error'
      console.log('error in getting position: ', error)
    })
  }

  vm.notAllowedToGetPosition = function () {
    $scope.$apply(function () {
        vm.message1 = 'Please allow us to get the position'
        console.log('being not allowed to get position')
      }
    )
  }

  getCurrentLocation.getMyPosition(vm.succeedToGetCurrentPosition, vm.errorHandler, vm.notAllowedToGetPosition)

}
homeController.$inject = ['$scope', 'locationApi', 'getCurrentLocation']

angular
  .module('loc8r')
  .controller('homeController', homeController)
