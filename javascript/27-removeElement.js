/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let k = 0;
  k = nums.filter(x => x==val).length;

  nums = nums.filter(x => x != val);
  console.log(nums);
  console.log(k);

  return nums;
};