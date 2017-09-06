/*

  Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

  Furthermore, the function should also report back how many instances of each letter were found in the string.

 */

function countLetters(inputStr) {
  var letterObj = {};
  
  // Loop through each character in the string
  for (var i = 0; i < inputStr.length; i++) {
    var currentChar = inputStr.charAt(i);
    // If character does not exist in object, add it with default of 0, otherwise - skip
    if (!(currentChar in letterObj) && currentChar != ' ') {
      letterObj[currentChar] = inputStr.match(new RegExp(currentChar, "g")).length;
    }
  }
  
  return letterObj;
}

console.log(countLetters("lighthouse in the house"));