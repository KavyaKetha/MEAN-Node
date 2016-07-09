/* 
 * 
 * @purpose:For angular routing of views using stateprovider(ui-router)
 * @author:Kavya
 */
'use strict';
angular.module('ResourceApp')
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
                        .state('viewAllUsers', {
                            url: '/viewAllUsers',
                            templateUrl: 'views/allUsers.html',
                            controller:"viewAllController"
                        })
                        .state('deleteUser', {
                            url: '/deleteUser',
                            templateUrl: 'views/deleteUser.html',
                            controller:"restApiController"
                        });

            }]);