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
    'ngMaterial',
    'slick'
  ])
  .controller('AppCtrl', function() {
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/profile');
    $stateProvider
      // .state('home', {
      //   url         : '/home',
      //   templateUrl : '../views/home.html',
      //   controller  : 'homeController'
      // })
      .state('profile', {
        url           : '/profile',
        templateUrl   : '../views/profile.html',
        controller    : 'profileController'
      });
  });
