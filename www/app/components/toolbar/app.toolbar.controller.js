

    angular
        .module('HelloCafe')
        .controller('toolbarCtrl', toolbarCtrl);

    toolbarCtrl.$inject = ['$scope', '$log'];

    function toolbarCtrl($scope, $log){
        var vm = this;

        vm.toggleSidenavBtn = emitToggleSidenav;

        $scope.isBackwards = false;
        $scope.isTopwards = true;

        $scope.$on('isBackwards', function (args) {
            vm.isBackwards = true;
            vm.isTopwards = false;
            $log.debug('isBackwards');
        });
        $scope.$on('isTopwards', function () {
            vm.isTopwards = true;
            vm.isBackwards = false;
            $log.debug('isTopwards');
        });

        function emitToggleSidenav(){
            //console.log("click");

            $scope.$emit('toggleSidenav', "leftSidenav");
            $log.debug("toolbarCtrl --> emitToggleSidenav : event emitted");
        }
    }