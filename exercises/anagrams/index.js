// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const str1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  const str2 = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }
  const charsA = {};
  for (let char of str1) {
    if (charsA[char]) {
      charsA[char]++;
    } else {
      charsA[char] = 1;
    }
  }
  const charsB = {};
  for (let char of str2) {
    if (charsB[char]) {
      charsB[char]++;
    } else {
      charsB[char] = 1;
    }
  }
  for (key in charsA) {
    if (!(charsA[key] === charsB[key])) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;

//alternate method
//helper function:
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false
//   }
//   for (let char in aCharMap){
//     if(aCharMap[char] !== bCharMap[char]){
//       return false
//     }
//   }
//   return true
// }

//alternate method 2
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }
