'use strict';
angular.module("app")
    .factory('pageInfo', [function () {
        return {
            width: $(window).width(),
            height: $(window).height(),
            rate: 1,
            init: function init() {
                var pageWidth = $(window).width(), pageHeight = $(window).height(), pageRate = 1;
                if (pageWidth < 640) {
                    pageWidth = 640;
                    pageHeight = 1008;
                    pageRate = 1;
                } else {
                    pageRate = pageWidth / 640;
                    if (pageWidth > pageHeight) {
                        pageHeight = pageRate * 1008;
                    } else {
                        if (pageHeight < pageRate * 1008) {
                            pageHeight = pageRate * 1008;
                        }
                    }
                }
                this.width = pageWidth;
                this.height = pageHeight;
                this.rate = pageRate;
            }
        }
    }])
    .factory('gameService', ['$timeout', '$rootScope', '$http', '$log', function ($timeout, $rootScope, $http, $log) {
        var gameTime = 22220, rememberTime = 10000;

        function shuffle() {
            return 0.5 - Math.random();
        }

        function isMatchPattern() {
            var cards = $(".card-flipped");
            var pattern = $(cards[0]).attr("data-pattern");
            var anotherpattern = $(cards[1]).attr("data-pattern");
            return (pattern == anotherpattern);
        }

        function gameOver() {
            $log.debug('gameOver');
            $rootScope.$broadcast('isShowBlackMate', true);
            if (gameTime < 5000) {
                $("#finish_cheat").css('opacity', 1).css('z-index', 15);
            } else {
                $("#finish").css('opacity', 1).css('z-index', 15);
            }
        }

        return {
            isStart: false,
            gameTime: gameTime,
            rememberTime: rememberTime,
            rememberTimeout: null,
            country: [
                'England', 'Italy', 'Hungary', 'Spain', 'Ukraine', 'Welsh',
                'Turkey', 'Slovakia', 'Switzerland', 'Sweden', 'Portugal', 'Romania',
                'Croatia', 'France', 'Russia', 'Germany', 'Poland', 'Iceland',
                'Belgium', 'NorthernIreland', 'Austria', 'Ireland', 'Albania', 'Czech'
            ],
            cards: [],
            init: function init() {
                this.country.sort(shuffle);
                var c = this.country.slice(0, 12);
                c = c.concat(c);
                var i = 0;
                while (i < 3) {
                    c = c.sort(shuffle);
                    i++;
                }
                this.cards = c;
            },
            reInit: function () {
                $(".card-flipped").removeClass('card-flipped');
                $(".card-removed").removeClass('card-removed');
                this.init();
                $timeout.cancel(this.rememberTimeout);

                gameOver();
            },
            remember: function () {
                $('#cards').addClass('card-flipped');
                var self = this;
                this.rememberTimeout = $timeout(function () {
                    $('#cards').removeClass('card-flipped');
                    self.isStart = true;
                    self.rememberTimeout = null;
                }, 2000);
            },
            checkPattern: function () {
                if (isMatchPattern()) {
                    $(".card-flipped").addClass("card-removed").removeClass("card-flipped");
                    if ($(".card-removed").length == this.cards.length) {
                        this.isStart = false;
                        gameOver();
                    }
                } else {
                    $(".card-flipped").addClass("card-flipped-error");
                    setTimeout(function () {
                        $(".card-flipped").removeClass("card-flipped").removeClass("card-flipped-error");
                    }, 1500);
                }
            },
            submit: function (username, phone) {
                return $http.post('', null, {
                    params: {}
                })
            }
        }
    }]);