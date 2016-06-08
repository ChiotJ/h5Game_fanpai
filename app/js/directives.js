'use strict';
angular.module("app")
    .directive('imgButton', ['$log', function ($log) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                $log.debug(element);
                element.on('touchstart', function (e) {
                    element.attr('src', attrs.src.replace("1", "2"));
                });

                element.on('touchend', function (e) {
                    element.attr('src', attrs.src.replace("2", "1"));
                })
            }
        };
    }]);