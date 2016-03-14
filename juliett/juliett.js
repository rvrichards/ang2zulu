// juliett.js.

angular.module('juliettApp', [])
.controller('mainCtrl', ["$scope", function ($scope) {
    $scope.isSmall = function () { return $scope.ouch  === "small"; };
}]);
