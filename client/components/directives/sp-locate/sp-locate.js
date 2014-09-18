(function(){
  'use strict';

  angular.module('spLocateModule', [])
  .factory('LocationService', ['$q', function($q){

    function locate(){
      var deferred = $q.defer(),
          options  = {enableHighAccuracy: true, timeout: 10000, maximumAge: 0};

      navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, options);

      return deferred.promise;
    }

    return {locate:locate};

  }])
  .directive('spLocate', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/sp-locate/sp-locate.html';
    o.scope       = {};
    o.link        = function(scope, element, attrs){
                    };

    o.controller  = ['$scope', 'LocationService', '$rootScope', function($scope, LocationService, $rootScope){
                      $scope.findMe = function(){
                        LocationService.locate().then(success, error);
                      };

                      function success(pos){
                        $rootScope.$broadcast('position', pos); //first postion is name second position is data want to send
                          console.log(pos);
                      }

                      function error(err){
                        console.log(err);
                      }
                    }];

    return o;
  }]);
})();

