(function () {
    'use strict'

    angular.module('myFirstAssignModule', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menuItems = "";
        $scope.resultMsg = "";
        $scope.checkIfTooMuch = function () {
            var arrayOfMenuItems = $scope.menuItems.split(',');
            var size = arrayOfMenuItems.length;
            if (size == 1 && arrayOfMenuItems[0].length == 0) {
                $scope.resultMsg = "Please enter data first";
            }
            else if (size <= 3) {
                $scope.resultMsg = "Enjoy!";
            }
            else {
                $scope.resultMsg = "Too much!";
            }
        };
    }
})();