/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let k = 0;
  let expected = heights.slice();

  bubleSort(expected);

  let i=0;
  while(i<heights.length) {
      if(heights[i] !== expected[i]) k++;
      i++;
  }
  return k;
};

function bubleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[j] < arr[i]) {
              let swap = arr[j];
              arr[j] = arr[i];
              arr[i] = swap;
          }
      }
  }
  return arr;
}
