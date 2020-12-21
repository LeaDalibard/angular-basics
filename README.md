# Angular Basics

## ng-directives

**Create Directives**

=> Using the .directive function.

To invoke the new directive, make an HTML element with the same tag name as the new directive.

When naming a directive, you must use a camel case name, myExampleName, but when invoking it, you must use - separated name, my-example-name.

* **ng-app** : AngularJS application

 * **ng-model** : binds the value of HTML controls to application data + type validation for application data, status (invalid, dirty, touched, error),CSS classes, bind data forms

* **ng-app** : binds application data to the HTML view

* **ng-controller** :  refer to the controller 

* **ng-init** : initializes AngularJS application variables

* **ng-repeatt** : looping


## AngularJS Applications

* **AngularJS Module** : define Application =>  container for the different parts of an application . // in js files

`var app = angular.module('myApp', []);`

* **AngularJS Controller** : control Application => always belonf to a module // in js files

`app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});`

