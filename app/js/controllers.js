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


app.controller('homeCtrl', ['$scope', '$timeout', '$log', 'pageInfo', function ($scope, $timeout, $log, pageInfo) {
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


        $scope.detail = {
            width: pageInfo.width + "px",
            height: 720 * pageInfo.rate + "px",
            top: 190 * pageInfo.rate + "px"
        };

        $scope.prizeDetail = {
            width: pageInfo.width + "px",
            height: 713 * pageInfo.rate + "px"
        };

        $scope.prizeClose = {
            width: 51 * pageInfo.rate + "px",
            height: 51 * pageInfo.rate + "px",
            top: 30 * pageInfo.rate + "px",
            right: 18 * pageInfo.rate + "px"

        };

        $scope.rulesDetail = {
            width: 618 * pageInfo.rate + "px",
            height: 696 * pageInfo.rate + "px",
            left: 11 * pageInfo.rate + "px"
        };

        $scope.rulesClose = {
            width: 54 * pageInfo.rate + "px",
            height: 60 * pageInfo.rate + "px",
            right: 13 * pageInfo.rate + "px",
            top: 21 * pageInfo.rate + "px"
        };

        $scope.rankingDetail = {
            width: 618 * pageInfo.rate + "px",
            height: 696 * pageInfo.rate + "px",
            left: 11 * pageInfo.rate + "px"
        };

        $scope.rankingClose = {
            width: 51 * pageInfo.rate + "px",
            height: 51 * pageInfo.rate + "px",
            right: 17 * pageInfo.rate + "px",
            top: 31 * pageInfo.rate + "px"
        };

    }

    autoCss();
    $scope.$on('autoCss', function () {
        autoCss();
    });


    $scope.prizeOpenClick = function () {
        $('#prizeDetail').css('opacity', '1').css('z-index', '2')
    };

    $scope.prizeCloseClick = function () {
        var $prizeDetail = $('#prizeDetail');
        $prizeDetail.css('opacity', '0');
        $timeout(function () {
            $prizeDetail.css('z-index', '')
        }, 500);
    };

    $scope.rulesOpenClick = function () {
        $('#rulesDetail').css('opacity', '1').css('z-index', '2')
    };

    $scope.rulesCloseClick = function () {
        var $rulesDetail = $('#rulesDetail');
        $rulesDetail.css('opacity', '0');
        $timeout(function () {
            $rulesDetail.css('z-index', '')
        }, 500);
    };

    $scope.rankingOpenClick = function () {
        $('#rankingDetail').css('opacity', '1').css('z-index', '2')
    };

    $scope.rankingCloseClick = function () {
        var $rankingDetail = $('#rankingDetail');
        $rankingDetail.css('opacity', '0');
        $timeout(function () {
            $rankingDetail.css('z-index', '')
        }, 500);
    };

    NProgress.done();
}]);