var app = angular.module('app', [])

app.directive("userWidget", [function () {
    return {
        templateUrl: "templates/user-directive.html",
        restrict: 'CA',
        scope: {
            title: '@',
            obj: '=',
            aFunction: '&',
        },
        // Va créer automatiquement scope.title à partir de attribut, @ for string, = for object, & for function
        link: function ($scope, $element, $attr) {
            $scope.aFunction();
            $element.addClass('testClasse');
            console.log($attr.title);
            //$element query qui permet de rajouter direct sur l'élément dans cet example classe mais regarder totalité sur angularjs.org
            //$attr, récupére le noms des attributs qui ont été utilisés
        }
    }
}]);

//restrict => A seulement utilisable comme attribut pas comme élément, E comme un élement, C comme une classe
app.controller("MainCtrl", ["$scope", function ($scope,) {
    $scope.myFunction = function () {
        console.log('test');
    }
}]);
