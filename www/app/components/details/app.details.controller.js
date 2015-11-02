/**
 * Created by bface007 on 01/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('HelloCafe')
        .controller('detailsCtrl', detailsCtrl);

    detailsCtrl.$inject = ['$stateParams', '$scope', 'Dummy', '$log'];

    function detailsCtrl($stateParams, $scope, Dummy, $log){
        var id = $stateParams.id,
            vm = this;

        $scope.$emit('back', '');
        //alert('er')


        vm.dummyDetails = Dummy.getProjectById(id);
        vm.getUserById = Dummy.getUserById;
    }
})();