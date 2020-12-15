angular.module("appNom", []) //[] pour les dépendances + bien mettre le nom dans code html
    .controller("mainCtrl", ["$scope", function ($scope) {
        $scope.name = "Sam";
        $scope.users=[
            {name:"Sam"},
            {name:"Julie"},
            {name:"Jim"},
            {name:"Anna"},
            ];
    }])//$scope-> variable modifiable dans controller
    .controller("childCtrl", ["$scope", function ($scope) {
    }])
    .controller("grantCtrl", ["$scope", function ($scope) {
        $scope.name = "Anna";
    }]);