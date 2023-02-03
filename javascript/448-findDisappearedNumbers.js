/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let n = 1;
  let result = [];

  while(n <= nums.length) {
    if(!nums.includes(n)) {
      result.push(n)
    }
    n++;
  }

  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,1]))
console.log(findDisappearedNumbers([5,4,6,7,9,3,10,9,5,6]))
