'use strict';

/**
 * @ngdoc function
 * @name attasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the attasApp
 */
angular.module('attasApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
