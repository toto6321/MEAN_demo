/**
 *   @author toto
 *   @createdDate    2017-12-16 11:36 AM
 *   @email  toto6321@qq.com
 */

angular.module('loc8r', ['ngRoute'])

// add config to angular SPA
const config = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/home/home.view.html',
      controller: homeController,
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'})
  $locationProvider.html5Mode(true)
}

// config.$inject = ['$routeProvider']

angular
  .module('loc8r')
  .config(['$routeProvider', '$locationProvider', config])