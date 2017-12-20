/**
 *   @author toto
 *   @createdDate    2017-12-20 04:25 PM
 *   @email  toto6321@qq.com
 */

// directive myPageHeader (my-page-header)
const myPageHeader = function () {
  return {
    scope: {
      header: '=header'
    },
    restrict: 'EA', //Element and Attribute
    templateUrl: '/common/directives/myPageHeader/myPageHeader.template.html'
  }
}

angular
  .module('loc8r')
  .directive('myPageHeader', myPageHeader)