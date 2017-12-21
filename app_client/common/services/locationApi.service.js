/**
 *   @author toto
 *   @createdDate    2017-12-19 02:38 AM
 *   @email  toto6321@qq.com
 */


// service location / api about location
const locationApi = function ($http) {
  this.getLocationById = function (lid) {
    return $http.get(`http://localhost:3333/api/locations/${lid}`)
  }
  this.getAllLocations = function () {
    return $http.get('http://localhost:3333/api/locations')
  }

}
locationApi.$inject = ['$http']

angular
  .module('loc8r')
  .service('locationApi', locationApi)