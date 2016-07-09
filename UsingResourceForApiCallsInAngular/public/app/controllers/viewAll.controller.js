/* 
 *  @author : Kavya
 * @purpose :  
 */

angular.module('ResourceApp').controller('viewAllController', function ($scope, ResourceFactory) {
    /* Query used fetch all the users data from Server  internally uses get request*/
    $scope.userData = ResourceFactory.query(function (test) {
    });
})
