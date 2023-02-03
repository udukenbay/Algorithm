/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  // Sort the array in non-increasing order.
  nums.sort((a, b) => b - a);

  let k = 1;
  let prev = nums[0];

  for(let i = 1; i < nums.length; i++) {
    // Current element is different from previous.
    if(nums[i] != prev) {
      prev = nums[i];
      k++;
    }

    // If we have counted 3 numbers then return current number.
    if(k == 3) {
      return nums[i];
    }
  }

  // We never counted 3 distinct numbers, return largest number.
  return nums[0];

  // only distinct values
  // for(let i=1; i < nums.length; i++) {
  //   if(nums[i] == nums[i+1]) {
  //       nums = nums.filter(el => el != nums[i]);
  //   }
  // }
};

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(thirdMax([1,2,2]));//2
console.log(thirdMax([1,2]));//2
console.log(thirdMax([2,2,3,1]));//1
console.log(thirdMax([3,2,1]));//1
console.log(thirdMax([5,2]));//5
