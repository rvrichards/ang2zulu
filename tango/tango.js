// tangerine.js

var app = angular.module('tango', []);

app.controller('taskController', function($scope) {
  $scope.tasks = ["Turn on Oven", "Bake", "Turn off Oven"];    // Basic array

  $scope.addTask = function () {                 // Function - to add a task
      $scope.errortext = "";
      if (!$scope.addOneTask) {return;}
      if ($scope.tasks.indexOf($scope.addOneTask) == -1) {
        $scope.tasks.push($scope.addOneTask);
      } else {
        $scope.errortext = "That task is already listed.";
      }
  }

  $scope.removeTask = function (x) {             // Function - to remove a task
      $scope.errortext = "";
      $scope.tasks.splice(x, 1);
  }

});

