/* 
 *  @author : Kavya
 * @purpose : Use Rest Apis here 
 */
angular.module('ResourceApp').factory('ResourceFactory',function($resource){
    return $resource('/user/:id');
});

