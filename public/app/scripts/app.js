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
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/inicio', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'inicio'
      })
      .when('/explorar', {
        templateUrl: 'views/explorar.html',
        controller: 'ExplorarCtrl',
        controllerAs: 'explorar'
      })
      .when('/historial', {
        templateUrl: 'views/historial.html',
        controller: 'HistorialCtrl',
        controllerAs: 'historial'
      })
      .when('/ingresar', {
        templateUrl: 'views/ingresar.html',
        controller: 'IngresarCtrl',
        controllerAs: 'ingresar'
      })
      .when('/acerca-de-mozcu', {
        templateUrl: 'views/acerca-de-mozcu.html',
        controller: 'AcercaDeMozcuCtrl',
        controllerAs: 'acercaDeMozcu'
      })
      .when('/terminos-y-condiciones', {
        templateUrl: 'views/terminos-y-condiciones.html',
        controller: 'TerminosYCondicionesCtrl',
        controllerAs: 'terminosYCondiciones'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
