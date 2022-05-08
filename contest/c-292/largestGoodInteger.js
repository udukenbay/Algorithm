/**
 * @param {string} num
 * @return {string}
 */
// https://leetcode.com/contest/weekly-contest-292/problems/largest-3-same-digit-number-in-string/
// 6057
 var largestGoodInteger = function(num) {
    let i, n;
    let stack = [];

    n = num.length;
    if(n < 3) return '';    

    for(i = 0; i < n; i++) {
        if(num.charAt(i) == num.charAt(i+1) && num.substring(i+1, i+2) == num.substring(i+2, i+3)) {
            // console.log(num.substring(i+2, i+3));
            stack.push(num.charAt(i) + '' + num.substring(i+1, i+2) + '' + num.substring(i+2, i+3));
        }
    }

    stack.sort((a, b) => a-b);
    return stack.length > 0 ? stack[stack.length-1] : '';
};

console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("2300019"));
console.log(largestGoodInteger("42352338"));