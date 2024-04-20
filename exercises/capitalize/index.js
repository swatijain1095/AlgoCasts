// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const wordArray = str.split(" ");
  console.log(wordArray);
  let result = "";
  wordArray.forEach((word, index) => {
    //word[0].toUpperCase() + word.slice(1)
    result += word[0].toUpperCase() + word.substring(1);
    // result += word.substring(0, 1).toUpperCase() + word.substring(1);
    if (index !== wordArray.length - 1) {
      result += " ";
    }
  });
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//   const wordArray = str.split(" ");
//   console.log(wordArray);
//   let result = [];
//   wordArray.forEach((word, index) => {
//     const capitalizedWord = word[0].toUpperCase() + word.substring(1);
//     result.push(capitalizedWord);
//   });
//   return result.join(" ");
// }
