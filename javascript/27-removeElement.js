/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let k = 0;
  k = nums.filter(x => x==val).length;

  console.log(nums.indexOf(val));
  while(nums.includes(val)) {
      for(let i=nums.indexOf(val); i<nums.length; i++) {
          nums[i] = nums[i+1];
      }
      console.log(nums);
  }
  console.log(k);
  nums = nums.filter((item) => {return item != undefined})

  return nums.length;
};

console.log(removeElement([3,2,2,3], 3));