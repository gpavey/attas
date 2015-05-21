/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

/**
 * @ngdoc function
 * @name attasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the attasApp
 */
angular.module('attasApp')
  .controller('profileController', function ($scope) {
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
    var imagePath = 'https://material.angularjs.org/img/list/60.jpeg';
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
  });


