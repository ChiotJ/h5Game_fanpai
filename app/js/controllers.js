'use strict'
var app = angular.module("app");
app.controller('ApplicationController', ['$scope', '$window', '$log', 'pageInfo', function ($scope, $window, $log, pageInfo) {

    function autoCss() {
        $scope.page = {
            width: pageInfo.width + "px",
            height: pageInfo.height + "px"
        };

        $scope.background_img = {
            width: pageInfo.width + "px"
        };

        $scope.musicIO = {
            width: 49 * pageInfo.rate + "px",
            height: 50 * pageInfo.rate + "px",
            top: 50 * pageInfo.rate + "px",
            right: 20 * pageInfo.rate + "px"
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
        $scope.main = {
            height: pageInfo.height
        };

        $scope.startGame = {
            width: 271 * pageInfo.rate + "px",
            height: 91 * pageInfo.rate + "px",
            margin: 697 * pageInfo.rate + "px auto 0"
        };

        $scope.rules = {
            width: 179 * pageInfo.rate + "px",
            height: 74 * pageInfo.rate + "px",
            marginTop: 12 * pageInfo.rate + "px",
            marginLeft: 36 * pageInfo.rate + "px"
        };

        $scope.prize = {
            width: 179 * pageInfo.rate + "px",
            height: 74 * pageInfo.rate + "px",
            marginTop: 12 * pageInfo.rate + "px",
            marginLeft: 15 * pageInfo.rate + "px"
        };

        $scope.ranking = {
            width: 179 * pageInfo.rate + "px",
            height: 74 * pageInfo.rate + "px",
            marginTop: 12 * pageInfo.rate + "px",
            marginLeft: 15 * pageInfo.rate + "px"
        };

        $scope.notice = {
            width: 360 * pageInfo.rate + "px",
            height: 80 * pageInfo.rate + "px",
            lineHeight: 40 * pageInfo.rate + "px",
            fontSize: 24 * pageInfo.rate + "px",
            margin: 105 * pageInfo.rate + "px auto 0"
        };

    }

    autoCss();
    $scope.$on('autoCss', function () {
        autoCss();
    });

    NProgress.done();
}]);