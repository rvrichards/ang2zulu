// foxtrot.js

var app = angular.module('mikeApp', []);

app.controller('foxtrotCtrl', function($scope) {
    $scope.libations = [
      {name: 'Mango Surprise', weight: 1234, colour: 'dark yellow'},
      {name: 'Apple Juice', weight: 454, colour: 'yellow'},
      {name: 'Aloe Vera Drink', weight: 454, colour: 'pale white'},
      {name: 'Carrot Shake', weight: 1, colour: 'orange'},
      {name: 'Banana Juice', weight: 666, colour: 'light yellow'},
      {name: 'Durian Beverage', weight: 1, colour: 'white'}
    ];
    $scope.pickMe = function(x) { $scope.columnToOrderOn = x; };
});

