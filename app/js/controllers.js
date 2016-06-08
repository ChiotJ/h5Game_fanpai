'use strict'
var app = angular.module("app");
app.controller('ApplicationController', ['$scope', '$window', '$log', 'pageInfo', function ($scope, $window, $log, pageInfo) {

    function autoCss() {
        $scope.page = {
            width: pageInfo.width + "px",
            height: pageInfo.height + "px"
        };
    }

    autoCss();
    $scope.$on('autoCss', function () {
        autoCss();
    });

}]);


app.controller('homeCtrl', ['$scope', '$log', 'pageInfo', function ($scope, $log, pageInfo) {
    $scope.pageClass = 'pageHome';

    function autoCss() {
        $scope.background_img = {
            width: pageInfo.width + "px"
        };

        $scope.startGame = {
            width: 271 * pageInfo.rate + "px",
            height: 91 * pageInfo.rate + "px",
            top: 697 * pageInfo.rate + "px",
            left: 185 * pageInfo.rate + "px"
        };

        $scope.rules = {
            width: 179 * pageInfo.rate + "px",
            height: 74 * pageInfo.rate + "px",
            top: 800 * pageInfo.rate + "px",
            left: 36 * pageInfo.rate + "px"
        };

        $scope.prize = {
            width: 179 * pageInfo.rate + "px",
            height: 74 * pageInfo.rate + "px",
            top: 800 * pageInfo.rate + "px",
            left: 230 * pageInfo.rate + "px"
        };

        $scope.ranking = {
            width: 179 * pageInfo.rate + "px",
            height: 74 * pageInfo.rate + "px",
            top: 800 * pageInfo.rate + "px",
            left: 424 * pageInfo.rate + "px"
        };

    }

    autoCss();
    $scope.$on('autoCss', function () {
        autoCss();
    });

    NProgress.done();
}]);