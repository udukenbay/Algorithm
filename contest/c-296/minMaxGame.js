/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/contest/weekly-contest-296/problems/min-max-game/
 var minMaxGame = function(nums) {
    let n = nums.length;
    if(n == 1) return nums[0];
    Array.from(nums);

    return newArr(nums, n/2);
};

console.log(minMaxGame([1,3,5,2,4,8,2,2]));

function newArr(newNums, n) {

    for(let i = 0; i < n; i++) {
        if(i % 2 == 0) {
            newNums[i] = Math.min(newNums[2 * i], newNums[2 * i + 1]);
        } else {
            newNums[i] = Math.max(newNums[2 * i], newNums[2 * i + 1]);
        }
    }

    newNums.length = n;
    console.log(newNums, n);

    if(n == 1) {
        let k = newNums[0];
        return {n, k};
    }

    newArr(newNums, newNums.length/2);
}