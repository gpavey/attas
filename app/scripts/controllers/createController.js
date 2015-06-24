/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

/**
 * @ngdoc function
 * @name attasApp.controller:createController
 * @description
 * # createController
 * Controller of the attasApp
 */
angular.module('attasApp')

  .controller('createCtrl', function ($scope) {
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
  });