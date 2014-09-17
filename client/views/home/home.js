(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name: 'Bob', age:25}, {name:'Sally', age:25}];
    $scope.symbols =['AAPL', 'GOOG', 'AMZN'];
  }]);
})();

