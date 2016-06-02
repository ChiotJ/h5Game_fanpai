'use strict'
var app = angular.module('app', [
    'ngAnimate',
    'ui.router'
]);

app.config(['$logProvider', function ($logProvider) {
    $logProvider.debugEnabled(true);
}]);
