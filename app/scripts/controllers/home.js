'use strict';

/**
 * @ngdoc function
 * @name attasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the attasApp
 */
angular.module('attasApp')
  .controller('homeController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
