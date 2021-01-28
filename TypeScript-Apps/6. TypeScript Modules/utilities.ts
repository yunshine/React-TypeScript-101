// to import a module, define the path to the module's file...
/// <reference path="modules.ts" />

// after importing the module as above, we need to create the class in this file...
const use = new Utility.Useful();

// use 'use' and call the function...
console.log(use.timesTwo(309));

// then we need to combine and comile module.ts and utilities.ts by typing the following in the terminal:
// tsc utilities.ts modules.ts --out utilities.js