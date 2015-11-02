/**
 * Created by bface007 on 31/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('HelloCafe')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', '$mdSidenav', '$timeout', '$log', '$location'];

    function mainCtrl($scope, $mdSidenav, $timeout, $log, $location){

        var vm = this;

        vm.swipeSidenav = swipeSidenav;
        vm.unSwipeSidenav = swipeSidenav;
        vm.goToTop = goToTop;
        vm.isBack = false;
        vm.isTop = true;

        $scope.$on('toggleSidenav', handleSidenavEvent);
        $scope.$on('back', isBack);
        $scope.$on('top', isTop);

        function swipeSidenav(){
            $scope.$emit('toggleSidenav', "leftSidenav");
            $log.debug("leftSidenav swipped");
        }

        function isBack(args){
            vm.isBack = true;
            vm.isTop = false;
            $log.debug('is back')
        }
        function isTop(args){
            vm.isBack = false;
            vm.isTop = true;
            $log.debug('is top')
        }

        function goToTop(){
            $location.path('/home');
        }

        function handleSidenavEvent(e, args){
            //$log.debug("yo");
            $mdSidenav(args)
                .toggle()
                .then(function () {
                    $log.debug("toggle "+ args +" is done");
                })

        }

        function emitToggleSidenav(){
            //console.log("click");

            $scope.$emit('toggleSidenav', "leftSidenav");
            $log.debug("toolbarCtrl --> emitToggleSidenav : event emitted");
        }
    }
})();