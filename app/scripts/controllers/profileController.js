/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

/**
 * @ngdoc function
 * @name attasApp.controller:ProfilePageController
 * @description
 * # ProfilePageController
 * Controller of the attasApp
 */
angular.module('attasApp')
  .controller('profileController', function ($scope) {
  $scope.menuState = 'closed';
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

  .controller('profileBackgroundController',function($scope){
      $scope.profileHero = {
      background: 'url(images/background.jpg)'
    };
  })
  .controller('tabsController', function($scope){
    $scope.data = {
      selectedIndex: 0
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  })

  .controller('incompleteAttaController', function($scope){
    var imagePath = '';
    $scope.messages = [
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      },
      {
        face : imagePath,
        what: 'Volunteer at pet shelter',
      }
    ];
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
  });


