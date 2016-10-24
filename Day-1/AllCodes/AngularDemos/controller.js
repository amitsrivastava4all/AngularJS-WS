/*
Glue B/w View and Model is Called Controller
*/

calcModule.controller("calcctrl",function($scope,calcfactory){
    $scope.doadd=function(){
        var result = calcfactory.addition($scope.firstno,$scope.secondno);
        $scope.myresult= result;
    }
});