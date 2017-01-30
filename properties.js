const BUILD_PATH = __dirname + "/build";
const REGEX_ATTRIBUTES = [
    "*[ng-model]",
    "*[ng-scope]",
    "*[ng-binding]",
    "*[ng-repeat]",
    "*[ng-disabled]",
    "*[ng-transclude]",
    "*[ng-if]",
    //  "*[ng-click]",
    "*[ng-dblclick]",
    "*[ng-submit]"
];

const REGEX_CLASSES = [
    "ng-isolate-scope", "ng-valid", "ng-untouched", "ng-binding", "ng-pristine", "ng-scope", "ng-valid-pattern", "ng-invalid", "ng-invalid-required", "ng-valid-minlength", "ng-valid-maxlength", "ng-valid-ng-min", "ng-valid-ng-max"
];

module.exports.BUILD_PATH = BUILD_PATH;
module.exports.REGEX_ATTRIBUTES = REGEX_ATTRIBUTES;
module.exports.REGEX_CLASSES = REGEX_CLASSES;
