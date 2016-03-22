/* 
 * 
 * @purpose:For angular routing of views using stateprovider(ui-router)
 * @author:Kavya
 */
'use strict';
angular.module('RestApi')
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                        .state('addUser', {
                            url: '/addUser',
                            templateUrl: 'views/addUser.html',
                            controller:"restApiController"
                        })
                        .state('updateUser', {
                            url: '/updateUser',
                            templateUrl: 'views/updateUser.html',
                            controller:"restApiController"
                        })
                        .state('viewUser', {
                            url: '/viewUser',
                            templateUrl: 'views/viewUser.html',
                            controller:"restApiController"
                        })
                        .state('deleteUser', {
                            url: '/deleteUser',
                            templateUrl: 'views/deleteUser.html',
                            controller:"restApiController"
                        });

            }]);