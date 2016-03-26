/* 
 * JSON Web Token authentication
 * @author:Kavya 
 * @purpose:Adding the token before sending the request in the service
 */

angular.module('TokenAuth').service('requestToken', function ($http, $q, $rootScope) {
    this.getToken = function (api, reqType, data) {
        var token='';
        if(api!='login'){
            token = $rootScope.tokenGen;
            console.log(token,'gnerated token');
        }
            
        var deferred = $q.defer();
        $http({
            method: reqType,
            url: '/' + api,
            data: data,
            headers:{'x-access-token':token}
        }).then(function (data) {
            console.log(token,'tokentest');
            deferred.resolve(data);
        });
        return deferred.promise;
    };
});
