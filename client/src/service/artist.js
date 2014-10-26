angular.module('app').service('Artist', [
  '$http',
  '$q',

  function($http, $q){
    this.getArist = function(name){
      deferred = $q.defer();

      $http({
        method: 'GET',
        url: 'https://api.spotify.com/v1/search?' + name
      }).then(function(artist){
        deferred.resolve(artist.data);
      })
      return deferred.promise;

    }
  }
]);