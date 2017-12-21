/**
 *   @author toto
 *   @createdDate    2017-12-20 11:21 PM
 *   @email  toto6321@qq.com
 */

// controller for location-info
const locationInfoController = function ($scope, $routeParams, $uibModal, locationApi, reviewApi) {
  const vm = this
  const lid = $routeParams.lid
  vm.pageHeader = {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
  }
  // popup a form to add a review
  vm.addReview = function () {
    alert('add a review')
  }

  // to load location info
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

  // to load reviews
  reviewApi.getReviewsByLocationId(lid)
    .then(function (res) {
      vm.reviews = res.data
    })
    .catch(function (err) {
      console.log(err)
      $scope.$apply(function () {
        vm.message = 'failed to get reviews'
        vm.reviews = []
      })
    })

}
locationInfoController.$inject = ['$scope', '$routeParams', '$uibModal', 'locationApi', 'reviewApi']

angular
  .module('loc8r')
  .controller('locationInfoController', locationInfoController)