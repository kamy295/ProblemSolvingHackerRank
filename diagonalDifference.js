console.log("Diagonal Difference");

function diagonalDifference(arr) {
  // Write your code here
  var primary = [];
  var secondary = [];
  for (let i = 0, j = 0, k = arr[i].length - 1; i < arr.length; i++, j++, k--) {
    secondary.push(arr[i][k]);
    primary.push(arr[i][j]);
  }
  return Math.abs(
    primary.reduce(function sum(t, c) {
      return t + c;
    }) -
      secondary.reduce(function sum(t, c) {
        return t + c;
      })
  );
}

// let a = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];

let a = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
];  // Expected -> 1
console.log(diagonalDifference(a));
