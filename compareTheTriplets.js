console.log("Compare the Triplets")

function compareTriplets(a, b) {
    // Write your code here
    let p1 = 0;
    let p2 = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            p1 += 1;
        } else if (a[i] < b[i]){
            p2 += 1;
        } else if (a[i] == b[i]){
            p1 = p1;
            p2 = p2;
        }
    }
    if (p1 > p2) return [p1, p2]
    else {return [p1, p2]}

}

// let a = [5, 6, 7];
// let b = [3, 6, 10];

let a = [17, 28, 30];
let b = [99, 16, 8]

// let a = [1, 2, 3]
// let b = [3, 2, 1]

// let a = [6, 8, 12]
// let b = [7, 9, 15]
console.log(compareTriplets(a, b))