// Code goes here

angular.module('delta', []);

angular.module('delta').controller('mainCtrl', function($scope) {});

angular.module('delta').directive('spacebarControl', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      $('body').on('keypress', function(evt) {
        var vidEl = el[0];
        if(evt.keyCode === 32) {
          if(vidEl.paused) {
            vidEl.play();
          } else {
            vidEl.pause();
          }
        }
      })
    }
  }
})
