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
            scope: {
                heading: '@'
            },
            template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
            require: '^jTabSet',
            link: function (scope, elem, attr, ctrl) {
                scope.active = false;
                ctrl.addTab(scope);
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
                
                vm.addTab = function(tab){
                    vm.tabs.push(tab);
                    if(vm.tabs.length === 1) {
                        tab.active = true;
                    }
                };

                vm.set = function(selectedTab){
                    angular.forEach(vm.tabs, function(tab){
                        if(tab.active && tab !== selectedTab){
                            tab.active = false;
                        }
                    });
                    selectedTab.active = true;
                };
            }
        }
    }
}());