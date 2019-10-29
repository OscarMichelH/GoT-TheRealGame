angular.module("main").controller("mainController", function ($scope) {

    $scope.body = 'views/main.html';



    $scope.showSite= function (site) {
        $scope.body = site;
    };

    $scope.reload = function () {
        $scope.body = 'views/main.html';
    }
});