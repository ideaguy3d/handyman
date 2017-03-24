/**
 * Created by Julius Alvarado on 3/23/2017.
 */


(function(){
    "use strict";

    var app = angular.module('handyman'),
        directiveId = 'jTab',
        directiveId2 = 'jTabSet';

    app.directive(directiveId, [JTabDirectiveClass])
        .directive(directiveId2, [JTabSetDirectiveClass]);

    function JTabDirectiveClass () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'app/about/hm.tab.dir.html',
            require: '^tabset',
            link: function(scope, elem, attr){

            }
        }
    }
    
    function JTabSetDirectiveClass() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'app/about/hm.tab.set.dir.html',
            bindToController: true,
            controllerAs: 'tabset',
            controller: function(){
                var vm = this;
                vm.tabs = [];
                vm.message = "<JTabSetDirectiveClass>";
                
                vm.tabset = function(tab){

                }
            }
        }
    }
}());