function MainController($log, $scope, MENU) {
    var self = this;

    self.logout = angular.noop;

    self.headerbar = {
        showMenu: false,
        prevActive: null
    };

    self.sidebar = {
        showMenu: false,
        prevActive: null
    };

    self.headerbar.menu = MENU;
    $log.info(self.headerbar.menu);

    _.defer(function() {
        $scope.$apply();
    });

}

MainController.$inject = ["$log", "$scope", "MENU"];

angular.module("gi.main", [])
    .controller("MainController", MainController);
