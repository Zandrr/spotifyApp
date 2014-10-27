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
      }).then(function(searchData){
        $http({
          method: 'GET',
          url: 'https://api.spotify.com/v1/artists/' + searchData.data.artists.items[0].id + '/related-artists'
        }).then(function(theData){
            (function getRelated(){
              var related = [];
              for (var i = 0; i < 20; i++){
                related.push(theData.data.artists[i]);
              }
              $scope.allRelated = related;
            })()
          });
        });
  }

  $scope.getRelated = function(artistId){
    $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/artists/' + '/related-artists'
    }).then(function(theData){
      $scope.testing = theData;
    });
  }

  $scope.types = [{name: 'artist'}, {name: 'album'}, {name: 'track'}]

    User.getUser().then(function(data){
      $scope.username = data.displayName;
      $scope.photo    = data.photos[0];
    });
  }
]);
