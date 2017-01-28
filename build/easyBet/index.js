document.addEventListener("DOMContentLoaded", (event) => {
    angular.bootstrap(document, ["gi.skin.insert"]);
});

angular.module("gi.skin.insert", ["gi.main", "gi.settings"])
    .run(angular.noop);
