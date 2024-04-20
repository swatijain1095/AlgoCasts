// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str2;
}

module.exports = reverse;

//alternative solution1
// return str.split('').reverse().join('')

//alternate solution2
//let reversed = ''
//for(let character of str){
//  reversed = character + reversed
//}
//return reversed

//alternate solution 3
// return str.split('').reduce((character, reversed) => {
//   return character + reversed
// }, '')
