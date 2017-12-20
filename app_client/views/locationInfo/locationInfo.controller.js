/**
 *   @author toto
 *   @createdDate    2017-12-20 11:21 PM
 *   @email  toto6321@qq.com
 */

// controller for location-info
const locationInfoController = function ($scope, $routeParams, getLocationInfoById) {
  const vm = this
  vm.data = {
    content: $routeParams.lid
  }
  vm.pageHeader = {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
  }
  getLocationInfoById
    .then(function (res) {
      vm.data = {
        location: res.data
      }
    }, function (err) {
      $scope.$apply(function () {
        vm.message = 'error'
        vm.data = {
          location: {}
        }
      })

    })
}
locationInfoController.$inject = ['$routeParams']

angular
  .module('loc8r')
  .controller('locationInfoController', locationInfoController)