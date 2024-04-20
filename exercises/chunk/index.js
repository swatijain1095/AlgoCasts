// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let chunk = [];
  array.forEach((item, index) => {
    chunk.push(item);
    if (
      chunk.length === size ||
      (index === array.length - 1 && chunk.length !== 0)
    ) {
      result.push(chunk);
      chunk = [];
    }
  });
  return result;
}

module.exports = chunk;

//alternate method
// const chunked = []
// let index = 0
// while (index < array.length){
//   chunked.push(array.slice(index, index + size))
//   index +=size
// }
