console.log("Min-Max Sum");

// Write your code here
function miniMaxSum(arr) {
  arr.sort(function(a, b){return a-b});
  var min = [];
  var max = [];
  var l = arr.length
  for(let i = 0; i < 4; i++){
      min.push(arr[i])
  }
  for(let j = l-1; j > l-5; j--){
      max.push(arr[j])
  }
  let x = min.reduce(function (t, c) { return t + c});
  let y = max.reduce(function (t, c) { return t + c});

  console.log(x, y)
}


/*Different Methods -
Method 2 -----------  O(n) Solution 
function miniMaxSum(arr) {
    let min = +Infinity, max = -Infinity, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min)
            min = arr[i];
        if (arr[i] > max)
            max = arr[i];
    }
    console.log(sum - max, sum - min); 
}

Method 3 --------------

function sum(x, y) {
    return Number(x) + Number(y);
}

function main() {
    //var a_temp = readLine().split(" ");
    //console.log(a_temp)
    const sorted = arr.sort();
    const min = sorted.slice(0, 4).reduce(sum, 0);
    const max = sorted.slice(1, 5).reduce(sum, 0);
    console.log(min, max);
}


*/


let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
//main()