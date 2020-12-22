# Angular Basics

## ng-directives

### Create Directives

=> Using the .directive function.

To invoke the new directive, make an HTML element with the same tag name as the new directive.

When naming a directive, you must use a camel case name : myExampleName,
but when invoking it, you must use - separated name : my-example-name.



* **ng-app** : AngularJS application

* **ng-model** : binds data from the model to the view + type validation for application data, status (invalid, dirty, touched, error),CSS classes, bind data forms

* **ng-app** : binds application data to the HTML view

* **ng-controller** :  refer to the controller 

* **ng-init** : initializes AngularJS application variables

* **ng-repeat** : looping

* **ng-show** : elemeent displayed only if the expression in the ng-show attribute returns true

### Directives provide CSS Classes

**Ex** :
`<style>
input.ng-invalid {
  background-color: red;
}
</style>`


## AngularJS Applications

### AngularJS Module 

Define Application =>  container for the different parts of an application . // in js files

`var app = angular.module('myApp', []);`

### AngularJS Controller 

Control Application, data => always belongto a module // in js files
It is a **JavaScript Object**.
With properties + method.
Often store in one external file (`<script src="myController.js"></script>`)


`app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});`

