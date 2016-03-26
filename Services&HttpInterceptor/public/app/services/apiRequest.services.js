/* 
 * JSON Web Token authentication
 * @author:Kavya 
 * @purpose:Adding the token before sending the request in the service
 */

angular.module('TokenAuth').service('requestToken', function ($http, $q, $rootScope) {
    this.getToken = function (api, reqType, data) {
        var deferred = $q.defer();
        $http({
            method: reqType,
            url: '/' + api,
            data: data
        }).then(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
}).factory('tokenInterceptor', function ($rootScope) {
                    return {
                        request: function (config) {
                            console.log(config,'req config');
                            if (config.url != '/login') {
                                config.headers['x-access-token']=$rootScope.tokenGen;
                            }
                            return config;
                        },
                        requestError: function (config) {
                            return config;
                        },
                        response: function (res) {
                            return res;
                        },
                        responseError: function (res) {
                            return res;
                        }
                    }
                });