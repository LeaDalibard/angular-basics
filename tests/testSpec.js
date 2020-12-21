describe("PasswordControllerTest",  function () {
   beforeEach(module('app'));

   var ctrl;
   beforeEach(inject(function ($controller){
       ctrl=$controller;
   }));

   describe("test on psw", function () {

       it("Check if result is 'strong' if psw is more than 9 characters", function () {
           var $scope={};
           ctrl('PasswordCtrl', {$scope:$scope});
           $scope.password='fejgezhqretqeng';
           $scope.grade();
           expect($scope.strength).toEqual('Strong');
       })
   })
})