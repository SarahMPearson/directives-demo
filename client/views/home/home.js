(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name: 'Bob', age:25}, {name:'Sally', age:25}];
    $scope.symbols =['AAPL', 'GOOG', 'AMZN'];
    $scope.titles = ['Jaws'];

    $scope.delMovie = function(index){
      Home.delMov(index).then(function(response){
        $scope.titles.splice(index, 1);
      });
    };

    $scope.addMovie = function(){
      Home.addMov($scope.title).then(function(response){
        $scope.titles.push($scope.title);
        $scope.title = null;
      });
    };
  }]);
})();

