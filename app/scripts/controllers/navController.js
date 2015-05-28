/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

angular.module('attasApp')

  .controller('NavCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
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

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug('toggle ' + navID + ' is done');
              });
          },300);
      return debounceFn;
    }
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
  })

  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    };
  })

  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug('close RIGHT is done');
        });
    };
  });
