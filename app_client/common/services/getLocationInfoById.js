/**
 *   @author toto
 *   @createdDate    2017-12-21 12:14 AM
 *   @email  toto6321@qq.com
 */

// service getLocationInfoById
const getLocationInfoById = function (url, $http) {
  return $http.get(url)
}

getLocationInfoById.$inject = ['$http']

angular.module('loc8c').service('getLocationInfoById', getLocationInfoById)