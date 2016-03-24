var defaultTheme = 'rail';
var themingApp = angular.module('themingClient', ['ui.bootstrap']);

themingApp.factory('themingFactory', function() {
    var themingFactory = {};
    return themingFactory;
});
themingApp.controller('themingCtrl',
    function($scope, $modal) {
        $scope.theme = defaultTheme;
        $scope.openModal = function() {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'themingModalInstanceCtrl',
                windowClass: 'nm-compmail-modal mail-body',
                backdrop: 'static',
                resolve: {
                    theme: function() {
                        return $scope.theme;
                    }
                }
            });
        }
    });


themingApp.controller('themingModalInstanceCtrl', function($scope, $modalInstance, theme) {
    $scope.theme = theme;
});