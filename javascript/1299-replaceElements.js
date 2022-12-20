/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/
 * https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
  let max = 0;
  let maxIndex;

  for(let i=arr.length-1; i >= 0; i--) {
      if(i == arr.length-1) {
          max = arr[i];
          arr[i] = -1;
      } else {
          if(max < arr[i]) {
              let temp = arr[i];
              arr[i] = max;
              max = temp;
          } else {
              arr[i] = max;
          }
      }

  }

  return arr;
};
