// largestInteger.js
/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    let arr = Array.from(String(num), Number);
    let odd = [];
    let even = [];
    // вытащить в массивы even & odd digits
    arr.forEach((item) => {
        if(item % 2 == 0) {
            even.push(item);
        } else {
            odd.push(item);
        }
    });
    // sort them
    even.sort((a, b) => (a-b));
    odd.sort((a, b) => (a-b));
    // а теперь перебираем если четное то вытаскиваем с четного массива, и наоборот только для нечетных
    // и все это собираем в один контейнер string ans
    let ans = "";
    arr.forEach((item) => {
        if(item % 2 == 0) {
            ans += even.pop();
        } else {
            ans += odd.pop();
        }
    });
    
    return ans;
};

console.log(largestInteger(65875));
console.log(largestInteger(1234));


//https://leetcode.com/contest/weekly-contest-288/problems/largest-number-after-digit-swaps-by-parity/
//Accepted



// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.