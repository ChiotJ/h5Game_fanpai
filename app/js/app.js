'use strict'
var app = angular.module('app', [
    'ngAnimate',
    'ui.router',
    'ngTouch'
]);

app.config(['$logProvider', function ($logProvider) {
    $logProvider.debugEnabled(true);
}]);


app.run(['$window', '$rootScope', 'pageInfo', function ($window, $rootScope, pageInfo) {
    function autoCss() {
        pageInfo.init();
        $rootScope.$broadcast('autoCss');
        $rootScope.$apply();
    }

    $window.onresize = autoCss;
    $window.onload = autoCss;
}]);