angular.module('directiveApp').directive('customFooter',function(){
    return{
        templateUrl:'views/details.html',
//        scope:{
//            displayinfooter:"="
//        },
        transclude:true,
        controller: function($scope){
            $scope.name ='Hello Potter!';
            $scope.displayinfooter = 'change Magic!';
            $scope.outsideAcess = 'testing';
        }
    }
});