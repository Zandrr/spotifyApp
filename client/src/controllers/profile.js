angular.module('app').controller('ProfileController', [
  '$scope',
  '$http',
  'User',

  function($scope,$http, User){

   User.getUser().then(function(data){
      $scope.alls = data;
      $scope.username = data.displayName;
      $scope.photo    = data.photos[0];
    });
  }
]);
