/**
 *   @author toto
 *   @createdDate    2017-12-20 10:40 PM
 *   @email  toto6321@qq.com
 */

// renderHtmlLineBreak filter
// convert the '\n' to <br/>
const renderHtmlLineBreak = function () {
  return function (text) {
    return text.replace(/\n/g, '<br/>')
  }
}

angular
  .module('loc8r')
  .filter('renderHtmlLineBreak', renderHtmlLineBreak)