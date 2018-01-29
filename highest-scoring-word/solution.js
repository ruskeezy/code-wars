'use strict';

function high(x){
  var strArr = x.split(" ");
  var highestValue = 0;
  var returnWord = "";
  for (var i = 0; i < strArr.length; i++)
  {
    var word = strArr[i];
    var wordValue = 0;
    for (var j = 0; j < word.length; j++)
    {
      wordValue += (word.charCodeAt(j)-96);
      if (wordValue > highestValue)
      {
        highestValue = wordValue;
        returnWord = word;
      }
    }      
  }
  return returnWord;
}