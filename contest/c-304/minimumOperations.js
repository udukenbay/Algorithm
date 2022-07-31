/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
    //количество уникальных элементов
    // let a = [... new Set(nums)];
    return nums.filter((item, i, ar) => ar.indexOf(item) === i && item != 0).length;
};

console.log(minimumOperations([1,5,0,3,5]));
console.log(minimumOperations([0]));
console.log(minimumOperations([1]));