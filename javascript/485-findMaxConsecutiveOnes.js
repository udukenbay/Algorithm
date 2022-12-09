/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let max1 = 0;
  let counter = 0;

  for(let i=0; i < nums.length; i++) {
      if(nums[i] == 1) {
          counter++;
          max1 = Math.max(max1, counter)
      } else {
          counter = 0;
      }
  }

  return max1;
};

//485. Max Consecutive Ones
