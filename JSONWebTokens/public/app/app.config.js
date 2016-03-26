/* 
 * 
 * @purpose:For angular routing of views using stateprovider(ui-router)
 * @author:Kavya
 */
'use strict';
angular.module('TokenAuth')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");
                $stateProvider
                        .state('login', {
                            url: '/',
                            templateUrl: 'views/login.html',
                            controller: "tokenAuthController"
                        })
                        .state('addUser', {
                            url: '/addUser',
                            templateUrl: 'views/addUser.html',
                            controller: "tokenAuthController"
                        })
                        .state('updateUser', {
                            url: '/updateUser',
                            templateUrl: 'views/updateUser.html',
                            controller: "tokenAuthController"
                        })
                        .state('viewUser', {
                            url: '/viewUser',
                            templateUrl: 'views/viewUser.html',
                            controller: "tokenAuthController"
                        })
                        .state('deleteUser', {
                            url: '/deleteUser',
                            templateUrl: 'views/deleteUser.html',
                            controller: "tokenAuthController"
                        });

            }]);