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
  });
