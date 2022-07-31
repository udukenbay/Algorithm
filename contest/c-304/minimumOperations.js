/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
 */
//  var minimumOperations = function(nums) {
//     //количество уникальных элементов
//     // let a = [... new Set(nums)];
//     return nums.filter((item, i, ar) => ar.indexOf(item) === i && item != 0).length;
// };


var minimumOperations = function(nums) {
    let total = 0;
    let cntr = 0;
    nums.sort();
    for(let i in nums) {
        if(!i) continue;
        if(i - total > 0) {
            total -= i;
            if(total < 0) total *= -1;
            cntr++;
        }
    }
    return cntr;
};

console.log(minimumOperations([1,5,0,3,5]));
console.log(minimumOperations([0]));
console.log(minimumOperations([1]));