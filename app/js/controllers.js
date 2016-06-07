'use strict'
var app = angular.module("app");
app.controller('ApplicationController', ['$scope', '$log', 'pageInfo', function ($scope, $log, pageInfo) {
    $log.debug(pageInfo);

    $scope.page = {
        width: pageInfo.width + "px",
        height: pageInfo.height + "px"
    };

}]);


app.controller('homeCtrl', ['$scope', 'pageInfo', function ($scope, pageInfo) {
    $scope.pageClass = 'pageHome';

    $scope.background_img = {
        width: pageInfo.width + "px"
    };

    NProgress.done();
}]);