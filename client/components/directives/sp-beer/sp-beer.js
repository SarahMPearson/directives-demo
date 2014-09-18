(function(){
  'use strict';

  angular.module('spBeerModule', [])
  .factory('BeerApi', ['$http', function($http){
    function brand(beer){
      return $http.get('http://api.brewerydb.com/v2/search/?key=92230036d307c565c294e1e32ce932f7&q=' + beer + '&type=beer');

    }
    return {brand:brand};
  }])
  .directive('spBeer', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/sp-beer/sp-beer.html';
    o.scope       = {beer:'@'};
    o.link        = function(scope, element, attrs){
                     };
    o.controller  = ['$scope', 'BeerApi', function($scope, BeerApi){
                      function getBeer(){
                        BeerApi.brand($scope.beer).then(function(response){
                          debugger;
                          //$scope.movie = response.data.movies[0];
                          //$scope.icon = response.data.movies[0].posters.detailed.replace('tmb', 'pos');
                        });
                       }

                      getBeer();
                    }];

    return o;

  }]);
})();
