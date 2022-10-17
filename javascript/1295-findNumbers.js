/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
  let result = 0;
  let counter = 0;

  for(let i = 0; i < nums.length; i++) {
      while(Math.floor(nums[i]/10) != 0) {
          nums[i] = Math.floor(nums[i]/10);
          counter++;
      }

      counter++;
      if(counter%2 == 0) {
          result++;
      }

      counter = 0;
  }

  return result;
};