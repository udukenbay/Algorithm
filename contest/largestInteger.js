/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    let arr = num.toString().split("");
    let temp = 0;
    
    for(let i=0; i< arr.length; i++) {
        //even
        if(arr[i] % 2 == 0) {
            console.log(arr[i]);
            for(let j=1; j < arr.length-1; j++) {
                if(arr[j] % 2 == 0) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    break;
                } 
            }
        }
        //odd
        else {
            console.log(arr[i]);

            for(let j=1; j < arr.length-1; j++) {
                if(arr[j] % 2 != 0) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    break;
                }
            }
        }
    }
    
    return arr.join("");

	// swap them
    // const temp = arr0[last];
    // arr0[last] = arr0[first];
    // arr0[first] = temp;
    
};

console.log(largestInteger(65875));
console.log(largestInteger(1234));


//https://leetcode.com/contest/weekly-contest-288/problems/largest-number-after-digit-swaps-by-parity/