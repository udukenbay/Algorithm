/**
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/description/
 * https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
  for(let i=0; i<arr.length; i++) {
      for(let j=0; j < arr.length; j++) {
          if(arr[i] == 2 * arr[j] && i != j) {
              return true;
          }
      }
  }

  return false;
};
