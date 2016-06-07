'use strict';
angular.module("app")
    .factory('pageInfo', [function () {
        var pageWidth = $(window).width(), pageHeight = $(window).height(), pageRate = 1;
        if (pageWidth < 640 || pageHeight < 1000) {
            pageWidth = 640;
            pageHeight = 1000;
            pageRate = 1;
        } else {
            pageRate = pageWidth / 640;
        }
        return {
            width: pageWidth,
            height: pageHeight,
            rate: pageRate
        }
    }]);