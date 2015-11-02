/**
 * Created by bface007 on 31/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('HelloCafe')
        .controller('listCtrl', listCtrl);

    listCtrl.$inject = ['Dummy', '$scope'];

    function listCtrl(Dummy, $scope){
        var vm = this;

        $scope.$emit('top', '');

        vm.allDummyProjects = Dummy.getAllProjects();
    }
})();