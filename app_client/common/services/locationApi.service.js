/**
 *   @author toto
 *   @createdDate    2017-12-19 02:38 AM
 *   @email  toto6321@qq.com
 */


// service getLocations
const locationApi = function ($http) {
  const getLocationById = function (lid) {
    return $http.get(`http://localhost:3333/api/locations/${lid}`)
  }
  const getAllLocations = function () {
    return $http.get('http://localhost:3333/api/locations')
  }
  return {
    getLocationById: getLocationById,
    getAllLocations: getAllLocations
  }
}
locationApi.$inject = ['$http']

angular
  .module('loc8r')
  .service('locationApi', locationApi)