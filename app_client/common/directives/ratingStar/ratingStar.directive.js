/**
 *   @author toto
 *   @createdDate    2017-12-19 03:11 AM
 *   @email  toto6321@qq.com
 */

// directive ratingStar (rating-star)
const ratingStar = function () {
  return {
    // restrict: 'EA', //Element and Attribute
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '/common/directives/ratingStar/ratingStar.template.html'
  }
}

angular
  .module('loc8r')
  .directive('ratingStar', ratingStar)