'use strict';

/**
 * @ngdoc function
 * @name angularMozcuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMozcuApp
 */


angular.module('angularMozcuApp')
  .controller('AboutCtrl', function () {
    $scope.registroJugador = function(){
      if($scope.formulario.$valid){
        $scope.registroOk = true;
      }
    }
  });
