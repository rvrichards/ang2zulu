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
    scope: { job: '=' },
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
    }
  };
});
