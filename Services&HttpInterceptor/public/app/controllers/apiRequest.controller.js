/* 
 * 
 * @controller:restApiController
 * @author :Kavya
 */
angular.module('TokenAuth').controller('tokenAuthController', function ($scope, requestToken, $state, $rootScope) {
    $scope.login = function () {
        console.log($scope.email,$scope.password);
        var api = 'login';
        var data = {
            "email": $scope.email,
            "password": $scope.password
        };
        requestToken.getToken(api,'POST',data).then(function (response) {
            console.log(response,'response');
            $rootScope.tokenGen = response.data;
               $state.go('addUser');
        });
    };
    $scope.addUser = function () {
       var api = 'api/user';
        var data= {
                "name": $scope.name,
                "email": $scope.email,
                "password": $scope.password
            }

        requestToken.getToken(api,'POST',data).then(function (response) {
            console.log(response);
            if(response.status==403){
                $scope.userstatus ='Not a User (or) Session expired. Please login again.'
            }
            else if(response.data.error.code==11000)
                $scope.userstatus = 'User Already Exists !'; 
            else if(response.data)
            $scope.userstatus = 'User Added Successfully !'; 
            
        });
    };
//    $scope.updateUser = function () {
//        $http({
//            method: 'PUT',
//            url: '/user',
//            data: {
//                "name": $scope.name,
//                "email": $scope.email,
//                "password": $scope.password
//            }
//
//        }).then(function (data) {
//            console.log(data.data.nModified);
//            if(data.data.nModified)
//                $scope.message = "Updated User !";
//            else
//                $scope.message = "User Not found !";
//        });
//    };
//    $scope.viewUser = function () {
//        $http({
//            method: 'GET',
//            url: '/user',
//            params: {email: $scope.email}
//        }).then(function (data) {
//            console.log(data.data[0]);
//            if(data.data[0]){
//                $scope.message = false;
//                $scope.userdata = true;
//                $scope.name = data.data[0].name;
//                $scope.email = data.data[0].email;
//                $scope.password = data.data[0].password;
//            }else{
//                $scope.userdata = false;
//                $scope.message = "User Not found !";
//            }
//            
//        });
//    };
//    $scope.deleteUser = function () {
//        console.log($scope.email);
//        $http({
//            method: 'DELETE',
//            url: '/user',
//            params: {email: $scope.email}
//
//        }).then(function (data) {
//            console.log(data);
//            if(data.data.n)
//                $scope.message = "Deleted User !";
//            else
//                $scope.message = "User Not found !";
//        });
//    };
});

