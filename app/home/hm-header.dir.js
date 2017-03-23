/**
 * Created by Julius Alvarado on 3/22/2017.
 */
(function(){
    "use strict";

    var app = angular.module('handyman'),
        directiveId = 'hmHeader';

    app.directive(directiveId, [hmHeaderDirectiveClass]);

    function hmHeaderDirectiveClass() {
        console.log("in the hmHeaderDirectiveClass");
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/home/hm-header.dir.html'
        }
    }
}());