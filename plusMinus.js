console.log("Plus - Minus");

function plusMinus(arr) {
    // Write your code here
    let postive = 0;
    let negative = 0;
    let zeros = 0;
    for(var i = 0; i < arr.length; i++){
        arr[i] > 0 ? postive += 1 : arr[i] < 0 ? negative += 1 : zeros += 1;
        // if(arr[i] > 0){
        //     postive += 1;
        // } else if (arr[i] < 0){
        //     negative += 1;
        // } else {
        //     zeros += 1;
        // }
    }
    console.log((postive/arr.length).toFixed(6))
    console.log((negative/arr.length).toFixed(6)) 
    console.log((zeros/arr.length).toFixed(6));
}

let a = [-4, 3, -9, 0, 4, 1]
plusMinus(a);