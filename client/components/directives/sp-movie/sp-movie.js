(function(){
  'use strict';

  angular.module('spMovieModule', [])
  .factory('MovieApi', ['$http', function($http){
    function movie(title){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + title + '&page_limit=1&page=1&apikey=6mrk79estnkdkmg8stgejr6k&callback=JSON_CALLBACK');

    }
    return {movie:movie};
  }])
  .directive('spMovie', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/sp-movie/sp-movie.html';
    o.scope       = {title:'@'};
    o.link        = function(scope, element, attrs){
                     };
    o.controller  = ['$scope', 'MovieApi', function($scope, MovieApi){
                      function getMovie(){
                        MovieApi.movie($scope.title).then(function(response){
                          $scope.movie = response.data.movies[0];
                          $scope.icon = response.data.movies[0].posters.detailed.replace('tmb', 'pos');
                        });
                       }

                      getMovie();
                    }];

    return o;

  }]);
})();
