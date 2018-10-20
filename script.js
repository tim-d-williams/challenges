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
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
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
