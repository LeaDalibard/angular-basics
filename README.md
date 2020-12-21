# Angular Basics

## ng-directives

* **ng-app** : AngularJS application

 * **ng-model** : binds the value of HTML controls to application data

* **ng-app** : binds application data to the HTML view

* **ng-init** : initializes AngularJS application variables


## AngularJS Applications

* **AngularJS Module** : define Application

`var app = angular.module('myApp', []);`

* **AngularJS Controller** : control Application

`app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});`

