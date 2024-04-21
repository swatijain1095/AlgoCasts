// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let i = 0;
  const vowel = ["a", "e", "i", "o", "u"];
  const arr = str.toLowerCase().split("");
  arr.forEach((element) => {
    if (vowel.includes(element)) {
      i++;
    }
  });
  return i;
}

module.exports = vowels;

//alternate mothod
// function vowels(str) {
//   let count = 0
//   const checker = ["a", "e", "i", "o", "u"];

//   for(let char of str.toLowerCase()) {
//     if(checker.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// alternate solution
// function vowels(str){
//   const matches = str.match(/[aeiou]/gi)
//   return matches ? matches.length : 0
// }
