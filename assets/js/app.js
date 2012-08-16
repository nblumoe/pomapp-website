'use strict';

var PomodoroEasyWebsite = angular.module('PomodoroEasyWebsite', []);

function SignUpCtrl($scope, $http) {
  var url = 'http://localhost:3001/users';
  $scope.send = function() {
    var data = { 'user' : { 'email': $scope.email} }
    $http.post(url, data).success( onSuccess ).error( onError );
  };

  function onSuccess( response ) {
    $scope.success = true;
    $scope.error = false;
    $scope.errorMessage = '';
  };
  function onError( response ) {
    $scope.error = true;
    $scope.success = false;
    $scope.errorMessage = response.errors.email[0];
  };
};
SignUpCtrl.$inject = ['$scope', '$http'];

