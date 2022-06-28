/**
 * @param {number[]} nums
 * @return {boolean}
 */
// https://leetcode.com/problems/contains-duplicate/
 var containsDuplicate = function(nums) {
     // ** accepted
    // nums.sort((a, b) => a-b);
    // let result = false;

    // for(let i = 0; i < nums.length; i++) {
    //     if(nums[i] == nums[i+1]) {
    //         result = true;
    //         break;
    //     }
    // }
    // return result;

    //*** */
    let set = [];

    for(let i = 0; i < nums.length; i++) {
        if(set.includes(nums[i])) return true;
        set.push(nums[i]);
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

/**ACCEPTED 28.06.2022
 */
//  var containsDuplicate = function(nums) {
//     let result = false;
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] == nums[j]) {
//                 result = true;
//                 break;
//             }
//         }
//     }
//     return result;
// };