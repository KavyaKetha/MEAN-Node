angular.module('RestApi', ['ui.router']).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});