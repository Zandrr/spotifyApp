angular.module('app').config([
  '$stateProvider',
  '$locationProvider',

  function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/home.html'
      })

    $stateProvider
      .state('profile', {
        url: '/profile',
        controller: 'ProfileController as controller',
        templateUrl: '/profile.html'
      })

}]);