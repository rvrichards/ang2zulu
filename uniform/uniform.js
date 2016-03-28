var app = angular.module('uniformApp', []);


app.controller('uniformCtrl', function ($scope) {
  $scope.formModel = {};

  $scope.onSubmit = function () {
    console.log("Officially submitted!");
    console.log($scope.formModel);
  };

});

