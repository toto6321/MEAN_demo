/**
 *   @author toto
 *   @createdDate    2017-12-19 02:38 AM
 *   @email  toto6321@qq.com
 */


// service getLocations
const getAllLocations = function ($http) {
  return $http.get('http://localhost:3333/api/locations')
}

angular
  .module('loc8r')
  .service('getAllLocations', getAllLocations)