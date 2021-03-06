// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When length of searchString less than length of ToString(this) -1 returns
 *
 * @path ch15/15.5/15.5.4/15.5.4.7/S15.5.4.7_A2_T2.js
 * @description Call "abcd".indexOf("abcdab",0) and check result
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("abcd".indexOf("abcdab",0)!==-1) {
  $ERROR('#1: "abcd".indexOf("abcdab",0)===-1. Actual: '+("abcd".indexOf("abcdab",0))); 
}
//
//////////////////////////////////////////////////////////////////////////////

