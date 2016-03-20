// foxtrot.js

var app = angular.module('foxtrot', []);

app.controller('foxtrotCtrl', function($scope) {
    $scope.alphabet = [
        'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'India', 'Juliett', 'Kilo', 'Lima'
    ];
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

// Our custom filter will capitalize all vowels, and lowercase everything else.
app.filter('customFormat', function() {
    return function(x) {
        var i, c, txt = "",vowel="aeiouy";
        x = x.toLowerCase().split("")
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (vowel.indexOf(c) > -1) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});



