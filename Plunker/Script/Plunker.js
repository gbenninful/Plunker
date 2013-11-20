var plunker = angular.module("plunker", ['ngRoute'])

.config(function ($routeProvider) {

    $routeProvider
    .when("/",
    {
        controller: "MainController",
        templateUrl: "Views/view1.html"
    })
    .otherwise({ redirectTo: "/view2" });
})

//define a factory that returns hello world
.factory("Greeting", function () {

    return "Hello World";
})

//a factory that returns an object with with a prop akan with value Akwaaba
//and a function called translate that returns ayekoo
//and a function called nation that returns an object with prop anthem with value 
//God bless our homeland

.factory("Welcome", function () {

    return {
        akan: "Akwaaba",

        translate: function () {

            return "Ayekoo";
        },

        nation: function () {
            return {
                anthem: "God bless our homeland"
            };
        }
    };
})

//A factory called Pledge that returns an object with a prop getGender that takes in gender
//as a parameter and returns "Obarima is awesome" if male else returns "Embaa are awesome. they have nice styles"

.factory("Pledge", function () {

    return {
        getGender: function (gender) {
            if (gender == "male"){

                return "Obarima is awesome";
            }
            return "Embaa are awesome. They have nice styles";
        }
    };
})
.factory("LocalStorage", function () {

    return {
        save: function (key, data) {
            amplify.store(key, data);

        },
        get: function (key) {

           return amplify.store(key);
        }
    };
})

// Create a button called Fetch from local storage and make it work
//RESUME CODING FROM HERE!!!
.controller("MainController", ["$scope", "Greeting", "Welcome","Pledge", "LocalStorage", function ($scope, Greeting, Welcome, Pledge, LocalStorage) {
    LocalStorage.save("name", "Danny boy");
    $scope.greeting = Greeting;
    $scope.welcome = Welcome.akan;
    $scope.response = Welcome.translate();
    $scope.anthem = Welcome.nation().anthem;
    $scope.gender = Pledge.getGender("male");
    $scope.fetchInfo = function () {

        var someName = LocalStorage.get("name");
        $scope.fetch = someName;
        
    }
        
}

]);