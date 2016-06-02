'use strict'
var app = angular.module("app");
app.controller('ApplicationController', [function () {

}]);


app.controller('homeCtrl', ['$scope', function ($scope) {
    $scope.pageClass = 'pageHome';
    NProgress.done();
}]);