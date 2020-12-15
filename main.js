angular.module("appNom", []) //[] pour les dépendances + bien mettre le nom dans code html
    .controller("mainCtrl", ["$scope", function ($scope) {
        $scope.name = "Sam";
        $scope.users=[
            {name:"Sam", email:"sam@gmail.com"},
            {name:"Julie",email:"julie@gmail.com"},
            {name:"Jim",email:"jim@gmail.com"},
            {name:"Anna",email:"anna@gmail.com"},
            ];
    }])//$scope-> variable modifiable dans controller
    .controller("childCtrl", ["$scope", function ($scope) {
    }])
    .controller("grantCtrl", ["$scope", function ($scope) {
        $scope.name = "Anna";
    }])
    .controller("userCtrl", ["$scope", function ($scope) {
        $scope.user=
            {name:"Sam",age:18,email:"sam@gmail.com"};
    }]);


