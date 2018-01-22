'use strict';

function reverseString(str) {
  var reversedString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    reversedString += str[i];
  }
  return reversedString;
}