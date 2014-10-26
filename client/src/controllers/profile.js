angular.module('app').controller('ProfileController', [
  '$scope',
  '$http',
  'User',

  function($scope,$http, User){


  $scope.getArtist = function(name, type){
      $http({
        method: 'GET',
        url: '/v1/search',
        params: {q: name, type: type}
      }).success(function(searchData){
          $scope.search = searchData;
      });
  }
  $scope.types = [{name: 'artist'}, {name: 'album'}, {name: 'track'}]

    User.getUser().then(function(data){
      $scope.username = data.displayName;
      $scope.photo    = data.photos[0];
    });
  }
]);
