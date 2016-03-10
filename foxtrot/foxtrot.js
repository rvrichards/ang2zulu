// We need this, even if it appears to do nothing
// Keeps scope.

angular.module('foxApp', [])
.controller('mainCtrl', ["$scope", function ($scope) {
    $scope.isSmall = function () { return $scope.ouch  === "small"; };
}]);
