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
    'slick',
    'ng-mfb'
  ])
.controller('MainCtrl', function($scope) {
  $scope.opacityState = 'closed';
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
     .state('invite', {
       url         : '/invite',
       templateUrl : '../views/invite.html',
       controller  : 'inviteController'
     })
     .state('complete', {
       url         : '/complete',
       templateUrl : '../views/complete.html',
       controller  : 'completeController'
     })
     .state('create', {
       url         : '/create',
       templateUrl : '../views/create.html',
       controller  : 'createController'
     })
    .state('profile', {
      url           : '/profile',
      templateUrl   : '../views/profile.html',
      controller    : 'profileController'
    });
});
