angular.module("appNomTwo", [])
    .controller("mainCtrl", ["$scope", function ($scope) {
        $scope.teams = [
            {name: "OL", pts: 54, j: 26, g: 16, n: 6},
            {name: "PSG", pts: 52, j: 26, g: 14, n: 10},
            {name: "OM", pts: 50, j: 26, g: 15, n: 5},
            {name: "Monaco", pts: 43, j: 25, g: 12, n: 7},
            {name: "Saint Etienne", pts: 42, j: 26, g: 11, n: 9},
            {name: "Bordeaux", pts: 41, j: 26, g: 11, n: 7},
            {name: "Montpellier", pts: 39, j: 25, g: 11, n: 8},
            {name: "Guinguamp", pts: 35, j: 26, g: 1, n: 13}
        ];
        $scope.order = {
            pts: true,
            j: true,
            g: true,
            n: true
        };

        $scope.nbToDisplay=3;
        $scope.currentPage=0;

        $scope.pages=new Array(Math.ceil($scope.teams.length/$scope.nbToDisplay));

        $scope.arrow=function(col){
            return $scope.order[col]? ">":"<";
        }
        $scope.onSort=function (col) {
            $scope.sort=col;
            $scope.order[col]=!$scope.order[col];
        }

        $scope.onPage=function(index){
            $scope.currentPage=index;
        }

        $scope.sliceTeam=function(teams){
            var begin=$scope.currentPage* $scope.nbToDisplay;
            return $scope.teams.slice(begin,begin+$scope.nbToDisplay);
        }

    }])



