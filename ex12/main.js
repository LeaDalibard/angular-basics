(angular.module("appNomTwo", [])
        .controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {
            $scope.res = {};
            $http.get('config.json')
                .then(function (res) {
                    $scope.res.config = res;
                    return $http.get('items.json'); //Promise
                })
                .then(function (res) {
                    $scope.res.items = res;
                    return $http.get('users.json');
                })
                .then(function (res) {
                    $scope.res.users = res;
                }, function (err) {
                });

            $http({
                method: "POST",
                url: "/form.php",
                headers: {
                    "Content-Type": undefined
                },
                data: {
                    user: 'Sam'
                },
            }).success(function () {

            }).error(function () {

            })

        }])


)

