angular.module("root", ["services"])
  .controller("index", ["$scope", "message", function($scope, message) {
    $scope.message = message;
  }]);
