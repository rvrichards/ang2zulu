// foxtrot.js.

angular.module('foxApp', [])
.controller('mainCtrl', ["$scope", function ($scope) {
    $scope.isSmall = function () { return $scope.ouch  === "small"; };
}]);
