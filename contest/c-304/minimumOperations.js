/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
 */
 var minimumOperations = function(nums) {
    //количество уникальных элементов
    // let a = [... new Set(nums)];
    return nums.filter((item, i, ar) => ar.indexOf(item) === i && item != 0).length;
};

console.log(minimumOperations([1,5,0,3,5]));
console.log(minimumOperations([0]));
console.log(minimumOperations([1]));