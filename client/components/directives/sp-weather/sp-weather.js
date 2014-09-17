(function(){
  'use strict';

  angular.module('spWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function current(zip){
      return $http.jsonp('http://api.wunderground.com/api/2690d269e6a80bec/conditions/q/' + zip + '/.json?callback=JSON_CALLBACK');
    }
    return {current:current};
  }])
  .directive('spWeather', ['$interval', function($interval){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/sp-weather/sp-weather.html';
    o.scope       = {zip:'@'};
    o.link        = function(scope, element, attrs){
                      element.on('$destroy', function(){
                        $interval.cancel(scope.id);
                      });
                     };
    o.controller  = ['$scope', 'WeatherApi', function($scope, WeatherApi){
                      function getCurrent(){
                        WeatherApi.current($scope.zip).then(function(response){
                          $scope.current = response.data.current_observation.feelslike_f;
                          $scope.icon = response.data.current_observation.icon_url;
                        });
                       }

                      $scope.id = $interval(getCurrent, 1000000);

                      getCurrent();
                    }];

    return o;

  }]);
})();
