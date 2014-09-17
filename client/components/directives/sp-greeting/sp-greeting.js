(function(){
  'use strict';

  angular.module('spGreetingModule', [])
  .directive('spGreeting', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/sp-greeting/sp-greeting.html';
    o.scope       = {name:'@', age:'@'};

    return o;
  }]);
})();
