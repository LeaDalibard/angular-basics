angular.module("appNomTwo", [])
    .controller("mainCtrl", ["$scope", function ($scope) {
        $scope.value = 1337;
        $scope.text = "Bonjour";
        $scope.date = "1608125245000";
        //rajouter 3 zéros au timestamp pour que soit en micro-secondes
        $scope.users=[
            {name:"Sam", email:"sam@gmail.com"},
            {name:"Julie",email:"juliesam@gmail.com"},
            {name:"Jim",email:"jim@gmail.com"},
            {name:"Anna",email:"anna@gmail.com"},
        ];

        $scope.filterValue={name:"Sam"}
    }])



