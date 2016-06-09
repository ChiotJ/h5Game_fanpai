'use strict';
angular.module("app")
    .controller('ApplicationController', ['$scope', '$log', 'pageInfo', function ($scope, $log, pageInfo) {

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

    }])
    .controller('homeCtrl', ['$scope', '$timeout', '$state', '$log', 'pageInfo', function ($scope, $timeout, $state, $log, pageInfo) {
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

        $scope.startGameClick = function () {
            $state.go('game');
        };

        NProgress.done();
    }])
    .controller('gameCtrl', ['$scope', '$state', '$log', 'pageInfo', function ($scope, $state, $log, pageInfo) {
        $scope.pageClass = 'pageGame';
        function autoCss() {
            $scope.game_bg = {
                width: 600 * pageInfo.rate + "px",
                height: 600 * pageInfo.rate + "px",
                top: 230 * pageInfo.rate + "px",
                left: 20 * pageInfo.rate + "px"
            };

            $scope.gameDiv = {
                width: 580 * pageInfo.rate + "px",
                height: 560 * pageInfo.rate + "px",
                top: 242 * pageInfo.rate + "px",
                left: 30 * pageInfo.rate + "px"
            };

            $scope.feiren = {
                width: 155 * pageInfo.rate + "px",
                height: 132 * pageInfo.rate + "px",
                top: 822 * pageInfo.rate + "px",
                left: 120 * pageInfo.rate + "px"
            };

            $scope.home = {
                width: 179 * pageInfo.rate + "px",
                height: 74 * pageInfo.rate + "px",
                top: 913 * pageInfo.rate + "px",
                left: 130 * pageInfo.rate + "px"
            };

            $scope.start = {
                width: 179 * pageInfo.rate + "px",
                height: 74 * pageInfo.rate + "px",
                top: 913 * pageInfo.rate + "px",
                left: 338 * pageInfo.rate + "px"
            };
        }

        autoCss();
        $scope.$on('autoCss', function () {
            autoCss();
        });

        $scope.backHomeClick = function () {
            $state.go('home');
        };


        NProgress.done();
    }]);