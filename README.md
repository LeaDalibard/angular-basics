# Angular Basics

## ng-directives

* **ng-app** : AngularJS application

 * **ng-model** : binds the value of HTML controls to application data

* **ng-app** : binds application data to the HTML view

* **ng-controller** :  refer to the controller 

* **ng-init** : initializes AngularJS application variables


## AngularJS Applications

* **AngularJS Module** : define Application =>  container for the different parts of an application . // in js files

`var app = angular.module('myApp', []);`

* **AngularJS Controller** : control Application => always belonf to a module // in js files

`app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});`

