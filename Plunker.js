var plunker = angular.module("plunker", ['ngRoute'])

//define a factory that returns hello world
.factory("Greeting", "plunker", function () {

    return "Hello World";
})
.controller("MainController", ["$scope", "Greeting", function ($scope, Greeting) {

    $scope.greeting = Greeting;
}

])