/**
 *   @author toto
 *   @createdDate    2017-12-20 04:17 PM
 *   @email  toto6321@qq.com
 */

// directive myNavigation
const myNavigation = function () {
  return {
    restrict: 'EA',
    templateUrl: '/common/directives/myNavigation/myNavigation.template.html'
  }
}

angular
  .module('loc8r')
  .directive('myNavigation', myNavigation)