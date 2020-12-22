# Angular Basics



## AngularJS Applications

### MVC in Angular

**M** = Scope
**V** = HTML
**C**= Ng Controller

### Module 

Define Application =>  container for the different parts of an application . // in js files

`var app = angular.module('myApp', []);`

### Controller 

Control Application, data => always belongto a module // in js files
It is a **JavaScript Object**.
With properties + method.
Often store in one external file (`<script src="myController.js"></script>`)


`app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});`

### Scope

JavaScript object with properties and methods, which are available for both the view and the controller.

* $rootScope : scope on the HTML element that contains the ng-app directive/available in the entire application




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

* **ng-show/ng-hyde** : element (un)displayed only if the expression in the ng-show(hyde) attribute returns true

* **ng-disabled** : binds ng data to the disabled attribute of HTML elements

* **Events** : ng-keypress, ng-mouseenter, ng-mouseover, ng-click...

### Directives provide CSS Classes

**Ex** :
`<style>
input.ng-invalid {
  background-color: red;
}
</style>`


## Filters

Can be added to format & order data + can create your own filter with new filter factory function.

## Services

Function, or object, that is available for, and limited to, your AngularJS application

* **$http Service** : makes a request to the server, and lets your application handle the response.

Other services : $timeout, $interval, $location...
Can create your own service.

## Form

The novalidate attribute is new in HTML5. It disables any default browser validation.



