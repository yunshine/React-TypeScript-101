// modules export classes so that other files can have access to the classes being exported...

module Utility {
    export class Useful {
        timesTwo(num : number) {
            return num * 2;
        }

        // since timesTwo is in a class, we need to remove the keyword 'function' as above, not below...
        // function timesTwo(num : number) {
        //     return num * 2;
        // }
    }
}
