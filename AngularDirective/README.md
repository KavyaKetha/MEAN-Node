# MEAN-Node

# **Angular Directive**


 **services.html**

<div class="jumbotron">

    <h1>Services</h1>

    <h3> {{name}} </h3>

    <p>This example is a quick exercise to illustrate how the directive works</p>
    
</div>

<custom-footer></custom-footer>


 **servicesController.js**

angular.module('directiveApp').controller('ServicesController',function($scope){

    $scope.name ='Hello Harry!';

});


 **details.html**

<footer class="footer">

    <div class="container">

        {{name}} This is My custom footer Directive...

    </div

</footer>

 **footer.js**

angular.module('directiveApp').directive('customFooter',function(){

    return{

        templateUrl:'views/details.html',

        controller: function($scope){

            $scope.name ='Hello Potter!';

        }

    }

});

When the value for "name" is changed in footer the parent controller(ServicesController) scope value will be binding changes and uses it in the directive.Because here the parent controller and directive controller(customFooter's controller) scope hasn't isolated.The result will be:


Services

Hello Potter!

This example is a quick exercise to illustrate how the directive works

Hello Potter! This is My custom footer Directive...


Scope:


 **footer.js**

angular.module('directiveApp').directive('customFooter',function(){

    return{

        templateUrl:'views/details.html',

        scope:{

        },

        controller: function($scope){

            $scope.name ='Hello Potter!';

        }

    }

});

When the scope is isolated using scope in directive then the parent controller and the directive controller scope will be seperated and the result will be:


Services

Hello Harry!

This example is a quick exercise to illustrate how the directive works

Hello Potter! This is My custom footer Directive...


The parent will be taking the "name" value from the parent controller and the footer from directive controller.

 **services.html**

<div class="jumbotron">

    <h1>Services</h1>

    <h3> {{name}} </h3>

    <h4> {{display}} </h4>

    <p>This example is a quick exercise to illustrate how the directive works</p>
    
</div>

<custom-footer></custom-footer>


 **servicesController.js**

angular.module('directiveApp').controller('ServicesController',function($scope){

    $scope.name ='Hello Harry!';

    $scope.display ='Hello Magic!!!';

});


 **details.html**

<footer class="footer">

    <div class="container">

        {{name}} {{display}} This is My custom footer Directive...

    </div

</footer>

 **footer.js**

angular.module('directiveApp').directive('customFooter',function(){

    return{

        templateUrl:'views/details.html',

        scope:{

        },

        controller: function($scope){

            $scope.name ='Hello Potter!';

        }

    }

});

When we try to access the parent controller scope variable in directive controller after isolating scope. It will not be able to get the parent scope value. The result will be:

Services
Hello Harry!
Magic!!!

This example is a quick exercise to illustrate how the directive works

Hello Potter! This is My custom footer Directive...


 **services.html**

<div class="jumbotron">

    <h1>Services</h1>

    <h3> {{name}} </h3>

    <h4> {{display}} </h4>

    <p>This example is a quick exercise to illustrate how the directive works</p>
    
</div>

<custom-footer displayinfooter="display"></custom-footer>


 **details.html**

<footer class="footer">

    <div class="container">

        {{name}} {{display}} This is My custom footer Directive...

    </div

</footer>


 **footer.js**

angular.module('directiveApp').directive('customFooter',function(){

    return{

        templateUrl:'views/details.html',

        scope:{
        
            displayinfooter:"="

        },

        controller: function($scope){

            $scope.name ='Hello Potter!';

        }

    }

});


Inorder, to access the parent scope value we should pass it in the directive. The result will be:

Services
Hello Harry!
Magic!!!

This example is a quick exercise to illustrate how the directive works

Hello Potter! Magic!!! This is My custom footer Directive...


If the scope is bound with "=" the binding will be two way i.e, if the scope value modified in directive controller it will be reflected in parent controller and vice-versa.

 **footer.js**

angular.module('directiveApp').directive('customFooter',function(){

    return{

        templateUrl:'views/details.html',

        scope:{
        
            displayinfooter:"="

        },

        controller: function($scope){

            $scope.name ='Hello Potter!';

            $scope.displayinfooter = 'change Magic!';

        }

    }

});


Services
Hello Harry!
change Magic!

This example is a quick exercise to illustrate how the directive works

Hello Potter! change Magic! This is My custom footer Directive...


Restrict :


The restrict option is typically set to:

    'A' - only matches attribute name

    'E' - only matches element name

    'C' - only matches class name

    'M' - only matches comment


Transclude:




