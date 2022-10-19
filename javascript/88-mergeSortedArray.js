/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  for(let i = 0; i < n; i++) {
      nums1[m] = nums2[i];
      m++;
  }

  for(let i = 0; i < nums1.length-1; i++) {
      for(let j = 0; j < nums1.length-i-1; j++) {
          if(nums1[j] > nums1[j+1]) {
              let temp = nums1[j];
              nums1[j] = nums1[j+1];
              nums1[j+1] = temp;
          }
      }
  }
};