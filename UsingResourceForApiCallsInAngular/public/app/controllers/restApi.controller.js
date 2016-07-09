/* 
 * 
 * @controller:restApiController
 * @author :Kavya
 */
angular.module('ResourceApp').controller('restApiController', function ($scope, $http, ResourceFactory) {

    $scope.addUser = function () {
        $scope.senddata = {
            "name": $scope.name,
            "email": $scope.email,
            "phone": $scope.phone,
            "address": $scope.address
        };
        console.log($scope.senddata, 'data posted');
        /* Save is used to post data to Server internally uses POST request*/
        ResourceFactory.save($scope.senddata, function (test) {
            console.log(test, 'test data is here');
            $scope.userstatus = 'User has been ADDED';
        });
    };
    $scope.updateUser = function () {
        $scope.updatedata = {
            "name": $scope.name,
            "phone": $scope.phone,
            "address": $scope.address
        };
         /* Update is used to post data to Server internally uses PUT request*/
        ResourceFactory.update({id: $scope.email},$scope.updatedata, function (test) {
            console.log(test, 'test data is here');
            $scope.userstatus = 'User has been ADDED';
        });
//        $http({
//            method: 'PUT',
//            url: '/user',
//            data: {
//                "name": $scope.name,
//                "email": $scope.email,
//                "phone": $scope.phone,
//                "address": $scope.address
//            }
//
//        }).then(function (data) {
//            console.log(data.data.nModified);
//            if (data.data.nModified)
//                $scope.message = "Updated User !";
//            else
//                $scope.message = "User Not found !";
//        });
    };
    $scope.userdata = false;
    $scope.viewUser = function () {
        var userdata = {};
        /* Get is used to fetch a single user data from Server internally uses GET request*/
        ResourceFactory.get({id: $scope.email}, function (data) {
            userdata = data;
            if (userdata.status) {
                $scope.message = '';
                $scope.userdata = true;
                $scope.name = userdata.data.name;
                $scope.email = userdata.data.email;
                $scope.phone = userdata.data.phone;
                $scope.address = userdata.data.address;
            } else {
                $scope.userdata = false;
                $scope.message = "User Not found !";
            }
        });
    };
    $scope.deleteUser = function () {
        /*Delete is used to delete data from server internally uses DELETE request*/
        ResourceFactory.delete({id: $scope.email}, function (data) {
            if (data.n)
                $scope.message = 'User has been DELETED';
            else
                $scope.message = "User Not found !";
        });
    };
});

