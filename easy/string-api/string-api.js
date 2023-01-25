/**

finding a single character 
    -can be done (a character is also a string, in JS)
    -reports false if character was not found

*/

function findCharacter (phrase, character) {
  return phrase.includes(character) ? true : false;
}


function findAString (phrase, subString, position=0) {
  if( typeof subString === "object"){
    if(Array.isArray(subString)){
      subString = subString.join('');
    } else{
      subString = Object.values(subString).toString().split(',').join('');
    }
  }
  return phrase.includes(subString,position)? true : false;
}




module.exports = {findCharacter, findAString};