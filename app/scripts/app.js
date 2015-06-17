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
.controller('mfbController',function($scope){
  $scope.buttons = [{
      label: 'invite a friend',
      icon: 'ion-paper-airplane',
      state: 'invite'
    },{
      label: 'Complete an Atta',
      icon: 'ion-checkmark',
      state: 'complete'
    },{
      label: 'Create an Atta',
      icon: 'ion-edit',
      state: 'create'
  }];
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider

     .state('invite', {
       url          : '/invite',
       templateUrl  : '../views/invite.html',
       controller   : 'inviteController'
     })
     .state('complete', {
       url          : '/complete',
       templateUrl  : '../views/complete.html',
       controller   : 'completeController'
     })
     .state('create', {
       url          : '/create',
       templateUrl  : '../views/create.html',
       controller   : 'createController'
     })
    .state('edit_profile', {
      url           : '/edit_profile',
      templateUrl   : '/..views/edit_profile.html',
      controller    : 'editProfileController'
    })
    .state('profile', {
      url           : '/profile',
      templateUrl   : '../views/profile.html',
      controller    : 'profileController'
    })
    .state('/',{
      url           : '/',
      templateUrl   : '../views/home.html',
      // controller    : 'homeCtrl'
    });
});
