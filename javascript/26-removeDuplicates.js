/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let k = 1;

  for(let i = 1; i < nums.length; i++) {
                  console.log(i, nums);

      if(nums[i-1] != nums[i]) {
          nums[k] = nums[i];
          k++;
      }
  }

  return k
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
