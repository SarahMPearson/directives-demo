(function(){
  'use strict';

  angular.module('spWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function current(query){
      return $http.jsonp('http://api.wunderground.com/api/2690d269e6a80bec/conditions/q/' + query + '/.json?callback=JSON_CALLBACK');
    }
    return {current:current};
  }])
  .directive('spWeather', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/sp-weather/sp-weather.html';
    o.scope       = {zip:'@'};
    o.link        = function(scope, element, attrs){
                    };

    o.controller  = ['$scope', 'WeatherApi', function($scope, WeatherApi){

                      $scope.$on('positon', function(event, pos){
                        if($scope.zip){return;}
                        var query = pos.coords.latitude + ',' + pos.coords.longitude;
                        console.log(query);
                        weather(query);
                      });

                      function weather(query){
                        WeatherApi.current($scope.query).then(function(response){
                          $scope.temperature = response.data.current_observation.temp_f;
                          $scope.icon = response.data.current_observation.icon_url;
                        });
                      }
                      if($scope.zip){weather($scope.zip);}
                    }];

    return o;
  }]);
})();
