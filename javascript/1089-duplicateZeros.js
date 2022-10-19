/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
  let size = arr.length;

  for(let i=0; i < size; i++) {
      if(arr[i] == 0 && i+1 != size) {
          // console.log('index:', i);
          // console.log(arr);

          for(let j = arr.length-1; j > i; j--) {
              arr[j] = arr[j-1];
          }

          arr[i+1] = 0;
          // console.log('i:', i);
          i++;
      }
  }

  return arr;
};