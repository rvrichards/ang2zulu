// tangerine.js

angular.module('tangerine', []);

angular.module('tangerine').controller('mainController', function($scope) {
  $scope.job1 = {
    name: 'Become Millionaire',
    tasks: [ 'create idea', 'collect friends', '???', 'PROFIT!!']
  }
  $scope.job2 = {
    name: 'Bake cake',
    tasks: [ 'Buy flour', 'Turn on oven', 'Mix it together',
            'Place in oven', 'Remove from oven', 'Eat']
  }
});

angular.module('tangerine').directive('taskList', function() {
  return {
    templateUrl: "taskList.html",
    restrict: "E",
    scope: {
      job: '=',
      initialValue: '@collapsed'
    },
    controller: function($scope) {
      $scope.collapsed = ($scope.initialValue === 'true');
      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
      $scope.removeTask = function(task) {
        var idx = $scope.job.tasks.indexOf(task);
        if(idx > -1) {
          $scope.job.tasks.splice(idx, 1);
        }
      }
    }
  };
});

angular.module('tangerine').directive('removeTask', function() {
  return {
    restrict: 'E',
    templateUrl: 'removeTask.html',
    scope: {
      notifyParent: '&method'
    },
    controller: function($scope) {
      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
      }
      $scope.cancelRemove = function() {
        $scope.removing = false;
      }
      $scope.confirmRemove = function() {
        $scope.notifyParent();
      }

    }
  }
})
