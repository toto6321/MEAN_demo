/**
 *   @author toto
 *   @createdDate    2017-12-21 03:46 PM
 *   @email  toto6321@qq.com
 */
// service reviewApi / api about review
const reviewApi = function ($http) {
  this.getAllReviews = function () {
    return $http.get('/api/reviews')
  }
  this.getReviewById = function (rid) {
    return $http.get(`/api/reviewss/${rid}`)
  }
  this.getReviewsByLocationId = function (lid) {
    return $http.get(`/api/locations/${lid}/reviews`)
  }
}
reviewApi.$inject = ['$http']
angular.module('loc8r').service('reviewApi', reviewApi)