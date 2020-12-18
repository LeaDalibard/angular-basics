var app = angular.module('app', ['ngRoute'])
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'templates/home.html',
        controller: 'mainCtrl'
    })
        .when("/page/:page_id", {
            templateUrl: 'templates/page.html',
            controller: 'pageCtrl'
        })
        // paramètre => :NomDuParam
        .otherwise({
            redirectTo: '/'
        })
}]);
//selon url routeProvider va charger un template précis
app.controller("mainCtrl", ["$scope", function ($scope) {
    $scope.title = "Home";
}]);

app.controller("pageCtrl", ["$scope","$routeParams", function ($scope,$routeParams) {
    var page_id=$routeParams.page_id ;
    $scope.other_title = "Page n°"+ page_id;
}]);
