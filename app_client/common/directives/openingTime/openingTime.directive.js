/**
 *   @author toto
 *   @createdDate    2017-12-21 03:07 PM
 *   @email  toto6321@qq.com
 */

const openingTime = function () {
  return {
    restrict: 'EA',
    scope: {
      day: '=day'
    },
    templateUrl: '/common/directives/openingTime/openingTime.template.html'
  }
}

angular.module('loc8r').directive('openingTime', openingTime)