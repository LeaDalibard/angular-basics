var app = angular.module('app', []);

app.provider("userProvider", [function () {
    var user = {
        username: function (str) {
            return str + 's';
        }
    }
    this.$get = function () {
        return user;
    }
}]);

//1. nom du service 2.tableau d'éléments de dépendances

app.factory("userFactory", [function () {
    var user = {};

    user.username = function (str) {
        return str + "s";
    };
    return user;
}]);

app.service("userService",[function(){
    this.username=function(str) {
        return str + "s";
    };
}]);

app.controller('ProviderCtrl', ["$scope", "userProvider", function ($scope, userProvider) {
    $scope.name = userProvider.username("Provider");
}]);
app.controller('FactoryCtrl', ["$scope", "userFactory", function ($scope, userFactory) {
    $scope.name = userFactory.username("Factorie");
}]);
app.controller('ServiceCtrl', ["$scope", "userService","UserValue","VERSION", function ($scope,userService,UserValue,VERSION) {
    $scope.name = userService.username("Service");
    console.log(UserValue);
    UserValue="member";
    console.log(UserValue);
    console.log(VERSION);
}]);

app.value("UserValue","admin");
app.constant("VERSION","1.0");
//id que value mais ne change pas

//1. nom 2. la valeur donnée