function panel() {
    return {
        restrict: "AE",
        templateUrl: "/components/panel/panel.html",
        scope: {
            bindingField: "@",
            classArea: "@",
            classHead: "@",
            formId: "@",
            name: "@"
        },

        transclude: true,

        link: function(scope, element, attrs) {

            scope.model = {
                collapsed: false
            };

            scope.show = angular.noop;

            scope.$watch("name", () => {

            });

            scope.$watch("formId", () => {

            });

        }
    }
}
