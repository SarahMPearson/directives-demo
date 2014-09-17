(function(){
  'use strict';

  angular.module('spClockModule', [])
  .directive('spClock', ['$interval', function($interval){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/sp-clock/sp-clock.html';
    o.scope       = {frequency:'@'};
    o.link        = function(scope, element, attrs){
                      function updateTime(){
                        scope.date = new Date();
                      }
                      var id = $interval(updateTime, scope.frequency * 1);
                      element.on('$destroy', function(){
                        $interval.cancel(id);
                      });
                      updateTime();
                    };

    return o;
  }]);
})();
