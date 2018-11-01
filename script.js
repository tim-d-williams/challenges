//Given an arbitrary input string, write a function that returns the first
//non-repeating character. For strings with all repeats, return 'sorry'.
// EX: "ABCD" --> "A"
// EX: "XXXXX" --> "sorry"
// EX: "ALABAMA" --> "L"
// EX: "BABA" --> "sorry"
//

  function nonRepeating(str) {
    let index = [];
    for (var i = 0; i < str.length; i++) {
      count = 0;
      for (var j = 0; j < str.length; j++) {
        if (str.charAt(i) === str.charAt(j)) {
          count += 1
        }
      } index.push(count);
    } return str[index.indexOf(1)] || "sorry";
  }
  nonRepeating("XXXX");


//Find the first item that occurs an even number of times in an array.
//Remember to handle multiple even-occurrence items and return the first one.
//Return null if there are no even-occurrence items.
//
// EX: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] --> 2
// EX: [ "cat", "dog", "dig", "cat" ] --> "cat"
// EX: [ "one", "two", "three" ] --> null

function evenNumber(arr) {
  let index = [];
  var iterator = arr.values();

for (let letter of iterator) {
//  console.log(letter);
}
}
//   for (var i = 0; i < arr.length; i++) {
//     count = 0;
//     for (var j = 0; j < arr.length; j++) {
//       if (arr.values(i) === arr.values(j)) {
//         count += 1
//       }
//     } index.push(count);
//   } return str[index.indexOf(1)] || "sorry";
// }
evenNumber([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]);


// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
//
// EX: [2, 1, 3, 7] --> 42
// EX: [0, 2, 3] --> 0


// Write a function named `camelCase` that takes one parameter, a string that is
// all lowercase and doesn't include any punctuation. This function should take
// that string and convert it to camel case.
//
// EX: camelCase("this is a string") —> "thisIsAString"
// EX: camelCase("vacation rentals by owner") —>`"vacationRentalsByOwner"
// EX: camelCase("supercalifragalisticexpialidocious") —> "supercalifragalisticexpialidocious"
camelCase = function(str) {
  return str.replace(/\W+(.)/g, function(match, char)
  {
       return char.toUpperCase();
   });
}

// Using the helper functions below, write a function called numberToEnglish that takes a number as a parameter and returns the number as a string using English words.
//
// EX: numberToEnglish(7) --> "seven"
// EX: numberToEnglish(575) --> "five hundred seventy-five"
// EX: numberToEnglish(78193512) --> ""seventy-eight million one hundred ninety-three thousand five hundred twelve"

let numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

let numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it's a prime number, false if it's not.
//
// EX: primeTester(2) --> true
// EX: primeTester(1) --> false
// EX: primeTester(13) --> true
function primeTester(num) {
    if (((num <=1) || num > 2 && num % 2 === 0) || (num > 3 && num % 3 === 0) || (num > 5 && num % 5 === 0) || (num > 7 && num % 7 === 0)) {
      return false;
  }
    return true;
}

//Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

//EX: nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) --> "grays"



//Given a string, remove any characters that are not unique from the string.
//
// EX: onlyUnique("abccdefe") --> "abdf"
// EX: onlyUnique("hello there") --> "o tr"
// EX: onlyUnique("xyz") --> "xyz"
// EX: onlyUnique("iiii") --> ""
