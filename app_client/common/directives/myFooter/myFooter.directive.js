/**
 *   @author toto
 *   @createdDate    2017-12-20 03:56 PM
 *   @email  toto6321@qq.com
 */
// directive myFooter
const myFooter = function () {
  return {
    restrict: 'EA',
    templateUrl: '/common/directives/myFooter/myFooter.template.html'
  }
}

angular
  .module('loc8r')
  .directive('myFooter', myFooter)