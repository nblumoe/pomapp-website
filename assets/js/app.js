'use strict';

var PomodoroEasyWebsite = angular.module('PomodoroEasyWebsite', []);

function SignUpCtrl($scope, $http, config) {
  var url = config.backend.url;
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
SignUpCtrl.$inject = ['$scope', '$http', 'Config'];


PomodoroEasyWebsite.factory('Config', function() {
    var config = {};

    // config for client on localhost
    config.backend = { url : 'http://localhost:3001/users' };
    // overwrite config for hosted client
    if (location.host != 'localhost:4000') {
      config.backend = { url : 'https://pomodoroeasy.herokuapp.com:443/users' };
    };
    return config
  });
