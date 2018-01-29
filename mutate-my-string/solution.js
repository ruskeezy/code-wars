'use strict';

function mutateMyStrings(stringOne, stringTwo){
  var arr = [stringOne];
  for(let i=0; i<stringOne.length; i++) if(stringOne[i]!==stringTwo[i]) arr.push(stringTwo.slice(0,i+1)+stringOne.slice(i+1))
  return arr.join('\n')+'\n'
}