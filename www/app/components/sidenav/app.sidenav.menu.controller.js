/**
 * Created by bface007 on 31/10/2015.
 */
(function(){
    'use strict';

    angular
        .module('HelloCafe')
        .controller('leftSidenavMenuCtrl', leftSidenavMenuCtrl);

    leftSidenavMenuCtrl.$inject = ['$log'];


    function leftSidenavMenuCtrl($log){
        var vm = this;

        vm.menuItems = [
            {
                linkTo: "home",
                name: "Explorer les projets"
            },
            {
                linkTo: "/apropos",
                name: "A propos"
            }
        ];

    }
})();