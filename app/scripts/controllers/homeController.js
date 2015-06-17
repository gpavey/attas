'use strict';

/**
 * @ngdoc function
 * @name attasApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the attasApp
 */
angular.module('attasApp')

  .controller('homeCtrl', function($scope){
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

  .controller('similarAttaCtrl', function($scope){
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
  });
