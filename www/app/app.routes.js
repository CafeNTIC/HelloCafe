/**
 * Created by bface007 on 25/10/2015.
 */
(function(){
    'use strict';

    angular
        .module('HelloCafe')
        .config(routeConfigurator);

    routeConfigurator.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfigurator($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './app/partials/partial-home.html'
            })
            .state('details', {

                url: '/details/:id',
                views: {
                    '': { templateUrl: './app/partials/partial-details.html'},
                    'tabs@details': {
                        templateUrl: './app/partials/partial-details-home.html'
                    }
                }
            })
            .state('details.comments', {
                url: '/comments',
                views: {
                    '': { templateUrl: './app/partials/partial-details.html'},
                    'tabs@details': {
                        templateUrl: './app/partials/partial-details-comments.html'
                    }
                }
            })
            .state('details.contributors', {
                url: '/contributors',
                view: {
                    //'': { templateUrl: './app/partials/partial-details.html'},
                    'tabs@details': {
                        templateUrl: './app/partials/partial-details-contributors.html'
                    }
                }
            })
            .state('/params', {
                url: '/params'
            })
            .state('/apropos', {
                url: '/apropos'
            });
    }
})();