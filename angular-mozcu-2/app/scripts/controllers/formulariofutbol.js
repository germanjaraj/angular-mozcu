'use strict';

/**
 * @ngdoc function
 * @name angularMozcuApp.controller:FormulariofutbolCtrl
 * @description
 * # FormulariofutbolCtrl
 * Controller of the angularMozcuApp
 */
angular.module('angularMozcuApp')
  .controller('FormulariofutbolCtrl', function () {
    $scope.registroJugador = function(){
      if($scope.formulario.$valid){
        $scope.registroOk = true;
      }
    }
  });
