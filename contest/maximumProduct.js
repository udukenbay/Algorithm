//MaxProdAfterKIncs
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumProduct = function(nums, k) {
        nums = nums.sort((a, b) => b-a);
        console.log(nums);
    
    let smallest;
    while(k > 0) {
        console.log(nums);
        smallest = nums.pop();
        smallest++;
        nums.push(smallest);
        k--;
    }

    let res = 1;
    nums.forEach((item) => {
        res *= item;
    });

    return res;
};

console.log(maximumProduct([0,4], 5));//20
console.log(maximumProduct([6,3,3,2], 2));//216
console.log(maximumProduct([24,5,64,53,26,38], 54));//180820950

// https://leetcode.com/contest/weekly-contest-288/problems/maximum-product-after-k-increments/


// 2233. Maximum Product After K Increments
// You are given an array of non-negative integers nums and an integer k. In one operation, you may choose any element from nums and increment it by 1.

// Return the maximum product of nums after at most k operations. Since the answer may be very large, return it modulo 109 + 7. Note that you should maximize the product before taking the modulo. 