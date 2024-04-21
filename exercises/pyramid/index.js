// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const generateString = (str, count) => {
  // str = #, count = 3, output = ###
  // str = ' ', count = 7, output = '       '
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
};

function pyramid(n) {
  const cols = n + (n - 1);
  let totalCountHash = 1;
  let totalCountSpace = cols - 1;
  while (totalCountHash <= cols) {
    console.log(
      generateString(" ", totalCountSpace / 2) +
        generateString("#", totalCountHash) +
        generateString(" ", totalCountSpace / 2)
    );

    totalCountHash += 2;
    totalCountSpace -= 2;
  }
}

module.exports = pyramid;

//alternate solution(recurssion)
// //totalCountHash <= cols
// function pyramid(n, totalCountHash = 1, totalCountSpace) {
//   if (totalCountSpace === undefined) {
//     totalCountSpace = 2 * n - 2;
//   }
//   //base case
//   if (totalCountHash > 2 * n - 1) {
//     return;
//   }
//   console.log(
//     generateString(" ", totalCountSpace / 2) +
//       generateString("#", totalCountHash) +
//       generateString(" ", totalCountSpace / 2)
//   );
//   pyramid(n, totalCountHash + 2, totalCountSpace - 2);
// }

// module.exports = pyramid;

//alternative solution
// function pyramid(n){
//   const midpoint = Math.floor((2 * n -1) /2);
//   for (let row = 0; row<n; row++){
//     let level = ''

//   for(let column = 0; column< 2*n-1; column ++0) {
//     if(midpoint -row <=column && midpoint + row >= column){
//       level +='#'
//     } else {
//       level += ''
//     }
//   }console.log(level)
// }
// }

//alternate solution 2 (recursion)
// function pyramid(n, row=0, level = '') {
//   if(row === n){
//     return
//   }
//   if(level.length ===2*n-1){
//     console.log(level)
//     return pyramid(n, row+1)
//   }
//   const midpoint = Math.floor((2*n-1)/2);
//   let add;
//   if(midpoint -row <=level.length && midpoint + row >=level.length){
//     add = '#'
//   }else{
//     add = ''
//   }
//   pyramid(n, row, level + add)
// }
