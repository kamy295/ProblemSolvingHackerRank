console.log("A Very Big Sum");

function aVeryBigSum(ar) {
    // Write your code here
    return ar.reduce(function sum(t, c){ return t + c});
}

let a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(aVeryBigSum(a))