console.log("Birthday Cake Candles");

function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0;
    candles.sort(function (a, b) { return b-a})
    for(let i = 0; i < candles.length; i++){
        if(candles[0] === candles[i]){
            count += 1;
        }
    }
    return count;
}

let a = [3,2,1,3];
console.log(birthdayCakeCandles(a))