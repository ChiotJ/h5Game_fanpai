'use strict';
angular.module("app")
    .directive('imgButton', ['$log', function ($log) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                new Image().src = attrs.src.replace("1", "2");

                element.on('touchstart', function (e) {
                    element.attr('src', attrs.src.replace("1", "2"));
                });

                element.on('touchend', function (e) {
                    element.attr('src', attrs.src.replace("2", "1"));
                })
            }
        };
    }])
    .directive('bgmAudio', ['$log', function ($log) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                new Image().src = attrs.src.replace("Open", "Close");

                var audio = document.getElementById('bgm');

                element.on('click', function (e) {
                    if (audio.paused) {
                        audio.play();
                        element.attr('src', 'imgs/musicOpen.png');
                    } else {
                        audio.pause();
                        element.attr('src', 'imgs/musicClose.png');
                    }

                });

            }
        };
    }]);