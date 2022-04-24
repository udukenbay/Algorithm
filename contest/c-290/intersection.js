/**
 * @param {number[][]} nums
 * @return {number[]}
 * https://leetcode.com/contest/weekly-contest-290/problems/intersection-of-multiple-arrays/
 */
 var intersection = function(nums) {
    let result = nums.reduce((a, b) => a.filter(c => b.includes(c)));
    result.sort((a, b) => (a-b));
    return result;

//     var result = [];
//   var lists;

//   if(arguments.length === 1) {
//     lists = arguments[0];
//   } else {
//     lists = arguments;
//   }

//   for(var i = 0; i < lists.length; i++) {
//     var currentList = lists[i];
//     for(var y = 0; y < currentList.length; y++) {
//         var currentValue = currentList[y];
//       if(result.indexOf(currentValue) === -1) {
//         var existsInAll = true;
//         for(var x = 0; x < lists.length; x++) {
//           if(lists[x].indexOf(currentValue) === -1) {
//             existsInAll = false;
//             break;
//           }
//         }
//         if(existsInAll) {
//           result.push(currentValue);
//         }
//       }
//     }
//   }
//   return result;
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));
console.log(intersection([[7,34,45,10,12,27,13],[27,21,45,10,12,13]]));