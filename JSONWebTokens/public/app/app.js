angular.module('TokenAuth', ['ui.router']).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});