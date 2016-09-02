'use strict';

/**
 * @ngdoc overview
 * @name angularMozcuApp
 * @description
 * # angularMozcuApp
 *
 * Main module of the application.
 */
angular
  .module('angularMozcuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'FormulariofutbolCtrl',
        controllerAs: 'formularioFutbol'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: '',
        controllerAs: ''
      })
      .when('/historial', {
        templateUrl: 'views/historial.html',
        controller: '',
        controllerAs: ''
      })
      .when('/explorar', {
        templateUrl: 'views/explorar.html',
        controller: '',
        controllerAs: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  });
