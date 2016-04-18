/* 
 * 
 * @controller:restApiController
 * @author :Kavya
 */
angular.module('RestApi').controller('restApiController', function ($scope, $http, $state, $location) {
    $scope.login = function () {
        console.log($scope.email);
        $http({
            method: 'POST',
            url: '/login',
            data: {
                email: $scope.email, 
                password: $scope.password
            }

        }).then(function (data) {
            console.log(data);

        });
    };
    $scope.addUser = function () {
        $http({
            method: 'POST',
            url: '/user',
            data: {
                "name": $scope.name,
                "email": $scope.email,
                "password": $scope.password
            }

        }).then(function (data) {
            console.log(data);
            if (data.data.error.code == 11000)
                $scope.userstatus = 'User Already Exists !';
            else if (data.data)
                $scope.userstatus = 'User Added Successfully !';

        });
    };
    $scope.updateUser = function () {
        $http({
            method: 'PUT',
            url: '/user',
            data: {
                "name": $scope.name,
                "email": $scope.email,
                "password": $scope.password
            }

        }).then(function (data) {
            console.log(data.data.nModified);
            if (data.data.nModified)
                $scope.message = "Updated User !";
            else
                $scope.message = "User Not found !";
        });
    };
    $scope.viewUser = function () {
        $http({
            method: 'GET',
            url: '/user',
            params: {email: $scope.email}
        }).then(function (data) {
            console.log(data.data[0]);
            if (data.data[0]) {
                $scope.message = false;
                $scope.userdata = true;
                $scope.name = data.data[0].name;
                $scope.email = data.data[0].email;
                $scope.password = data.data[0].password;
            } else {
                $scope.userdata = false;
                $scope.message = "User Not found !";
            }

        });
    };
    $scope.deleteUser = function () {
        console.log($scope.email);
        $http({
            method: 'DELETE',
            url: '/user',
            params: {email: $scope.email}

        }).then(function (data) {
            console.log(data);
            if (data.data.n)
                $scope.message = "Deleted User !";
            else
                $scope.message = "User Not found !";
        });
    };
    $scope.facebookSignin = function () {
        $http({
            method: 'GET',
            url: '/facebook'
        }).then(function (data) {
            console.log(data);
           
        });
    };
    $scope.googleSignin = function () {
        $http({
            method: 'GET',
            url: '/google'
        }).then(function (data) {
            console.log(data);
           
        });
    };

});

