var app = angular.module('awesomeapple', []);


app.controller('appleCtrl', function ($scope) {
  $scope.formModel = {};

  $scope.onSubmit = function () {
    console.log("Hey i'm submitted!");
    console.log($scope.formModel);

    //$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
    //  success(function (data) {
    //    console.log(":)")
    //  }).error(function(data) {
    //    console.log(":(")
    //  });
  };
})


    // <script>
    //   var app=angular.module("awesomeapple", []);
    //   app.controller("appleCtrl", function($scope) {
    //     $scope.name="Fred";
    //     $scope.onSubmit() = function() {
    //       console.log("Hello world");
    //     };
    //   });
    // </script>
