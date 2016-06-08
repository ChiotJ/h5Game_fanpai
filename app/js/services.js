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
    }]);