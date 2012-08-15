'use strict';

var PomodoroEasyWebsite = angular.module('PomodoroEasyWebsite', []);

function SignUpCtrl($scope, $http) {
  var url = 'http://localhost:3001/users';
  $scope.send = function() {
    var data = { 'user' : { 'email': 'abcdedf@gmx.de'} };
    $http.post(url, data).success( onSuccess ).error( onError );
  };

  function onSuccess( response ) {
    console.log( response );
  };
  function onError( respsonse ) {
    console.log( response );
  };
};
SignUpCtrl.$inject = ['$scope', '$http'];

