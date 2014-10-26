angular.module('app').service('User', [
  '$http',
  '$q',

  function($http, $q){
    this.getUser = function(){
      deferred = $q.defer();

      $http({
        method: 'GET',
        url: '/v1/me'
      }).then(function(user){
        deferred.resolve(user.data);
      });
      return deferred.promise;
    }
  }
]);


