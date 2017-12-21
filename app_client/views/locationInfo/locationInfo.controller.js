/**
 *   @author toto
 *   @createdDate    2017-12-20 11:21 PM
 *   @email  toto6321@qq.com
 */

// controller for location-info
const locationInfoController = function ($scope, $routeParams, locationApi) {
  const vm = this
  const lid = $routeParams.lid
  vm.pageHeader = {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
  }
  locationApi.getLocationById(lid)
    .then(function (res) {
      console.log(res.data)
      vm.data = {
        location: res.data
      }
    })
    .catch(function (err) {
      console.log(err)
      $scope.$apply(function () {
        vm.message = 'error'
        vm.data = {
          location: {}
        }
      })

    })
}
locationInfoController.$inject = ['$scope', '$routeParams', 'locationApi']

angular
  .module('loc8r')
  .controller('locationInfoController', locationInfoController)