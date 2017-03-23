/**
 * Created by Julius Alvarado on 3/22/2017.
 */
(function(){
    "use strict";

    var app = angular.module('handyman', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/home/home.tem.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/about/about.tem.html'
                })
                .state('contact', {
                    url: '/contact-me',
                    templateUrl: 'app/contact/contact.me.tem.html'
                });
            $urlRouterProvider.otherwise('/');
        }
    ])
}());