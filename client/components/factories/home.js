(function(){
  'use strict';

  angular.module('directives-demo')
  .factory('Home', ['$http', function($http){

    function addMov(title){
      return $http.post('/home', {title:title});
    }

    function all(){
      return $http.get('/home');
    }

    function delMov(index){
      return $http.delete('/home', {index:index});
    }

    return {addMov:addMov, all:all, delMov:delMov};
  }]);
})();

