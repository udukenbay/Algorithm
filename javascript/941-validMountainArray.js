/**
 * https://leetcode.com/problems/valid-mountain-array/description/
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  let maxVal = Math.max(...arr);
  let maxValIndex = arr.indexOf(maxVal);
  let result;
  console.log(maxVal, maxValIndex);

  if(arr.length < 3 || maxValIndex == 0 || maxValIndex == arr.length-1) return false;

  //up
  for(let i = 0; i < maxValIndex; i++) {
      if(arr[i] >= maxVal || (i+1 != maxValIndex && arr[i] >= arr[i+1])) {
          return false;
      }
      result = true;
  }

  //down
  for(let i = arr.length-1; i > maxValIndex; i--) {
      console.log(arr[i], i, 'tt');
      if(arr[i] >= maxVal || (i-1 != maxValIndex && arr[i] >= arr[i-1])) {
          return false;
      }
      result = true;
  }

  return result;
};
