/* 
 * 
 * @purpose:For angular routing of views using stateprovider(ui-router)
 * @author:Kavya
 */
'use strict';
angular.module('RouterAngular',['ui.router'])
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                        .state('home', {
                            url: '/home',
                            templateUrl: 'views/home.html',
                        })
                        .state('contact', {
                            url: '/contact',
                            templateUrl: 'views/contact.html',
                        })
                        .state('services', {
                            url: '/services',
                            templateUrl: 'views/services.html',
                        })
                        .state('about', {
                            url: '/about',
                            templateUrl: 'views/about.html',
                        });

            }]);