const { findCharacter, findAString} = require("./string-api");

describe('check if a string contains a sub string (char) ', () => {
  
  test('return true if a character is found in a string', ()=> {
    const phrase = "The shiny zebra";
    expect(findCharacter(phrase, 'z')).toBe(true);
  });

  test('return false if a character is not found in a string', () => {
    const phrase = "The shiny zebra.";
    expect(findCharacter(phrase, 'p')).toBe(false);
  });

  test('return false if a character exists in a string but not the same case', () => {
    const phrase = "The shiny zebra";
    expect(findCharacter(phrase, 'Z')).toBe(false);
  });
});

describe('check if a substring matches exactly to a string', () =>{
  const phrase = "shiny zebra"
  
  test( 'return true if a substring matches', () => {
    const subString = "shiny zebra";
    expect(findAString(phrase, subString)).toBe(true);  
  });

  test('return false if a substring does not match to phrase', () => {
    const subString = "cat ate a hat";
    expect(findAString(phrase, subString)).toBe(false);
  });

  test('returns false if a substring matches phrase content but not case for one or more characters', () => {
    const subString = "shiny Zebra"
    expect(findAString(phrase, subString)).toBe(false);
  });

  test('returns true if searching for an empty substring in string', () => {
    const subString = '';
    expect(findAString(phrase, subString)).toBe(true);
  });

  test('returns false if searching for a substring of spaces in a string', () => {
    const subString = "  ";
    expect(findAString(phrase, subString)).toBe(false);
  });
});

describe('check if contents of a different type or ds is in a string', () => {
  const phrase = "12 aliens faught a turtle"
  
  test('returns true if a number is in a string', () => {
    expect(findAString(phrase, 12 )).toBe(true);
  });

  test('returns true if an array of numbers turned into a string is found in another string', () => {
    let numbers = [1, 2];
    expect(findAString(phrase, numbers)).toBe(true);
  });

  test('returns true if an object values turned into a string is found in another string', () => {
    let charFrequency = {
      a: 1,
      b: 2
    };
    expect(findAString(phrase, charFrequency)).toBe(true);
  });
});

describe('search for a substring within a string given a starting position', () => {
  const phrase = 'angry mutant turtles';
  
  test('returns true if a substring is found after a starting position (includes starting position for search)', () => {
    let subString = 'turtle';
    expect(findAString(phrase, subString, 4)).toBe(true);
  });

  test('returns false if a substring is not found after a starting position (includes starting position for search)', () => {
    let subString = 'turtle';
    expect(findAString(phrase, subString, 14)).toBe(false);
  });

  test('returns true if a substring is not found after a starting position that does not exist such as negative positions or NaN (includes starting position for search)', () => {
    let subString = 'turtle';
    expect(findAString(phrase, subString, 'hi')).toBe(true);
    expect(findAString(phrase, subString, -10)).toBe(true);
  });

});