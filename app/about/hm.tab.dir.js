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
                scope.disabled = false;

                if(attr.disable) {
                    attr.$observe('disable', function (value) {
                        scope.disabled = (value !== 'false');
                    });
                }

                ctrl.addTab(scope);
            }
        }
    }
    
    function JTabSetDirectiveClass() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                jtype: '@',
                vertical: '@',
                justified: '@'
            },
            templateUrl: 'app/about/hm.tab.set.dir.html',
            bindToController: true,
            controllerAs: 'tabset',
            controller: function(){
                var vm = this;
                vm.tabs = [];
                vm.classes = {};


                vm.$onInit =  function () {
                    if(vm.jtype === 'pills') vm.classes['nav-pills'] = true;
                    else vm.classes['nav-tabs'] = true;
                    if(vm.justified) vm.classes['nav-justified'] = true;
                    if(vm.vertical) vm.classes['nav-stacked'] = true;
                };

                vm.addTab = function(tab){
                    vm.tabs.push(tab);
                    if(vm.tabs.length === 1) {
                        tab.active = true;
                    }
                };

                vm.set = function(selectedTab){
                    if(selectedTab.disabled) return;

                    angular.forEach(vm.tabs, function(tab){
                        if(tab.active && tab !== selectedTab){
                            tab.active = false;
                        }
                    });
                    selectedTab.active = true;
                };
                
                vm.enablePlumbing = function(){
                    angular.forEach(vm.tabs, function(tab) {
                       if (tab.heading === "Plumbing") {
                           tab.disabled = !tab.disabled;
                       }
                    });
                }
            }
        }
    }
}());