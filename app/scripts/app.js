'use strict';

/**
 * @ngdoc overview
 * @name attasApp
 * @description
 * # attasApp
 *
 * Main module of the application.
 */
angular
  .module('attasApp', [
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .controller('AppCtrl', function($scope) {
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url         : '/home',
        templateUrl : '../views/home.html',
        controller  : 'homeController'
      })
      .state('mcf', {
        url           : '/mcf',
        templateUrl   : '../views/mcf.html',
        controller    : 'ProjectController'
      });
  });
