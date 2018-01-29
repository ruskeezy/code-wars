'use strict';

function cubeOdd(arr) {

  var includesNaN = false;
  // insert code here >.<
  arr = arr.map(item => {
    if (isNaN(item)) { includesNaN = true; return;}
    if (item%2 === 0) return 0;
    return item * item * item;
  });
  
  if (includesNaN) return undefined;
  
  return arr.reduce((acc, cur) => acc + cur);
  
  return 0;
  }