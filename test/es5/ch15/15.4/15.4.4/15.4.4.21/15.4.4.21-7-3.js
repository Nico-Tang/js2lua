/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-7-3.js
 * @description Array.prototype.reduce returns initialValue if 'length' is 0 and initialValue is present (subclassed Array, length overridden to false (type conversion))
 */


function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = false;
  
  function cb(){}
  try {
    if(f.reduce(cb,1) === 1)
      return true;
  }
  catch (e) {  }  
 }
runTestCase(testcase);
