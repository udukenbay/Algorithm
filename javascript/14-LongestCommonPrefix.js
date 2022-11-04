// 14-LongestCommonPrefix.js
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
/**
 * @param {string[]} strs
 * @return {string}
 */
//  var longestCommonPrefix = function(strs) {
//     let size = strs.length;
//     let pref = "";

//     if(size == 0)
//         return "";

//     if(size == 1)
//         return strs[0];

//     strs.sort();

//     let minSize = Math.min(strs[0].length, strs[size-1].length);

//     let i = 0;
//     while(i < minSize && strs[0][i] == strs[size-1][i]) {
//         i++;
//         pref = strs[0].substring(0, i);
//     }

//     return pref;
// };

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
console.log(longestCommonPrefix(["apple", "ape", "april"]));
console.log(longestCommonPrefix(["aaa","aa","aaa"]));


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // sort
    for(let i=0; i < strs.length; i++) {
        for(let j=i; j < strs.length-1; j++) {
            if(strs[i].length > strs[j].length) {
                let temp = strs[j];
                strs[j]=strs[i];
                strs[i]=temp;
            }
        }
    }

    console.log(strs);

    let box = [];
    let word = strs[0];

    for(let i=0; i< word.length; i++) {

        let check = true;

        for(let j=0; j<strs.length; j++) {
            let item = strs[j];

            console.log(item);
            console.log('item'+i,item.substring(0, i+1));
            console.log('word'+i, word.substring(0, i+1));

            if(item.substring(0, i+1) != word.substring(0, i+1)) {
                check = false;
            }
        }

        if(check) {
            box.push(word.substring(0, i+1));
        }
    }

    console.log(box);

    if(box.length > 0)
        return box[box.length-1];
    else return "";
};