/**
 * Created by bface007 on 25/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('HelloCafe')
        .config(themeConfigurator);

    themeConfigurator.$inject = ['$mdThemingProvider'];

    function themeConfigurator($mdThemingProvider){
        $mdThemingProvider
            .theme('default')
            .primaryPalette('green', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '700'
            })
            .accentPalette('blue', {
                'default': 'A400',
                'hue-1': 'A200',
                'hue-2': 'A400',
                'hue-3': 'A700'
            })
    }
})();