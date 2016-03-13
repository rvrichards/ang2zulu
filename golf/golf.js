// golf.js
angular.module("golf", ["services"])
  .controller("index", ["$scope", "message", function($scope, message) {
    $scope.message = message;
  }]);
