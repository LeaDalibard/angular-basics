var app = angular.module("app", ['ngResource']);

app.factory("Tabs", ["$resource", function ($resource) {

    var resource = $resource('http://angular-basics-16.localhost/', {id: "@id"});

    var tabs = {

        active: 0,

        isActive: function (index) {
            return this.active == index;
        },
        setActive: function (index) {
            this.active = index;
        },
        getActive: function (index) {
            return index;
        },
        query:function(callback){
            resource.query(callback);
        },
        addTab:function (name,content,callback) {
            var tab=new resource();
            tab.name=name;
            tab.content=content;
            tab.$save(callback);
            
        },
        removeTab:function (id,callback) {
            resource.remove({id:id}, callback);
        }
    }
    return tabs;
}]);

app.controller("mainCtrl", ["$scope", function ($scope) {
    $scope.tabs = [
        {title: "Home", content: "Home"},
        {title: "Profile", content: "Profile"},
        {title: "Message", content: "Message"},
        {title: "Settings", content: "Settings"},
    ];


    $scope.isSubmit = false;


}])



