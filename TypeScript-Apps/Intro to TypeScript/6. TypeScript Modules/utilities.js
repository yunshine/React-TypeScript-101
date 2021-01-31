// modules export classes so that other files can have access to the classes being exported...
var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (num) {
            return num * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
// to import a module, define the path to the module's file...
/// <reference path="modules.ts" />
// after importing the module as above, we need to create the class in this file...
var use = new Utility.Useful();
// use 'use' and call the function...
console.log(use.timesTwo(309));
// then we need to combine and comile module.ts and utilities.ts by typing the following in the terminal:
// tsc utilities.ts modules.ts --out utilities.js
