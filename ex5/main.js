angular.module("appNomTwo", [])
    .controller("mainCtrl", ["$scope", function ($scope) {
      $scope.sampleCheckBox=true;
      $scope.hasChanged=function(){
          console.log("changé");
      }
    }])



