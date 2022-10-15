/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {

  let maxOne = 0;
  let counter = 0;

  for(let i=0; i< nums.length; i++) {
      if(nums[i]==1) counter++;
      else {
          counter = 0;
      }

      if(maxOne < counter) maxOne = counter;

      // console.log('c', counter);
      // console.log('m', maxOne);
  }

  return maxOne;
};