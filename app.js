/**
 * Created by Puneet on 20-Apr-16.
 */
var app = angular.module('myApp', [])

app.run(function($rootScope){
    $rootScope.title = 'Mr.'
})

app.controller('firstController', function($scope){
    $scope.fName = 'Puneet'
    console.log($scope)
})


app.controller('secondController', function($scope){
    $scope.lName = 'Vashisht'
    $scope.reverse = function(){
        $scope.result =  $scope.fName.split('').reverse().join('')
    }

    console.log($scope)
})
