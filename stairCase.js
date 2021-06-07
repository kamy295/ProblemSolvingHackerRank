console.log("StairCase");

function staircase(n) {
  // Write your code here
  let string = "";
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string)
}

let a = 6;
staircase(a);
