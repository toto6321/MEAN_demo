/**
 *   @author toto
 *   @createdDate    2017-12-20 07:37 PM
 *   @email  toto6321@qq.com
 */

const aboutController = function () {
  const vm = this
  vm.data = {
    title: 'about Loc8r',
    content: 'Loc8r was created to help people find places to sit down and\n' +
    'get a bit of work done.'
  }
}

angular
  .module('loc8r')
  .controller('aboutController', aboutController)