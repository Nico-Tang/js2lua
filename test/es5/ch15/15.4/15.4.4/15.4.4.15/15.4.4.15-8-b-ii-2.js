/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-b-ii-2.js
 * @description Array.prototype.lastIndexOf - both type of array element and type of search element are Undefined
 */


function testcase() {

        return [undefined].lastIndexOf() === 0 && [undefined].lastIndexOf(undefined) === 0;
    }
runTestCase(testcase);
