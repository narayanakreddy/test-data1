var app = angular.module('ngApp', []);

app.controller('sampleCtrl', ['$scope','firstService', function ($scope,firstService) {
    $scope.name = $scope.firstService.name;
    $scope.list = [
        {name:'list1'},
        {name:'list1'},
        {name:'list1'},
        {name:'list1'},
        {name:'list1'}
    ]
    console.log($scope.list);
}])

app.directive('custom', function () {
    return {
        restrict: 'ECMA',
        template: '<h1>This is Custom Directive</h1>',
        link:function(res){
            console.log("Narayajhfjs");
        }
    }
})

app.factory('firstService',function(){
  var name = 'Narayana';
    return name;
})
