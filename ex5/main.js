angular.module('appNomTwo', [])
    .controller('mainCtrl', ["$scope", function ($scope) {

        $scope.sampleCheckBox = true

        $scope.hasChanged = function () {
            console.log("changé");
        }
        $scope.users=[
            {name:"Sam", email:"sam@gmail.com"},
            {name:"Julie", email:"juliesam@gmail.com"},
            {name:"Jim", email:"jim@gmail.com"},
            {name:"Anna", email:"anna@gmail.com"},
        ];

    }])



