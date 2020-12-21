var app = angular.module('app', []);

app.config(["userProvider",
    function (userProvider) {
    userProvider.options= {
        name:"Annie"
    };
}
]);

//angular prend nom du Provider et rajoute 'Provider'

app.provider("user", [function () {

    this.options = {};

    var user = {
        getName: function () {
            return this.name;
        },
        setName: function (str) {
            this.name = str;
        }
    }
    this.$get = function () {
        user.name = this.options.name;
        //Va prendre par défaut le nom spécifié dans les options si undefined
        return user;
    };
}])
;


app.controller('ProviderCtrl', ["$scope", "user", function ($scope, user) {
    $scope.name = user.getName();
}]);
