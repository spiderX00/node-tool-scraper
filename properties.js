const BUILD_PATH = __dirname + "/build";
const REGEX_ATTRIBUTES = [
    "*[ng-model]",
    "*[ng-scope]",
    "*[ng-binding]",
    "*[ng-repeat]",
    "*[ng-disabled]",
//  "*[ng-click]",
    "*[ng-dblclick]",
    "*[ng-submit]"
];

module.exports.BUILD_PATH = BUILD_PATH;
module.exports.REGEX_ATTRIBUTES = REGEX_ATTRIBUTES;
