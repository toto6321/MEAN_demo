/**
 *   @author toto
 *   @createdDate    2017-12-19 01:47 AM
 *   @email  toto6321@qq.com
 */

const homeController = function ($scope, getAllLocations, getCurrentLocation) {
  const vm = this
  vm.pageHeader = {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
  };
  vm.sidebar = {
    content: "Looking for wifi and a seat"
  };

  vm.message = 'searching'
  // to get location list
  getAllLocations
    .then(function (res) {
      vm.message = 'success'
      vm.data = {
        locations: res.data
      }
    }, function (err) {
      vm.$apply(function () {
        vm.message = 'error'
        vm.data = {
          location: []
        }
      })
    })
/*

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
  // to get current location
  getCurrentLocation.getMyPosition(vm.succeedToGetCurrentPosition, vm.errorHandler, vm.notAllowedToGetPosition)
*/


}


angular
  .module('loc8r')
  .controller('homeController', homeController)
