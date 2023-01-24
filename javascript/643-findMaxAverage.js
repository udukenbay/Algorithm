/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let avg = [];
  let i = 0;

  while(i < nums.length) {
      let j = 0;
      let sum = 0;
      while(j < k && i < nums.length) {
        sum += nums[i+j];
        j++;
      }

      avg.push(sum/k);
      i++;
  }

  avg = avg.filter(Boolean);

  if(Math.max(...avg) === -Infinity) return 0;

  return Math.max(...avg);
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([0], 1))
