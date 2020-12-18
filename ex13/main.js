var app = angular.module('app', ['ngResource'])//Ici bien ajouter le module resource
    .controller("mainCtrl", ["$scope", "$resource", function ($scope, $resource) {

        var Tabs = $resource('http://angular-basics-13.localhost/', {id: "@id"});

        function refresh() {
            Tabs.query(function (tabs) {
                $scope.tabs = tabs;
            });
        }
        Tabs.get({id:2}, function (tab) {
            console.log(tab);
        })

        //function refresh rappelle les onglets sur le server
        refresh();
        $scope.active = 0;
        $scope.tab = {};
        $scope.isSubmit = false;

        $scope.setActive = function (index) {
            $scope.active == index;
        }
        $scope.isActive = function (index) {
            return $scope.active = index;
        }
        $scope.removeTab = function (index, id) {
           Tabs.remove({id:id}), function (ret) {
               if(ret){
                   $scope.tab.splice(index,1)
               }
           };
        }
        $scope.addTab = function (isValid) {
            if (isValid) {
                var tab = new Tabs();
                tab.name = $scope.tab.name;
                tab.content = $scope.tab.content;
                tab.$save(function (ret) {
                    if(ret){
                        refresh();
                    }
                });
//quand sauvegarde est terminée on rafraîchit, ret = retour / est boléen
                $scope.tab.name = '';
                $scope.tab.content = '';
                $scope.isSubmit = false;

            } else {
                $scope.isSubmit = true;
            }

        }

    }])



